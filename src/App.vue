<!--URL 등록
  https://oepnapi.gg.go.kr/UndergroundWaterConstruct?KEY=sample&pIndex=1&pSize=50&SIGUN_CD=41310
  https://[openAPI URL]/[openAPI 이름]?[인증키 값]&[페이지위치]&[페이지당 요청 수]&[요청인자]
  https://openapi.gg.go.kr/Publtolt?
-->
<template>
  <v-app>
    <!--웹: drawer 나와있어 / 앱: 햄버거 클릭해야 나와

    <v-navigation-drawer app v-model="drawer">
      <v-list>
        로그인전: 로그인, 회원가입
        <v-list-item v-for="item in fnGetMenuItems" :key="item.index" :to="item.to" @click="dialog = true">
          <v-list-item-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>

        로그인후: 로그아웃, 등록하기
        <v-list-item @click="fnDoLogout" v-if="fnGetAuthStatus">
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-title>로그아웃</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    -->

    <!--
    <v-dialog v-model="dialog" persistent width="auto">
      <v-card width=""  class="mx-auto">
        <v-card-title class="py-5 text-h5">로그인</v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="12"><v-text-field label="아이디"></v-text-field></v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="12"><v-text-field label="비밀번호"></v-text-field></v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn variant="outlined" class="py-5" @click="dialog=false" align-center>로그인</v-btn>
/        </v-card-actions>
      </v-card>
    </v-dialog>
  -->

    <!--메인페이지X:홈버튼(메인으로링크) / 메인페이지O:햄버거-->
    <v-app-bar app density="compact">
      <router-link to="/">
        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn icon @click="fnOpenPost">
        <v-icon>search</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main> <router-view /> </v-main>

  </v-app>
</template>

<script>
import Main from './components/main_page.vue'
import Login from './components/login_page.vue'
import Join from './components/join_page.vue'
import Add from './components/add_page.vue'

export default {
  name: 'App',
  components: {
    Main,
    Login,
    Join,
    Add
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
  fnOpenPost(){
    /// window.open()이 동작 안 할 수도 있어 
    /// >> 하이브리드앱 개발 :  }).open() - 바꿔 -> }).embed(this.$refs.embed)
    new window.daum.Postcode({
      oncomplete: function(data) {
        /// 팝업에서 검색결과 항목을 클릭했을 때 실행할 코드 작성 부분
        var addr = data.address;
        var geocoder = new daum.maps.services.Geocoder();

        geocoder.addressSearch(addr, function(status){
          if(status === daum.maps.services.Status.OK) {
            var result = results[0];
            var coords = new daum.maps.LatLng(result.y, result.x)
            mapContainer.style.display = 'block';
            map.relayout();
            map.setCenter(coords);
          }
        })
      }
    }).open();
  },
  }
};
</script>
