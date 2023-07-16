<template>
    <v-container flow>
        <v-row>
            <v-col cols="12" class="text-center my-5">
                <h1 class="display-1">회원가입 페이지</h1>
            </v-col>
        </v-row>

        <v-row>
            <!--반응형에 따라 다르게 너비 조절-->
            <v-col class="text-center" cols="8" offset="2" sm="6" offset-sm="3">
                <!--양식의 입력이 제출되면 페이지를 다시 로드하지 않도록 prevent 사용 : <a>,<button type="submit" 동작 작동하지마!-->
                <form @submit.prevent="fnRegisterUser">
                    <!--필수 입력사항이 되도록 required 어트리뷰트 적용-->
                    <v-text-field name="Email" label="이메일" type="email" v-model="form.email" required :rules="[rule.required, rule.email]"></v-text-field>
                    <v-text-field name="Password" label="비밀번호" type="password" v-model="form.password" required :rules="[rule.required]"></v-text-field>
                    
                    <!--비밀번호 확인이 맞는지 검사하도록 rules 어트리뷰트 사용-->
                    <v-text-field name="ConfirmPassword" label="비밀번호확인" type="password" v-model="form.ConfirmPassword" required :rules="[rule.required, fnComparePassword]"></v-text-field>
                    
                    <!--시간지연상태인 경우 버튼은 사라지게 함-->
                    <v-btn type="submit" v-if="!fnGetLoading" color="#2c38a8" dark @click="redirectToLink">회원가입</v-btn>
                    <!--시간지연의 경우 회전 프로그레스 원 표시-->
                    <v-progress-circular v-if="fnGetLoading" indeterminate :width="7" :size="70" color="grey lighten-1"></v-progress-circular>

                    <!--오류 메시지가 있을 경우 표시-->
                    <v-alert type="error" dismissible v-model="bAlert">{{ fnGetErrMsg }}</v-alert>
                </form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default{
    data(){ /// 초기값은 비워두기~
        return{
            bAlert: false,  //오류 메시지 표시 여부
            form:{
                email: '',
                password: '',
                ConfirmPassword: '',  //비밀번호 입력 확인값 임시 저장
            },
            rule: {
                required: (v) => !!v || "필수 입력 항목입니다.",
                email: (v) => /.+@.+\..+/.test(v) || "이메일 형식에 맞게 입력하세요."
            }
        }
    },
    computed: { 
        fnComparePassword(){
            if(this.form.password == this.form.ConfirmPassword) return true
            else return '비밀번호가 일치하지 않습니다!'
        },
        fnGetErrMsg(){
            return this.$store.getters.fnGetErrorMessage
        },
        fnGetLoading(){
            return this.$store.getters.fnGetLoading
        }
    },
    methods: {
        fnRegisterUser(){
            if(this.fnComparePassword == true){
                this.$store.dispatch('fnRegisterUser', {
                    pEmail: this.email,
                    pPassword: this.password
                })
            }
        },
        redirectToLink() {
            alert('가입이 완료되었습니다. 로그인 해주세요.')
            this.$router.push({ name: "login_page" });
        },
    },
    watch: {
        //fnGetErrMsg 함수가 오류메시지를 반환하면 오류 메시지 표시
        fnGetErrMsg(pMsg){
            if(pMsg) this.bAlert = true
        },
        //bAlert 값이 false로 바뀌면 에러메시지 초기화
        bAlert(pValue){
            if(pValue == false) this.$store.commit('fnSetErrorMessage', '')
        }
    }
}
</script>