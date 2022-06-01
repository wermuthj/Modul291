<template>
  <div>
    <h1>Methods vs watchers vs computed props</h1>
    <div class="container">
      <div class="col">
        <h3>Example with methods</h3>
        <input
            type="text"
            placeholder="Search with method"
            v-model="input"
            @keyup="searchMethod"
        />
        <ul>
          <li v-for="(item, i) in methodFilterList" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="col">
        <h3>Example with computed props</h3>
        <input
            type="text"
            placeholder="Search with computed"
            v-model="input2"
        />
        <ul>
          <li v-for="(item, i) in computedList" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="col">
        <h3>Example with watcher</h3>
        <input
            type="text"
            placeholder="Search with watcher"
            v-model="input3"
        />
        <ul>
          <li v-for="(item, i) in watcherFilterList" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // Shared
      classList: [
        'ME19a', 'ME19b', 'ME19c', 'ME19d',
        'ME20a', 'ME20b', 'ME20c', 'ME20d'
      ],
      // Method
      input: '',
      methodFilterList: [],
      // Computed
      input2: '',
      // Watcher
      input3: '',
      watcherFilterList: []
    }
  },
  //Vue Hook
  created() {
    this.searchMethod()
  },
  methods: {
    searchMethod(e) {
      //console.log(e)
      this.methodFilterList =
          this.classList.filter(item =>
              item.toLowerCase().includes(this.input.toLowerCase())
          )
    },
  },
  computed: {
    computedList() {
      return this.classList.filter(item => {
        return item.toLowerCase().includes(this.input2.toLowerCase())
      })
    },
  },
  watch: {
    input3: {
      handler() {
        this.watcherFilterList =
            this.classList
                .filter(item => item.toLowerCase().includes(this.input3.toLowerCase()))
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.col {
  margin-bottom: 2rem;
  width: 50%;
  height: 100%;
}
input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}
</style>
