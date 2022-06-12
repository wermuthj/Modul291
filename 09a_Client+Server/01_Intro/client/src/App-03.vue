<template>
  <div>
    <h1 v-if="true" v-text="mytext">Loading...</h1>
    <h2 v-else-if="true" v-html="myhtml"/>
    <b-container fluid>
      <div style="margin-top: 3rem"/>
      <Products />
      <div style="margin-top: 2rem"/>
      <Cart />
      <div style="margin-top: 2rem"/>
      <Checkout />
      <div style="margin-top: 2rem"/>
      <Validate />
    </b-container>
  </div>
</template>
<script>
import Products from './components/Products.vue'
import Cart from './components/Cart.vue'
import Checkout from './components/Checkout.vue'
import Validate from './components/Validate.vue'

export default {
  name: 'app',
  components: {
    Products, Cart, Checkout, Validate
  },

  data() {
    return {
      // v-text
      mytext: 'Webshop',
      // v-html
      myhtml: '<h1 style="color:Tomato;"> Webshop </br> HTML in <br/></h1>'
    }
  }
}
</script>
