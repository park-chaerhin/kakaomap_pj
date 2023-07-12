<template>
  <router-view /> 

  <!--메인페이지X:홈버튼(메인으로링크) / 메인페이지O:햄버거-->
    <!-- <v-app-bar app density="compact">
      <router-link to="/">
        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <div v-if="$route.name=='main_page'" style="display: flex;">
        <v-text-field id="address" class="mt-4" clearable label="검색어를 입력하세요." variant="outlined"></v-text-field>
        <v-btn icon @click="fnOpenPost" value="주소검색" large >
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon @click="getCurrentPos" large>
          <v-icon>mdi-crosshairs-gps</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main id="map">
      <router-view /> 
    </v-main> -->

  
</template>

<script>
import Main from './components/main_page.vue'
import Add from './components/add_page.vue'
import Detail from './components/detail_page.vue'
// import Login from './components/login_page.vue'
// import Join from './components/join_page.vue'

export default {
  name: 'App',
  components: {
    Main,
    // Login,
    // Join,
    Detail,
    Add,
  },
  data(){
    return{
      drawer: true,
      dialog: false
    }
  },
  computed: {
    /// 로그인상태
    fnGetAuthStatus(){
      return this.$store.getters.fnGetAuthStatus
    },
    /// 툴바메뉴 : 로그인,회원가입 / 로그아웃,등록하기
    fnGetMenuItems(){
      if(!this.fnGetStatus){
        return [
          {
            title: '로그인',
            //to: '/login',
            icon: 'mdi-login'
          },
          {
            title: '회원가입',
            to: '/join',
            icon: 'mdi-account-plus'
          }
      ]
      } else{
        return [
          {
            title: '로그아웃',
            to: '',
            icon: 'mdi-logout'
          },
          {
            title: '등록하기',
            to: '/add',
            icon: 'mdi-plus'
          },
        ]
      }
    }
  },
  methods: {
  ///로그아웃
  fnDoLogout(){
    return this.$store.getters.fnGetAuthStatus
  },

  /// 주소찾기 팝업
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
            mapContainer.style.display = 'block';
            map.relayout();
            /// 지도 중심 변경
            map.setCenter(coords);
            // marker.setPosition(coords)
          }
        })
      }
    }).open();
  },
  */
  
  /// 현재 위치를 기본위치로 표시하기
  /*
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
  */

  displayMarker(locPosition){
    var imgSrc = './assets/human-handsup.svg'
    var imgSize = new kakao.maps.Size(24,35)
    var markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize)

    //마커생성
    new kakao.maps.Marker({
      map: map,
      position: locPosition,
      image: markerImage
    })
    
    //지도 중심좌표를 접속위치로 변경
    map.setCenter(locPosition)
  }
  }
};
</script>
