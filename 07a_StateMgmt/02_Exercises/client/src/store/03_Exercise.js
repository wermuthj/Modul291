import Vue from 'vue'
import Vuex from 'vuex'
//VuexPersistence importieren
//??

Vue.use(Vuex)

//VuexPersistence konfigurieren
//??


export default new Vuex.Store({
    state: {
        pid : 0,
        products:[
            {pid:0, type:'shoes', title:'Moccasins', sizes: [40,41], prize:50, stock:4, img:'mocassin-1.jpg'},
            {pid:1, type:'shoes', title:'House-Shoes', sizes: [40,41,44], prize:15, stock:13, img:'house-shoes.webp'},
            {pid:2, type:'shoes', title:'Dancing', sizes: [39,41], prize:15, stock:3, img:'dancing-2.jpg',
                _cellVariants: { stock: 'warning' }},
            {pid:3, type:'shirts', title:'Rolling Stones', sizes: ["S","M","L","XL"], prize:17, stock:12, img:'tshirt-stones-1.jpg',
                _cellVariants: { stock: 'info' }},
            {pid:4, type:'shirts', title:'Queen', sizes: ["M"], prize:17, stock:1, img:'tshirt-queen-1.jpg',
                _cellVariants: { stock: 'danger' }},
        ]

    },
    getters: {
        getProducts(state){
            return function (){
                let productSelection = [];
                state.products.forEach( prod => {
                    //create option list for <b-form-select>
                    //push object with value=prod.pid and text: prod.title
                    //??
                })
                return productSelection;
            }
        },
        getProductById(state) {
            return function (pid) {
                return state.products.filter(item => {
                    //if pid of item is equal to pid ...
                    //??
                        //... then return item
                        //??
                });
            };
        }
    },
    mutations: {
        updateProduct(state, product){
            state.products.filter(item => {
                //if pid of item is equal to pid of product ...
                //??
                    //... then set item to product
                    //??
            });
        }
    },
    actions: {},
    modules: {},
    //VuexPersistence plugins anwenden
    //??
})
