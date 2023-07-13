<template>
    <v-app>
      <v-main>
        <v-container>
          <v-card class="mt-10">
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-card-title class="headline mt-9 text-center">화장실 정보 입력</v-card-title>
              
              <v-card-text>
                <v-text-field v-model="form.name" label="화장실 이름" placeholder="예) 그린컴퓨터학원 화장실" required :rules="[rule.required]"></v-text-field>

                <v-text-field id="s_addr" variant="underlined" v-model="form.addr" placeholder="예) 강남구 테헤란로5길 24 장연빌딩" label="위치" required :rules="[rule.required]"></v-text-field>
                <!-- <v-btn @click="sPostcode()">검색</v-btn>
                <div id="s_map" style="width:300px;height:300px;margin-top:10px;display:none"></div> -->

                <v-responsive>
                  <v-textarea variant="underlined" v-model="form.inquiry" label="설명" required :rules="[rule.required]" type="inquiry" hint="화장실 설명 또는 비밀번호를 입력해주세요~"></v-textarea>
                </v-responsive>
              </v-card-text>
            </v-form>

            <v-card-actions>
              <router-link to="/">
                <v-btn>뒤로</v-btn>
              </router-link>
              <v-spacer></v-spacer>
              <v-btn :disabled="!valid" color="" @click="submit">등록</v-btn>
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
          addr: "",
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