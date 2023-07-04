<template>
    <!--
        비밀번호 유효성 검사,
        회원가입 > 로그인 페이지로 이동
    -->
    <v-form v-model="valid" @submit.prevent>
        <v-container>
            <v-row>
                <v-col cols="5" class="text-center">
                    <v-text-field v-model="name" :rules="nameRules" label="이름" required></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="5">
                    <v-text-field v-model="id" :rules="idRules"  label="아이디" required></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="5">
                    <v-text-field type="password" v-model="pw" :rules="pwRules" label="비밀번호" required></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="5">
                    <v-text-field type="password" v-model="pwdb" :counter="4" :rules="pwdbRules" label="비밀번호확인" required></v-text-field>
                </v-col>
            </v-row>
        </v-container>
        <v-btn type="submit" class="mt-10" absolute @click="fnJoin">Submit</v-btn>
    </v-form>
</template>

<script>
export default {
    data: () => ({
        valid: false,
        name: '',
        nameRules: [
            value => {
            if (value) return true
            return 'Name is required.'
            },
        ],

        id: '',
        idRules: [
            value => {
            if (value) return true
            return 'ID is required.'
            },
        ],

        pw: '',
        pwRules: [
            value => {
            if (value) return true
            return 'Password is required.'
            },
        ],

        pw_dbl:'',
        pwdbRules: [
            value => {
            if (value) return true
            return 'Password doublecheck is required.'
            },
        ],

        emailRules: [
            value => {
            if (value) return true
            return 'E-mail is requred.'
            },
            value => {
            if (/.+@.+\..+/.test(value)) return true
            return 'E-mail must be valid.'
            },
        ],
    }),
    methods: {
        fnJoin(){

        }
    }
}
</script>