<template>
    <v-app>
    <v-app-bar app density="compact">
      <router-link to="/">
        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <div v-if="$route.name=='main_page'" style="display: flex;">
        <!--<v-text-field id="address" class="mt-4" clearable label="검색어를 입력하세요." variant="outlined"></v-text-field>-->
        <v-btn icon @click="fnOpenPost" value="주소검색" large >
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon @click="getCurrentPos" large>
          <v-icon>mdi-crosshairs-gps</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <!-- <v-main id="map">
    </v-main> -->

    <!--<div>-->
        <v-main id="map"></v-main>
        <v-btn @click="$router.push('add')" color="" dark fixed bottom right fab>
                <v-icon>add</v-icon>
        </v-btn>
    <!--</div>-->
</v-app>
</template>
<style scope>
    #map{
        width: 100vw;
        height: 100vh;
    }
</style>
<script>
// import Sdata from '@/assets/seoul_toilet.json'

/* https://soa-memo.tistory.com/m/41 참조 */
export default{
    data(){
        return{
            //// map: null,
            // Sdata: []
        }
    },
    mounted(){
        if(window.kakao && window.kakao.maps){
            /// 카카오 객체 있고, 맵 그릴 준비 돼있으면 맵 실행
            this.loadMap();
        } else{
            /// 없으면 스크립트 추가 후 맵 실행
            this.loadScript();
        }
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
        /// 주소찾기 팝업
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
                    map: this.map,
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
                        map.relayout();
                        /// 지도 중심 변경
                        map.setCenter(coords);
                        // marker.setPosition(coords)
                    }
                    })
                }
            }).open();
        },

        loadScript(){
            const script = document.createElement('script');
            /// API로드 후 맵 그리는 함수 실행, 동적으로 script 로딩하기 위해 autoload=false 옵션지정!
            script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=a94b20af546ccbc16088bd33eaf12dc5&autoload=false&libraries=services';
            /// 스크립트 로드 후 지도 실행
            script.onload = () => window.kakao.maps.load(this.loadMap);
            
            /// html head안에 스크립트 추가
            document.head.appendChild(script);
        },

        loadMap(){
            const container = document.getElementById('map');
            const options = {
                /// 지도 생성 시 기본옵션
                /// center: 지도의 중심좌표, level: 확대/축소 정도
                center: new window.kakao.maps.LatLng(37.54134, 126.96213), 
                level: 9,       
            };

            /// 지도 생성 및 객체 리턴
            this.map = new window.kakao.maps.Map(container, options);

            /*
            주소-좌표 변환 객체 생성
            var geocoder = new daum.maps.services.Geocoder();
            */

            /// 데이터 : 1~1000 (총 데이터 양: 4938)
            const url = "http://openapi.seoul.go.kr:8088/454b476547636f6634354653574c7a/json/SearchPublicToiletPOIService/1/1000/"

            fetch(url)
            .then((res)=>res.json())
            .then((myJson) => {
                //var markers = []
                //const toilets = JSON.stringify(myJson, null, 1)
                //console.log(typeof myJson)
                const toilets = myJson.SearchPublicToiletPOIService.row
                console.log(toilets)

                //마커 이미지
                var imgSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"

                for(var i=0; i< toilets.length; i++){
                    const latlng = new kakao.maps.LatLng(toilets[i].Y_WGS84, toilets[i].X_WGS84)
                    var imgSize = new kakao.maps.Size(24,35)
                    var markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize)

                    var marker = new kakao.maps.Marker({
                        position: latlng,
                        map:this.map,
                        image: markerImg,
                        title: toilets[i].FNAME
                    })
                    // markers
                    //marker.push()
                }
            })

            var positions = []

            

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

        getCurrentPos(){
            if (navigator.geolocation){

            navigator.geolocation.getCurrentPosition(function(position){
                var lat = position.coords.latitude
                var lon = position.coords.longitude

                var locPosition = new kakao.maps.LatLng(lat, lon)

                marker.setPosition(locPosition)
                map.setCenter(locPosition)
            })
            } else{
            var locPosition = new kakao.maps.LatLng(37.54134, 126.96213)
            var message = '현재 위치를 알 수 없어 기본 위치로 이동합니다'

            currentLatLon['lat'] = 37.54134
            currentLatLon['lon'] = 126.96213

            marker.setPosition(locPosition)
            }
            return true
        },

    },
}
</script>
