<template>
    <v-app>
      <v-main>
        <v-container>
          <v-card class="mt-10">
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-card-title class="headline mt-9 text-center">장소 추가</v-card-title>
              
              <v-card-text>
                <v-text-field variant="underlined" v-model="form.email" label="주소" required :rules="[rule.required]"></v-text-field>
                <v-btn>검색</v-btn>
                <div id="mapsample"></div>

                <v-text-field v-model="form.name" label="이름" required :rules="[rule.required]"></v-text-field>
                
                <v-responsive>
                  <v-textarea variant="underlined" v-model="form.inquiry" label="설명" required :rules="[rule.required]" type="inquiry" hint="원하시는 견적내용과 연락처 함께 적어주시면 연락드리겠습니다!"></v-textarea>
                </v-responsive>
              </v-card-text>
            </v-form>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :disabled="!valid" color="pink" @click="createWithEmailAndPassword">등록</v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    name: "App",
    data() {
      return {
        form: {
          name: "",
          email: "",
          password: "",
          inquiry: "",
          agreed: false,
        },
        rule: {
          required: (v) => !!v || "필수 입력 항목입니다.",
        },
        valid: false,
      };
    },
    methods: {
      createWithEmailAndPassword() {
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
  

<!--
<template>
    <v-container>
        <v-toolbar flat color="blue">
            <v-toolbar-title>
                    <span class="mx-auto">화장실 추가</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-row>
            <v-col cols="12" sm="6">
                <v-text-field label="주소"></v-text-field>
                <v-btn>검색</v-btn>
            </v-col>
            <v-col cols="12" sm="6">
                <v-text-field label="장소이름"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
                <v-textarea label="설명"></v-textarea>
            </v-col>
            <v-col cols="12">
                <v-checkbox label="male" value="male"></v-checkbox>
                <v-checkbox label="female" value="female"></v-checkbox>
            </v-col>
            <v-col cols="12">
                <v-btn type="submit">등록</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default{
    methods: {
        s_Postcode(){
            //지도표시할 div
            var mapContainer = document.getElementById('view')
            mapOptions = {
                center : new daum.maps.LatLng,
                level: 5
            }

            //지도 생성
            var map = new daum.maps.Map(mapContainer, mapOptions)
            var geocoder = new daum.maps.services.Geocoder()
            var marker = new daum.maps.Marker({
                positon: new daum.maps.LatLng(37.54134, 126.96213),
                map: map
            })

            new daum.Postcode({
                oncomplete: function(data){
                    var addr = data.address;

                    document.getElementById('s_addr').value = addr
                    geocoder.addressSearch(addr, function(results, status){
                        if(status === daum.maps.services.Status.OK){
                            var result = results[0]
                            var coords = new daum.maps.LatLng(result.y, result.x)

                            mapContainer.style.display = 'block'
                            map.relayout()
                            map.setCenter(coords)
                            marker.setPosition(coords)
                        }
                    })
                }
            }).open()
        }
    }
}
</script>
-->
