/// 파이어베이스 앱 객체 모듈 가져오기
import firebase from 'firebase/compat/app'

/// 파이어베이스 패키지 모듈
import 'firebase/compat/auth'
import router from '@/router'

export default{
    state:{
        /// 사용자 정보 담을 변수
        oUser: null
    },
    mutations:{
        /// 사용자 객체 저장
        ///  1/핸들러함수(실제 상태 수정)의 첫 번째 인수 = state, 2/함수 실행 시 매개변수 :payload
        fnSetUser(state, payload){
            state.oUser = payload
        }
    },
    getters:{
        /// 사용자 객체 반환
        fnGetUser(state){
            return state.oUser
        },
        /// 사용자 객체 값 유무 : 로그인 여부 반환
        fnGetAuthStatus(state){
            return (state.oUser != null)
        }
    },
    actions:{
        /// 이메일 회원가입
        fnRegisterUser({commit}, payload){
            commit('fnSetLoading', true)
            
            /// firebase에 회원정보 만들어서 저장
            firebase.auth().createUserWithEmailAndPassword(payload.pEmail, payload.pPassword)
            .then(pUserInfo => {
                /// 스토어에 신규 회원 정보 저장
                commit('fnSetUser', {
                    email: pUserInfo.user.email
                })
                commit('fnSetLoading', false)
                commit('fnSetErrorMessage', '')

                router.push('/') ///로그인 한 첫화면
            })
            .catch(err => {
                commit('fnSetErrorMessage', err.message)
                commit('fnSetLoading', false)
            })
        },

        /// 이메일회원 로그인
        fnDoLogin({commit}, payload) {
            commit('fnSetLoading', true)

            firebase.auth().signInWithEmailAndPassword(payload.pEmail, payload.pPassword)
            .then(pUserInfo => {
                commit('fnSetUser', {
                    email: pUserInfo.user.email
                })
                commit('fnSetLoading', false)
                commit('fnSetErrorMessage', '')
                
                router.push('/') ///로그인 한 첫화면
            })
            .catch(err => {
                commit('fnSetErrorMessage', err.message)
                commit('fnSetLoading', false)
            })
        },

        /// 자동로그인처리
        fnDoLoginAuto({commit}, pUserInfo){
            commit('fnSetUser',{
                email: pUserInfo.email
            })
            commit('fnSetLoading', false)
            commit('fnSetErrorMessage', '')
    },

        /// 로그아웃
        fnDoLogout({commit}){
            firebase.auth().signOut()
            commit('fnSetUser', null)
            router.push('/') ///로그인 안 한 첫화면
        },
    }
}