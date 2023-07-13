import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

///import firebase from 'firebase/compat/app'
///import '@/datasources/firebase'

// //Vuetify-dialog
// import VuetifyDialog from 'vuetify-dialog'
// import 'vuetify-dialog/dist/vuetify-dialog.css'

// Vue.use(VuetifyDialog, {
//   context: {
//     vuetify
//   }
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
