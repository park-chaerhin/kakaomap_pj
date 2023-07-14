<template>
    <v-app>
        <v-main>
            <v-container>
            <v-card class="mt-10">
                <v-form v-model="valid" ref="form" lazy-validation>
                    <v-card-title class="headline mt-9 text-center">문의하기 / 건의하기</v-card-title>
                    <v-card-text>
                        <p class="mb-3">
                            궁금한 사항은 문의를 주시면<br/> 친절하고 신속하게 답변 드리겠습니다.
                        </p>
                        <v-text-field placeholder="예)abc12@gmail.com" variant="underlined" v-model="form.email" label="이메일" required :rules="[ rule.required, rule.email,]" hint="연락 가능한 이메일을 입력해주세요."></v-text-field>
                        <v-responsive>
                        <v-textarea v-model="form.inquiry" placeholder="내용을 입력해주세요~" required :rules="[rule.required]" type="inquiry"></v-textarea>
                        </v-responsive>
                        <v-checkbox v-model="form.checkbox" label="개인정보 수집 및 이용방침에 동의합니다." required :rules="[rule.required]"></v-checkbox>
                    </v-card-text>
                    <v-card-actions>
                        <router-link to="/">
                            <v-btn>뒤로</v-btn>
                        </router-link>
                        <v-spacer></v-spacer>
                        <v-btn :disabled="!valid" color="" @click="submit">등록</v-btn>
                    </v-card-actions>
                </v-form>

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
                checkbox: '',
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
            alert("제출되었습니다. 빠른 시일안에 연락 드리겠습니다.");
        },
        redirectToLink() {
            this.$router.push({ name: "main_page" });
        },
    },
};
</script>

<!--
<template>
    
        문의하기/건의하기
    
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
</script>-->