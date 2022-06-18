<template>
  <div>
    <h2>Warenkorb</h2>
    <table style="margin-left:auto; margin-right: auto; ">
      <thead>
      <tr>
        <th style="text-align: left">Name</th>
        <th style="text-allign: right">Anzahl</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(product, idx) in cart" :key="idx" >
        <td>{{ product.name }}</td>
        <td>{{ product.quantity  }}</td>
      </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Cart',
  computed: mapState(['cart'])
}
</script>
