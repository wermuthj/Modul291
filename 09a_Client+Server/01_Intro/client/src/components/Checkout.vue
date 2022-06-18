<template>
  <div>
    Ihr Total beträgt {{ cartTotal.toFixed(2) }} CHF
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

