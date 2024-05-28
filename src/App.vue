<script>

import CardList from './components/CardList.vue';
import store from './data/store.js';
import axios from 'axios';

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
  created() {
    axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0").then(risultato => {
      this.store.personaggi = risultato.data.data;
      
    });

  },
  mounted() {
    
  }
}
</script>

<template>
  <h1>Yu-Gi-Oh Api</h1>
  <CardList />
</template>

<style scoped>

</style>