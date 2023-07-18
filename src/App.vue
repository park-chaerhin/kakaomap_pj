<template>
  <v-app>
    <!--반응형 중단점이 데스크톱(lg) 이상일 때 탐색 서랍을 툴바 아래 출력 : clipped-->
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item value="true" v-for="(item, i) in fnGetMenuItems" :to="item.to" :key="i">
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
        <!--로그인 된 경우만 로그아웃 버튼을 표시함-->
        <v-list-item @click="fnDoLogout" v-if="fnGetAuthStatus">
          <v-list-item-action>
            <v-icon>mdi-arrow-right-bold-box-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title>로그아웃</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="#2c38a8" dark>
      <!--햄버거 아이콘은 반응형 크기가 sm이상일 때 숨김-->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <router-link to="/" style="cursor: pointer">
        <!--홈로고 아이콘은 반응형 크기가 xs일 때 숨김-->
        <v-icon class="hidden-xs-only" color="#fff lighten-4" v-if="$route.name == 'intro_page'">mdi-home</v-icon>
        <v-icon class="hidden-xs-only" color="#fff lighten-4" v-if="$route.name !== 'intro_page'">mdi-map-outline</v-icon>
      </router-link>

      <v-spacer></v-spacer>
      <v-btn variant="plain" color="#2c38a8" dark @click="toIndex">
        PooPoo
      </v-btn>

      <v-spacer></v-spacer>
      <!--툴바의 메뉴명을 표시할 때 xs일 때는 숨기고 나머지 크기에는 보이게 설정-->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="item in fnGetMenuItems" :key="item.title" :to="item.to">
          <!-- <v-icon left>{{ item.icon }}</v-icon> -->
          {{ item.title }}
        </v-btn>
        <!--로그인 된 경우만 로그아웃 버튼을 메뉴에 표시함-->
        <v-btn text @click="fnDoLogout" v-if="fnGetAuthStatus">
          로그아웃
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main> <router-view /> </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        drawer: false
      }
    },
    computed: {
      fnGetAuthStatus() {
        return this.$store.getters.fnGetAuthStatus
      },
      fnGetMenuItems() {
        if(!this.fnGetAuthStatus){  
          return [{
            title: '로그인',
            to: '/login',
          }]
        } else{                    
          return [{
            title: '마이페이지',
            to: '/my',
          }]
        }
      }
    },
    methods: {
      // 스토어의 로그아웃 기능사용
      fnDoLogout(){
          this.$store.dispatch('fnDoLogout')
      },
      toLink() {
        this.$router.push({ name: "register_page" });
      },
      toIndex(){
        if (this.$route.path !== '/intro_page') {
          this.$router.push({ name: 'intro_page' });
        }      
      },
    }
  }
</script>