<template>
    <div>
        <div id="map"></div>
    </div>
</template>
<style scope>
    #map{
        width: 100vw;
        height: 100vh;
    }
</style>
<script>
import data from '../toilet.json'

const toiletData = data;

/* https://soa-memo.tistory.com/m/41 참조 */
export default{
    data(){
        return{
            map: null,
            toiletData
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
    methods: {
        loadScript(){
            const script = document.createElement('script');
            /// API로드 후 맵 그리는 함수 실행, 동적으로 script 로딩하기 위해 autoload=false 옵션지정!
            script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=a94b20af546ccbc16088bd33eaf12dc5&autoload=false';
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
                center: new window.kakao.maps.LatLng(37.658218, 126.774285),
                level: 3
            };

            /// 지도 생성 및 객체 리턴
            this.map = new window.kakao.maps.Map(container, options);

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

        }
    }
}
</script>
