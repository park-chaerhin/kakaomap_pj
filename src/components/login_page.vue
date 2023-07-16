<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="text-center mt-5">
            <h1 class="display-1 my-1">로그인</h1>
            </v-col>

            <v-col class="text-center" cols="8" offset="2" sm="6" offset-sm="3">
                <form @submit.prevent="fnDoLogin">
                    <v-text-field name="email" label="이메일" type="email" v-model="sEmail" required :rules="[rule.required, rule.email]"></v-text-field>
                    <v-text-field name="password" label="비밀번호" type="password" v-model="sPassword" required :rules="[rule.required]"></v-text-field>

                    <v-btn type="submit" v-if="!fnGetLoading" color="#2c38a8" dark>로그인</v-btn>
                    <v-progress-circular v-if="fnGetLoading" indeterminate :width="7" :size="70" color="grey lighten-1"></v-progress-circular>
                </form>
            </v-col>
            <!-- <v-col offset="3" cols="6" class="text-center mt-5">
            <v-btn to="/login" block color="2c38a8" large dark>
                <v-icon left>mdi-email</v-icon>이메일 로그인
            </v-btn>
            </v-col>
 -->
            <v-col offset="3" cols="6" class="text-center mt-5">
            <!--구글 계정 로그인 버튼 표시 및 처리-->
                <v-btn @click="fnDoGoogleLogin_Popup" block outlined color="#2c38a8" large dark>
                    <v-icon left color="red">mdi-google</v-icon>구글 로그인
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data() {
            return{
                sEmail: '',
                sPassword: '',
                rule: {
                    required: (v) => !!v || "필수 입력 항목입니다.",
                    email: (v) => /.+@.+\..+/.test(v) || "이메일 형식에 맞게 입력하세요."
                }
            }
        },
        methods: {
            fnDoGoogleLogin_Popup() {
                //스토어에 구글계정 로그인 처리 요청
                this.$store.dispatch('fnDoGoogleLogin_Popup')
            },
            fnDoLogin(){
                this.$store.dispatch('fnDoLogin', {  /// 위의 function에서 호추한 fnDoLogin함수랑 / this.$store.의 fnDoLogin는 다른 함수
                    pEmail: this.sEmail,
                    pPassword: this.sPassword
                })
            }
        },
        computed: {
            fnGetLoading() {
          //시간지연상태 스토어에서 읽어서 반환
            return this.$store.getters.fnGetLoading
        },
    },
}
</script>