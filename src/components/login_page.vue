<!--<template>
    <div>
        <li v-for="item in DATA" :key="item.poi_id">{{ item.fname }} // {{ item.y_wgs84 }} // {{ item.x_wgs84 }}</li>
    </div>
</template>

<script>
import Stoilet from '@/assets/seoul_toilet.json'

export default{
    data(){
        return {
            DATA: Stoilet
        }
    },
}
</script>-->

<template>
    <v-container flow>
        <v-row>
            <v-col class="text-center" cols="8" offset="2" sm="6" offset-sm="3">
                <form @submit.prevent="fnDoLogin">
                    <v-text-field label="email" name="email" v-model="sEmail" type="email" required></v-text-field>
                    <v-text-field label="password" name="password" v-model="sPassword" type="password" required></v-text-field>
                    <v-btn type="submit">로그인</v-btn>
                    <v-alert class="mt-3" type="error" dismissible v-model="bAlert">{{ fnGetErrMsg }}</v-alert>
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
        fnGetErrMsg(){
            return this.$store.getters.fnGetErrorMessage
        }
    },
    methods: {
        fnDoLogin(){
            this.$store.dispatch('fnDoLogin', {
                pEmail : this.sEmail,
                pPassword: this.sPassword
            })
        }
    },
    watch: {
        fnGetErrMsg(Msg){
            if(Msg) this.bAlert = true
        },
        bAlert(Value){
            if(Value==false) this.$store.commit('fnSetErrorMessage','')
        },
    }
}
</script>