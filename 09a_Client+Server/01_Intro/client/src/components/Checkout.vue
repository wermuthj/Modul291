<template>
  <div>
    <h2>Jetzt bezahlen</h2>
    Ihr Total ist CHF {{ cartTotal.toFixed(2) }}.
    <b-button pill variant="info" v-on:click="goToCheckout('data')" v-show="cartTotal" >Jetzt bezahlen</b-button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'Cart',
  computed: mapGetters(['cartTotal']),
  methods: {
    goToCheckout() {
      window.location.href = "../form-validation/Validation.html"
      console.warn("hello functzion")
    }
  }
}
</script>

