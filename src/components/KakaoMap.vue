<template>
    <div id="map"></div>
</template>
<style scope>
    #map{
        width: 100%;
        height: 100%;
    }
</style>
<script>
import data from '@/assets/경기도공중화장실현황(제공표준).json'

export default{
    name: "KakaoMap",
    data(){
        return{
            map: null,
            data,
        }
    },
    mounted(){
        if (window.kakao && window.kakao.maps){
            this.loadMap();
        } else{
            this.loadScript();
        }
    },
    methods: {
        loadScript(){
            const script = document.createElement('script');
            script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=a94b20af546ccbc16088bd33eaf12dc5&autoload=false&libraries=services'
            // RangeError: Maximum call stack size exceeded 해결위해 load안에 묶기
            script.onload = () => window.kakao.maps.load(() => this.loadMap());
            
            document.head.appendChild(script);
        },
        loadMap(){
            const container = document.getElementById('map');
            const options = {
                center : new window.kakao.maps.LatLng(37.45532, 127.13762),
                level: 5
            }

            this.map = new window.kakao.maps.Map(container, options);

            /* 
            ----경기도 화장실
            PBCTLT_PLC_NM 화장실 이름 / REFINE_ROADNM_ADDR 도로명주소 /
            MALE_WTRCLS_CNT 남.대 + MALE_UIL_CNT 남.소 / FEMALE_WTRCLS_CNT 여.대 / 
            REFINE_WGS84_LAT 위도 / REFINE_WGS84_LOGT 경도 
            */
            const Sdata = this.data['Stoilet'];
                // console.log(Sdata)
            var imgSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png'

            for(var i=0; Sdata.length; i++){
                var latlng = new kakao.maps.LatLng(Sdata[i].REFINE_WGS84_LAT, Sdata[i].REFINE_WGS84_LOGT)
                var imgSize = new kakao.maps.Size(24,35)

                var markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize)

                var marker = new kakao.maps.Marker({
                    position: latlng,
                    map: this.map,
                    image: markerImg,
                    title: Sdata[i].PBCTLT_PLC_NM
                })
                marker
            }

            this.loadMarker();
        },
        
        loadMarker(){
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    var lat = position.coords.latitude;
                    var lon = position.coords.longitude;

                    var locPosition = new kakao.maps.LatLng(lat, lon);
                    var message = '<div style="padding:5px;">현재위치</div>';

                    displayMarker(locPosition, message);
                });
            } else {
                var locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
                var message = 'geolocation을 사용할 수 없어요..';
                displayMarker(locPosition, message);
            }
        },

        displayMarker(locPosition, message) {
            var marker = new kakao.maps.Marker({
                map: map,
                position: locPosition
            });

            var iwContent = message;
            var iwRemoveable = true;

            var infowindow = new kakao.maps.InfoWindow({
                content: iwContent,
                removable: iwRemoveable
            });

            infowindow.open(this.map, marker);

            this.map.setCenter(locPosition);
        },
    }
}
</script>