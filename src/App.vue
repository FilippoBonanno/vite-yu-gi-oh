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
      store,
      selectedOption: ""

    }
  },
  methods: {
    typeSelection() {
      if (this.selectedOption) {


        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${this.selectedOption}`).then(risultato => {
          this.store.personaggi = risultato.data.data;

        }).catch (error => {
          alert("Non Ci sono Carte")
        });
        
      }
    }

  },
  created() {
    

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

  <select @change="typeSelection" v-model="selectedOption" name="mosters">
    <option>Seleziona un Tipo di Carte</option>
    <option v-for="name, i in this.store.archetype">{{ name.archetype_name }}</option>
  </select>

  <h2>Carte Presenti:  {{ this.store.personaggi.length }}</h2>
  <CardList />
</template>

<style scoped></style>