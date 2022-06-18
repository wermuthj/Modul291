<template >
  <div style="background-color:#3a3b3c; color:#ebecf0; font-family: Montserrat; text-align: center; padding-top: 50px; padding-bottom:50px">
    <h1 v-if="true" v-text="mytext">Loading...</h1>
    <h2 v-else-if="true" v-html="myhtml"/>
    <b-container fluid>
      <div style="margin-top: 3rem"/>
      <Products  />
      <div style="margin-top: 2rem"/>
      <Cart/>
      <div style="margin-top: 2rem"/>
      <Checkout/>
      <div style="margin-top: 2rem" />
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
      mytext: 'CAFÉ SCHERMUTH',
      // v-html
      myhtml: '<h1 style="color:Tomato;"> CAFÉ SCHERMUTH </br> HTML in <br/></h1>'
    }
  }
}
</script>
