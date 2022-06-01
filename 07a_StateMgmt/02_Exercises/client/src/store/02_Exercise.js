import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    products:[
      {type:'shoes', title:'Moccasins', sizes: [40,41], prize:50, stock:4},
      {type:'shoes', title:'House-Shoes', sizes: [40,41,44], prize:15, stock:13},
      {type:'shoes', title:'Highheels', sizes: [39,41], prize:15, stock:3,
        _cellVariants: { stock: 'warning' }},
      {type:'shirts', title:'Rolling Stones', sizes: ["S","M","L","XL"], prize:17, stock:12,
        _cellVariants: { stock: 'info' }},
      {type:'shirts', title:'Queen', sizes: ["M"], prize:17, stock:1,
        _cellVariants: { stock: 'danger' }},
    ]
  },
  getters: {
    shoes(state) {
      //??
    },
    shirts(state) {
      //??
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
