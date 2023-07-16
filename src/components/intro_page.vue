<!--intro-->
<template>
  <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4" elevation="4" height="500" rounded max-width="800" width="100%">
    <div>
      <router-link to="/login">
        <v-btn fixed bottom right fab>
            <v-icon>mdi-login</v-icon>
        </v-btn>
      </router-link>

      <v-row class="d-flex justify-center align-center">
        <v-col cols="12" text="center">
          <v-img :src="require('../assets/thumb.jpg')" class="my-3" contain height="200"/>
        </v-col>

        <v-col class="mb-4 d-flex justify-center mb-6" text="center">
          <h1 class="display-2 font-weight-bold">
            내 주변의 편안함
          </h1>
        </v-col>

        <v-col cols="12" text="center">
          <router-link to="/main">
            <v-btn class="my-3 block large">화장실지도</v-btn>
          </router-link>
        </v-col>

        <v-col cols="12" text="center">
          <router-link to="/add">
            <v-btn class="my-3 block large">화장실등록</v-btn>
          </router-link>
        </v-col>
        
        <v-col cols="12" text="center">
          <router-link to="/help">
            <v-btn class="my-3 block large">문의하기</v-btn>
          </router-link>
        </v-col>
      </v-row>
    </div>
  </v-sheet>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        dialog: false,
        form: {
          name: "",
          email: "",
          inquiry: "",
        },
        rule: {
          required: (v) => !!v || "필수 입력 항목입니다.",
          email: (v) => /.+@.+\..+/.test(v) || "이메일 형식에 맞게 입력하세요.",
        },
        valid: false,
      };
    },

  }
</script>


<!--
<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-card>
            <v-card-title class="headline">공공화장실 지도</v-card-title>
            <v-card-text>
              <v-text-field v-model="searchKeyword" label="검색어" outlined dense append-icon="mdi-magnify"></v-text-field>
              <v-divider></v-divider>
              <v-select v-model="selectedCategory" :items="categories" label="카테고리" outlined dense></v-select>
              <v-divider></v-divider>
              <v-checkbox v-model="showOnlyFavorites" label="즐겨찾기만 보기" dense></v-checkbox>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="8">
          <div id="map" style="height: 400px;"></div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      searchKeyword: '',
      selectedCategory: '',
      showOnlyFavorites: false,
      categories: ['모든 카테고리', '공원', '도서관', '지하철역', '버스정류장'],
    };
  },
  mounted() {
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      // 지도 초기화 및 마커 추가 로직을 구현하세요.
    },
  },
};
</script>

<style>
#map {
  width: 100%;
}
</style>
-->