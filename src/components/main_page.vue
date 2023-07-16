<!--
    1. geolocation 수정
    2. 장소 추가 '등록'하면 

    https://spic.tistory.com/m/411 참고해서 '키워드로 장소 검색하기' 로 변경
    https://itstory1592.tistory.com/52 참고해서 지도 중복? 해결
-->
<template>
    <v-app>
        <v-app-bar color="#2c38a8" dark app density="compact">
            <router-link to="/">
                <v-btn icon>
                <v-icon>mdi-home</v-icon>
                </v-btn>
            </router-link>
            <v-spacer></v-spacer>
            <div v-if="$route.name=='main_page'" style="display: flex;">
                <!--<v-text-field id="address" class="mt-4" clearable label="검색어를 입력하세요." variant="outlined"></v-text-field>-->
                <!--<v-btn icon @click="fnOpenPost" value="주소검색" large >-->
                <!-- <router-link to="/detail">
                    <v-btn icon value="주소검색" large>
                        <v-icon>search</v-icon>
                    </v-btn>
                </router-link> -->
                <v-btn icon large> <!-- @click="getCurrentPos"-->
                    <v-icon>mdi-crosshairs-gps</v-icon>
                </v-btn>
            </div>
        </v-app-bar>

        <!--지도 나타낼 부분-->
        <v-main id="map">
            <!-- <router-link to="/add">
                <v-btn color="primary" dark fixed bottom right fab>
                    <v-icon>add</v-icon>
                </v-btn>
            </router-link> -->
        </v-main>
    
        <!--장소추가 페이지 : dialog
        <v-row justify="center">
            <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition">
                <template v-slot:activator="{props}">
                    <v-btn @click="dialog=true" color="primary" dark fixed bottom right fab>
                        <v-icon>add</v-icon>
                    </v-btn>
                </template>
                <v-card>
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog=false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-toolbar-title>장소등록</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn type="submit" icon variant="text" @click="dialog=false, validate" fab :disabled="!valid">등록</v-btn>
                        </v-toolbar-items>
                    </v-toolbar>
                    <v-form  @submit.prevent="submit" ref="form">
                        <v-container>
                            <v-row>
                                <v-col cols="10">
                                    <v-text-field id="s_addr" label="주소" ></v-text-field>
                                </v-col>
                                <v-btn type="button" class="mt-5" @click="staticOpenpost()">검색</v-btn>
                                <div id="staticMap" style="width:300px;height:300px;margin-top:10px;display:none"></div>
                                
                                <v-col cols="12">
                                    <v-text-field label="장소이름" v-model="form.t_name" required :rules="[rule.required]"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea clearable label="설명" v-model="form.t_cont" :rules="[rule.required]"></v-textarea>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </v-card>
            </v-dialog>
        </v-row>-->
    </v-app>
</template>

<style scope>
    #map{
        width: 100vw;
        height: 100vh;
    }
    /* .dialog-bottom-transition-enter-active,
    .dialog-bottom-transition-leave-active{
        transition: transform .2s ease-in-out;
    } */
</style>

<script>
// import Sdata from '@/assets/seoul_toilet.json'
import Add from '@/components/add_page.vue'
import Detail from '@/components/detail_page.vue'
import data from '@/assets/경기도공중화장실현황(제공표준).json'


/* https://soa-memo.tistory.com/m/41 참조 */
export default{
    data(){
        return{
            dialog: false,
            //// map: null,
            // Sdata: []

            //validation
            form: {
                // t_addr:'',
                t_name:'',
                t_cont:'',
            },
            rule:{
                required: v => !!v || '필수 항목입니다.',
            },
            valid: false,

            data
        }
    },
    components: {
        Add,
        Detail,
    },
    mounted(){
        if(window.kakao && window.kakao.maps){
            /// 카카오 객체 있고, 맵 그릴 준비 돼있으면 맵 실행
            this.loadMap();
        } else{
            /// 없으면 스크립트 추가 후 맵 실행
            this.loadScript();
        }
        /* Mixed content 문제
        fetch('../assets/경기도공중화장실현황(제공표준).json')
        .then(response => response.json())
        .then(data => {
            this.jsonData = data;
        })
        .catch(error=>{
            console.error(error);
        })
        */
    },

    /*
    computed:{
        toilets(){
            return Sdata.map((items)=>{
                let latlng = items.y_wgs84 +', '+ items.x_wgs84
                items['latlng'] = items
                return items
            })
        }
    },
    */
    
    methods: {
        /// app-bar 주소찾기 팝업
        /* 
        fnOpenPost(){
            /// window.open()이 동작 안 할 수도 있어 >> 하이브리드앱 개발 :  }).open() - 바꿔 -> }).embed(this.$refs.embed)
            new window.daum.Postcode({
                oncomplete: function(data) {
                    var mapContainer = document.getElementById('map')
                    var mapOptions = {
                        center : new daum.maps.LatLng(37.54134, 126.96213),
                        level: 5
                    }

                    var map = new daum.maps.Map(mapContainer, mapOptions)

                    //최종 주소 변수
                    var addr = data.address; 
                    // document.getElementById('address').value = addr

                    //주소-좌표 변환 객체 생성
                    var geocoder = new daum.maps.services.Geocoder();

                    var marker = new kakao.maps.Marker({
                    //   imageSrc :"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png" ,
                    //   imgSize: new kakao.maps.Size(24,35),
                    position: new daum.maps.LatLng(37.54134, 126.96213),
                    map:this.map2,
                    //   image: new kakao.maps.MarkerImage(imageSrc, imgSize)
                    })

        

                    geocoder.addressSearch(addr, function(results, status){
                    /// 정상적으로 검색이 끝나면
                    if(status === daum.maps.services.Status.OK) {
                        /// 첫번째 결과의 값을 활용
                        var result = results[0];
                        /// 해당 주소에 대한 좌표 받아서
                        var coords = new daum.maps.LatLng(result.y, result.x)
                        /// 지도 보여주기
                        // mapContainer.style.display = 'block';
                        // map.relayout();
                        /// 지도 중심 변경
                        map.setCenter(coords);
                        
                        // marker.setPosition(coords)
                        
                    }
                    })
                }
            }).open();
        },
        */
        
        /// dialog 주소찾기
        /*
        staticOpenpost(){
            new window.daum.Postcode({
                oncomplete: function(data){
                    var Container = document.getElementById('staticMap')
                    var Option = {
                        center: new daum.maps.LatLng(37.54134, 126.96213),
                        level: 5
                    }
                    
                    var map = new daum.maps.Map(Container, Option)
                    var geocoder = new daum.maps.services.Geocoder()

                    var marker = new daum.maps.Marker({
                        position: new daum.maps.LatLng(37.54134, 126.96213),
                        map: map
                    })

                    var addr = data.address

                    document.getElementById('s_addr').value = addr
                    geocoder.addressSearch(data.address, function(results, status){
                        if(status === daum.maps.services.Status.OK){
                            var result = results[0]
                            var coords = new daum.maps.LatLng(result.y, result.x)
                            Container.style.display = 'block'
                            map.relayout()
                            map.setCenter(coords)
                            marker.setPosition(coords)
                        }
                    })
                }
            }).open()
        },
        */
        

        /// 스크립트에 지도api 추가
        loadScript(){
            const script = document.createElement('script');
            /// API로드 후 맵 그리는 함수 실행, 동적으로 script 로딩하기 위해 autoload=false 옵션지정!
            script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=a94b20af546ccbc16088bd33eaf12dc5&autoload=false&libraries=services';
            /// 스크립트 로드 후 지도 실행
            script.onload = () => window.kakao.maps.load(this.loadMap);
            
            /// html head안에 스크립트 추가
            document.head.appendChild(script);
        },

        /// #main에 지도 띄우기
        loadMap(){
            const container = document.getElementById('map');
            const options = {
                /// 지도 생성 시 기본옵션
                /// center: 지도의 중심좌표, level: 확대/축소 정도
                center: new window.kakao.maps.LatLng(37.45532, 127.13762), 
                level: 5,       
            };

            /// 지도 생성 및 객체 리턴
            this.map = new kakao.maps.Map(container, options);

            /* 경기도 화장실
            PBCTLT_PLC_NM 화장실 이름 / REFINE_ROADNM_ADDR 도로명주소 /
            MALE_WTRCLS_CNT 남.대 + MALE_UIL_CNT 남.소 / FEMALE_WTRCLS_CNT 여.대 / 
            REFINE_WGS84_LAT 위도 / REFINE_WGS84_LOGT 경도 
            */
            const Sdata = this.data['Stoilet']
            

            //마커 이미지
            var imgSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"
            //var imgSrc = "/src/assets/marker.png" // /:최상위루트 ./:현재디렉터리 ../:상위디렉터리

                
            for(var i=0; i< Sdata.length; i++){
                const latlng = new kakao.maps.LatLng(Sdata[i].REFINE_WGS84_LAT, Sdata[i].REFINE_WGS84_LOGT)
                var imgSize = new kakao.maps.Size(24,35)
                var imgOption = {offset: new kakao.maps.Point(13, 40)}

                var markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize, imgOption)

                var marker = new kakao.maps.Marker({
                    position: latlng,
                    map:this.map,
                    image: markerImg,
                        
                    title: Sdata[i].PBCTLT_PLC_NM
                })
                marker
                    //marker.push()
                }
                
            }

            //var positions = []

            /*
            for (var i=0; i <positions.length; i++){
                var imgSize = new kakao.maps.Size(24, 35)
                
                var markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize)

                var marker = new kakao.maps.Marker({
                    map: map, 
                    position: new kakao.maps.LatLng(toilets[i].Y_WGS84, toilets[i].X_WGS84),
                    image: markerImage
                })
            }
            */

            //geolocation 이용해서 접속 위치
            /*
            if(navigator, geolocation) {
                navigator.geolocation.getCurrentPosition(function(position){
                    var lat = position.coords.latitude;
                    var lon = position.coords.longitude;

                    var locPosition = new kakao.maps.LatLng(lat, lon)

                    displayMarker(locPosition);
                });
            } else{ //geolocation 사용할 수 없을 때 나타낼 마커
                var locPosition = new kakao.maps.LatLng(37.589314, 126.986809)

                displayMarker(locPosition)
            }

            //지도에 마커 표시
            function displayMarker(locPosition){
                var marker = new kakao.maps.Marker({
                    map: this.map,
                    position: locPosition
                });

                map.setCenter(locPosition)
            }
            */

            ///데이터 한땀한땀
            /*
                var positions = [
                    {
                        title: '진원프라자',
                        latlng: new kakao.maps.LatLng(37.656937, 126.771835)
                    },
                    {
                        title: '웨스턴돔 타워',
                        latlng: new kakao.maps.LatLng(37.655893, 126.771970)
                    },
                    {
                        title: '호수빌딩',
                        latlng: new kakao.maps.LatLng(37.656727, 126.7713048)
                    },
                ]

                for (var i=0; i < positions.length; i++){
                    var marker = new kakao.maps.Marker({
                        map: this.map,
                        position: positions[i].latlng,
                        title: positions[i].title
                    });
                }
            */

            /// 마커 생성!///
            /*
            var positions = [
                {
                    title: '국립어린이청소년도서관',
                    latlng: new kakao.maps.LatLng(37.500893, 127.029786)
                },
            ];

            for (var i=0; i < positions.length; i++){
                var marker = new kakao.maps.Marker({
                    map: this.map,
                    position: positions[i].latlng,
                    title: positions[i].title
                });
            }
            */
            
            /// json 불러와서.. 마커 띄우기.. 개망
            /*
            const fetchData = async () => {
                const response = await fetch ('../toilet.json')
                const latlng = await response.json();
                
                const positions = this.positions;

                latlng.map(l => {
                    positions.push({
                        name: l.PBCTLT_PLC_NM, //화장실명
                        addr: l.REFINE_ROADNM_ADDR, //도로명주소
                        latlng: new kakao.maps.LatLng( l.REFINE_WGS84_LAT, l.REFINE_WGS84_LOGT) //경도
                    })
                })

                /// 마커 이미지 주소
                const imgSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

                positions.map(position => {
                    /// 마커 이미지 크기
                    const imgSize = new kakao.maps.Size(24,35);

                    /// 마커 이미지 생ㅇ성
                    const markerimg = new kakao.maps.MarkerImage(imgSrc, imgSize);

                    /// 마커 생성
                    const marker = new kakao.maps.Marker({
                        map: this.map,
                        position: position.latlng,
                        title: position.name,
                        image: markerimg,
                    })
                })

            }
            */

        },

        /*
        getCurrentPos(){
            if (navigator.geolocation){

            navigator.geolocation.getCurrentPosition(function(position){
                var lat = position.coords.latitude
                var lon = position.coords.longitude

                var locPosition = new kakao.maps.LatLng(lat, lon)
                ///console.log(locPosition)
                if (locPosition.La !== current.La && locPosition.Ma !== current.Ma){
                    console.log(locPosition, current)
                }

                //marker.setPosition(locPosition)
                map.setCenter(locPosition)
            })
            } else{
                var locPosition = new kakao.maps.LatLng(37.54134, 126.96213)
                var message = '현재 위치를 알 수 없어요..'

                // currentLatLon['lat'] = 37.54134
                // currentLatLon['lon'] = 126.96213

                //marker.setPosition(locPosition)
            }
            return true
        },
        */

    }

</script>
