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

    axios.get("https://db.ygoprodeck.com/api/v7/archetypes.php").then(risultato => {
      this.store.archetype = risultato.data;

    });

  },
  mounted() {

  }
}
</script>

<template>
  <h1>Yu-Gi-Oh Api</h1>
  <label for="mosters">Choose Archetype </label>

  <select name="mosters">
    <option v-for="name, i in this.store.archetype" value="volvo">{{name.archetype_name}}</option>
  </select>
  <CardList />
</template>

<style scoped></style>