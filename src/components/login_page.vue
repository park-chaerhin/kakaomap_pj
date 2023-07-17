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

                    <v-col offset="3" cols="6" class="text-center mt-5">
                        <v-btn type="submit" block outlined color="2c38a8" large  @click="redirectToLink">
                            <v-icon left color="#2c38a8">mdi-email</v-icon>이메일 로그인
                        </v-btn>
                    </v-col>
                    <v-col offset="3" cols="6" class="text-center mt-5">
            <!--구글 계정 로그인 버튼 표시 및 처리-->
                <v-btn @click="fnDoGoogleLogin_Popup" block outlined color="#2c38a8" large dark>
                    <v-icon left color="#2c38a8">mdi-google</v-icon>구글 로그인
                </v-btn>
            </v-col>
                </form>
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
                this.$store.dispatch('fnDoLogin', {  
                    pEmail: this.sEmail,
                    pPassword: this.sPassword
                })
            },
            redirectToLink(){
                alert('로그인 되었습니다.')
                this.$router.push({ name: "intro_page" });
            }
        },
}
</script>