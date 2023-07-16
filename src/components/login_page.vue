<template>
    <v-container flow>
        <v-row>
            <v-col cols="12" class="text-center mt-5">
                <h1 class="display-1 my-1">로그인</h1>
            </v-col>

            <v-col class="text-center mt-5" cols="8" offset="3" sm="6" offset-sm="3">
                <form @submit.prevent="fnDoLogin">
                    <v-text-field label="이메일" name="email" v-model="sEmail" type="email" required></v-text-field>
                    <v-text-field label="비밀번호" name="password" v-model="sPassword" type="password" required></v-text-field>
    
                    <v-btn type="submit" color="">로그인</v-btn>
                </form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default{
    data(){
        return{
            bAlert: false,
            sEmail: '',
            sPassword: ''
        }
    },
    computed: {
    },
    methods: {
        fnDoLogin(){
            alert('로그인 되었습니다.')
            // this.$store.dispatch('fnDoLogin', {
            //     pEmail : this.sEmail,
            //     pPassword: this.sPassword
            // })
        },
    },
}
</script>