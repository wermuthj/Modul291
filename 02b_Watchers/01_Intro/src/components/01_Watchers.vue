<!--
  Using Watchers to Set New Values
-->
<template>
  <div class="container">
    <h1>Shop Watcher</h1>
    <div>
      Black Friday sale
      <strike v-show="oldDiscount">Was {{ oldDiscount }}%</strike>
      <strong> Now {{ discount }}% OFF</strong><br/>
      <a href="#" @click="updateDiscount">Increase discount by 5%</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      oldDiscount: 0,
      discount: 5,
    }
  },
  watch: {
    discount: {
      handler: function (newVal, oldVal){
        console.log(`actual(${newVal}%) and old(${oldVal}%) discount.`);
        this.oldDiscount = oldVal;
      },
      immediate: false,
      deep: true
    }
    // Or shortcut for the same watch as above
    // discount(newVal, oldVal){
    //   console.log(`actual(${newVal}%) and old(${oldVal}%) discount.`);
    //   this.oldDiscount = oldVal;
    //}
  },
  methods: {
    updateDiscount(){
      this.discount = this.discount + 5;
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: 'Avenir', Helvetica, sans-serif;
  margin: 0;
}

a {
  display: inline-block;
  background: rgb(235, 50, 50);
  border-radius: 10px;
  font-size: 14px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}
</style>
