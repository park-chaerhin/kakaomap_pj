import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import modProvider from './store-mod/provider'
import modCommon from './store-mod/common'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    provider: modProvider,
    common: modCommon
  },
  plugins: [(new VuexPersistence({
    storage: window.localStorage
  })).plugin]
})
