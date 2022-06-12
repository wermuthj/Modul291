<template>
  <div>
    <h2>Total</h2>
    Ihr Total ist CHF {{ cartTotal.toFixed(2) }}.
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import router from '../router/index.js'

export default {
  name: 'Cart',
  computed: mapGetters(['cartTotal']),
}
</script>

