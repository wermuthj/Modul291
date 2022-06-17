import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI);

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

//Demos_03 - Mini webshop (only read products without storing checkout)
import App from './App-03'
import store from "./store/03_webshop-1"

//Import Bootstrap
import { BootstrapVue } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')