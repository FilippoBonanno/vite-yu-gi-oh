<script>
import SingleCard from './SingleCard.vue';
import store from '../data/store.js';


export default {
  name: "CardList",

  components: {
    SingleCard
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
  <div id="cardContainer">
    <SingleCard v-for="personaggio in this.store.personaggi" :select="personaggio" />
  </div>


</template>

<style scoped>
#cardContainer {
  display: flex;
  flex-wrap: wrap;
  
}
</style>