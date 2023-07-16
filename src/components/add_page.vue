<template>
    <v-app>
      <v-main>
        <v-container>
          <v-card class="mt-10">
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-card-title class="headline mt-9 text-center">화장실 정보 입력</v-card-title>
              
              <v-card-text>
                <v-text-field v-model="name" label="화장실 이름" placeholder="예) 그린컴퓨터학원 화장실" required :rules="[rule.required]"></v-text-field>

                <v-text-field type="text" v-model="address" label="화장실 주소" placeholder="예) 강남구 테헤란로5길 24 장연빌딩"></v-text-field>
                <v-btn @click="searchAddress" value="주소 검색">검색</v-btn><br>
                <div id="map" style="width:300px;height:300px;margin-top:10px;display:none"></div>

                <v-responsive>
                  <v-textarea variant="underlined" v-model="inquiry" label="설명" required :rules="[rule.required]" type="inquiry" hint="화장실 설명 또는 비밀번호를 입력해주세요~"></v-textarea>
                </v-responsive>
              </v-card-text>
            </v-form>

            <v-card-actions>
              <v-btn outlined color="#2c38a8" @click="$router.go(-1)">뒤로</v-btn>
              <v-spacer></v-spacer>
              <v-btn :disabled="!valid" outlined color="#2c38a8" @click="submit">등록</v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import KakaoMap from './KakaoMap.vue'

  export default {
    name: "App",
    components: {
      KakaoMap
    },
    data() {
      return {
          name: "",
          address: "",
          // email: "",

          map: null,
          marker: null,
          geocoder: null,

          inquiry: "",
          rule: {
            required: (v) => !!v || "필수 입력 항목입니다.",
            // email: (v) => /.+@.+\..+/.test(v) || "이메일 형식에 맞게 입력하세요.",
          },
          valid: false
      }
    },
    mounted(){
      if (window.kakao && window.kakao.maps) {
        // 이미 카카오 객체와 맵이 로드되었으면 맵 실행
        this.loadMap();
      } else {
        // 아직 로드되지 않았으면 스크립트 추가 후 맵 실행
        this.loadScript();
      }
    },
    methods: {
      loadScript() {
        const script = document.createElement("script");
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=a94b20af546ccbc16088bd33eaf12dc5&autoload=false&libraries=services";
        script.onload = () => window.kakao.maps.load(this.loadMap);
        document.head.appendChild(script);
      },
      loadMap() {
        // 지도생성
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.537187, 127.005476),
          level: 5
        };
        this.map = new window.kakao.maps.Map(mapContainer, mapOption);
        
        //마커생성
        this.marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(37.537187, 127.005476),
          map: this.map
        });

        // 주소-좌표 변환 객체 생성
        this.geocoder = new window.kakao.maps.services.Geocoder();

        // this.map = map;
        // this.marker = new window.kakao.maps.Marker({
        //   position: new window.kakao.maps.LatLng(37.537187, 127.005476),
        //   map: this.map,
        // });
        // this.geocoder = geocoder;
      },
      searchAddress() {
        new daum.Postcode({
          oncomplete: (data) => {
            this.address = data.address;

            this.geocoder.addressSearch(data.address, (results, status) => {
              if (status === window.kakao.maps.services.Status.OK) {
                const result = results[0];
                const coords = new window.kakao.maps.LatLng(result.y, result.x);

                const mapContainer = document.getElementById("map");
                mapContainer.style.display = 'block';
                // this.map.relayout();
                //this.map.setCenter(coords);
                this.map.setCenter(coords.getLat(), coords.getLng());
                this.marker.setPosition(coords);
              }
            });
          }
        }).open();
      },
      submit() {
        if (!this.$refs.form.validate()) {
          this.$toasted.error("입력 폼을 전부 작성해주세요");
          return;
        }
  
        this.showAlert();
        this.redirectToLink();
      },
      showAlert() {
        alert("정상 등록되었습니다.");
      },
      redirectToLink() {
        this.$router.push({ name: "main_page" });
      },
    },
  };
  </script>