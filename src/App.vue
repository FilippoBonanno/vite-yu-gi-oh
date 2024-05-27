<script>

import CardList from './components/CardList.vue';
import store from './data/store.js';

export default {
  
  components: {
    CardList
  },
  data() {
    return {
      store
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<template>
  <h1>TITLE</h1>
  <CardList />
</template>

<style scoped>

</style>