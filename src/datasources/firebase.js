//파이어베이스 앱 객체 모듈 가져오기
import firebase from 'firebase/compat/index'

//파이어베이스 DB를 초기화
const oFirebase = firebase.initializeApp({
    apiKey: "AIzaSyCKlSeSdc92kzC0K7THpPhouW4Qx-Rr3dM",
    authDomain: "my-project-5e5b2.firebaseapp.com",
});

//파이어베이스 인증 객체 공개
export const oFirebaseAuth = oFirebase.auth();