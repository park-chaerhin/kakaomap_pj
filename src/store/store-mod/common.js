export default{
    state:{
        blsLoading: false, /// 처리지연상태
        sErrorMessage: '' /// 처리 중 오류메세지
    },
    mutations:{
        fnSetLoading(state, payload){
            state.blsLoading = payload
        },
        fnSetErrorMessage(state, payload){
            state.sErrorMessage = payload
        }
    },
    getters:{
        fnGetLoading(state){
            return state.blsLoading
        },
        fnGetErrorMessage(state){
            return state.sErrorMessage
        }
    },
}