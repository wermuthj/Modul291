import Vue from 'vue'

import App from './App-01.vue'
import store from './store/01_Exercise'

// import App from './App-02.vue'
// import store from './store/02_Exercise'

// import App from './App-03.vue'
// import store from './store/03_Exercise'

//Import Bootstrap
//??
// Import Bootstrap and BootstrapVue CSS files (order is important)
//??
//??

// Make BootstrapVue available throughout your project
//??

Vue.config.productionTip = false
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
