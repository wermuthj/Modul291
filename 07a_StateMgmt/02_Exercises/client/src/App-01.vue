<template>
  <div id="app">
    <b-container fluid>
      <b-jumbotron>
        <template #header>??</template>
        <template #lead>
          ??
        </template>
        <hr class="my-4">
        <p>
          ??<br/>
          ??
        </p>
          <b-button variant="warning" id="tooltip1" v-b-tooltip.hover>
            ??
          </b-button>&nbsp;&nbsp;
          <b-tooltip target="tooltip1" triggers="hover">
            ??
          </b-tooltip>
        <b-button variant="primary" id="tooltip2" v-b-tooltip.hover>Email</b-button>&nbsp;&nbsp;
        <b-tooltip target="tooltip2" triggers="hover">
          ??
        </b-tooltip>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
