<template>
  <div>
    <h2>Jetzt bezahlen</h2>
    Ihr Total ist CHF {{ cartTotal.toFixed(2) }}.
    <b-button variant="primary" v-show="cartTotal > 0" @click="checkout">Jetzt bezahlen</b-button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'Cart',
  computed: mapGetters(['cartTotal']),
  methods: {
    checkout() {
      alert('Checkout processed!');
    }
  }
}
</script>

