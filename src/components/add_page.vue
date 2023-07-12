<template>
    <v-app>
      <v-main>
        <v-container>
          <v-card class="mt-10">
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-card-title class="headline mt-9 text-center">장소 추가</v-card-title>
              
              <v-card-text>
                <v-text-field id="s_addr" variant="underlined" v-model="form.addr" label="주소" required :rules="[rule.required]"></v-text-field>
                <!-- <v-btn @click="sPostcode()">검색</v-btn>
                <div id="s_map" style="width:300px;height:300px;margin-top:10px;display:none"></div> -->

                <v-text-field v-model="form.name" label="이름" required :rules="[rule.required]"></v-text-field>
                
                <v-responsive>
                  <v-textarea variant="underlined" v-model="form.inquiry" label="설명" required :rules="[rule.required]" type="inquiry" hint="화장실 정보를 적어주세요~"></v-textarea>
                </v-responsive>
              </v-card-text>
            </v-form>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :disabled="!valid" color="pink" @click="submit">등록</v-btn>
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
          addr: "",
          name: "",
          inquiry: "",
        },
        rule: {
          required: (v) => !!v || "필수 입력 항목입니다.",
        },
        valid: false,
      };
    },
    methods: {
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