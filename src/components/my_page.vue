<!--로그인 후 메인화면을 표시-->
<template>
    <v-container>
        <v-row>
            <v-col xs="12" class="mt-5 text-center">
                <h1 class="display-1 my-1">마이페이지</h1>
            </v-col>
        </v-row>

        <v-row dense>
            <v-col cols="12">
                <v-card max-width="400" class="mx-auto" color="" theme="dark" variant="outlined">
                    <div class="d-flex justify-space-between">
                        <v-avatar class="ma-3" size="" rounded="50">
                            <v-img v-if="fnGetUser.photoURL" :src="fnGetUser.photoURL" class="avatar_style" alt=""></v-img>
                        </v-avatar>

                        <div>
                            <v-card-title class="text-h5 mt-4 lighten-2">
                                {{ fnGetUser.name }}
                            </v-card-title>

                            <v-card-subtitle class="pb-2 lighten-2">{{ fnGetUser.email }}</v-card-subtitle>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-card class="mx-auto" max-width="344">
                    <v-img src="../assets/inquire.png"></v-img>
                    <v-card-text>
                        <h2 class="text-h6 text-primary">문의하기 / 건의하기</h2>
                        궁금한 사항은 문의를 주시면<br> 친절하고 신속하게 답변 드리겠습니다.
                    </v-card-text>
                    <v-card-actions>
                        <v-btn variant="flat" @click="toInquire">문의하기</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col>
                <v-card class="mx-auto" max-width="344">
                    <v-img src="../assets/add.png"></v-img>
                    <v-card-text>
                        <h2 class="text-h6 text-primary">화장실 정보 입력</h2>
                        추가로 등록할<br> 화장실 정보를 작성해주세요.
                    </v-card-text>
                    <v-card-actions>
                        <v-btn variant="flat" @click="toAdd">등록하기</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
//파이어베이스에서 oFirebaseAuth 객체 변수 가져옴
import {oFirebaseAuth} from '@/datasources/firebase'

export default{
    computed: {
        fnGetUser() {
            //스토어에서 로그인된 계정 정보 반환
            /// this.$store.getters.fnGetUser = 밖으로 나가서 / store에 저장된 것 중에 / 가져와 / fnGetUser를
            let oUserInfo = this.$store.getters.fnGetUser
            return oUserInfo
        },
    },
    methods: {
        toInquire(){
            this.$router.push({ name: "inquire_page" });
        },
        toAdd(){
            this.$router.push({ name: "add_page" });
        },
    }
}
</script>

<style>
/*사진 이미지표시할 때 원 모양으로 스타일 표시*/
.avatar_style{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
</style>