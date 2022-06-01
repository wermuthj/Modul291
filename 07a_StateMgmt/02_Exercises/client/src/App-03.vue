<template>
  <div id="app">
    <b-container fluid>
      <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="2"
          label-cols-lg="2"
          content-cols-sm="8"
          content-cols-lg="8"
          description=""
          label="Select Product:"
          label-for="input-horizontal"
      >
        <!-- DO NOT USE this. in v-model and :options -->
        <b-form-select
            id="prodList"
            v-model="pid"
            :options="pidList"
            @change="setPid()"
        >
          <template #first>
          </template>
        </b-form-select>
        <div class="mt-2">Selected pid: <strong>{{ this.pid }}</strong></div>
        <div style="margin-top: 5rem"></div>
        <b-card
            :title="title"
            :img-src="this.prodImg(this.pid)"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 40rem;"
            class="mb-n4"
        >
          <b-card-text>
            <b-row class="my-1">
              <b-col sm="4">
                <label>on stock: {{ stock }} pieces</label>
              </b-col>
              <b-col sm="1">
                <label>Price: </label>
              </b-col>
              <b-col sm="2">
                <b-form-input v-model:value="item[0].prize" ref="input"
                              @focusout="setProduct(item[0].pid,item[0].prize)"></b-form-input>
              </b-col>
              <b-col sm="2">
                <b-button variant="primary"
                          @click="setProduct(item[0].pid,item[0].prize)">Update
                </b-button>
              </b-col>
            </b-row>
            <b-row class="my-4">
              <b-col sm="7">
                Product value on stock {{ this.sum }}
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-form-group>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      pidList: [],  //selection for <b-form-select>
      pid: null,    //product id
      item: [],     //one product
      sum: 0        //sum of stock * prize for one product
    }
  },
  beforeMount() {
    try {
      //get products from store and assign it to the pid list
      //??
      //if pid equal null then set pid to 0
      //??
      //get product by its id
      //??
      //compute sum with method getStockSum
      //??
      console.log(`beforeMount: ${this.sum}`);
    }
    catch (e) {
      console.error(`beforeMount: ${e}`);
    }

  },
  computed: {
    price(){
      //return item prize
      //??
    },
    stock(){
      //return item stock
      //??
    },
    title(){
      //return item title (product title)
      //??
    }
  },
  methods: {
    setPid(){
      this.item = this.$store.getters.getProductById(this.pid);
      this.sum = this.getStockSum(this.pid);
      console.log(`set pid: ${this.pid}`);
    },

    getStockSum() {
      let sum = this.item[0].prize * this.item[0].stock;
      return sum.toFixed(2);
    },
    setProduct(pid, prize) {
      this.sum = this.getStockSum();
      if (prize) {
        this.$store.commit('updateProduct', this.item);
      }
    },
    prodImg() {
      let path1 = `./assets/${this.item[0].img}`;
      console.log(`${path1}`);
      return require(`${path1}`);
    }

  }
}
</script>

<style lang="scss" scoped>
img{
  width: 40%;
  height: 40%;
}
</style>
