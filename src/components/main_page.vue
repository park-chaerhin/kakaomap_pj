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
export default{
    data(){
        return{
            map: null
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
            /// API로드 후 맵 그리는 함수 실행
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
                center: new window.kakao.maps.LatLng(37.499774, 127.029097),
                level: 3
            };

            /// 지도 생성 및 객체 리턴
            this.map = new window.kakao.maps.Map(container, options);
        }
    }
}
</script>