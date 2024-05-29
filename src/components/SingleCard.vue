<script>
export default {
    name: "SingleCard",
    props: {
        select: Object


    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>


<template>
    <div class="card">
        <img :src="select.card_images[0].image_url">
        <h2>{{ select.name }}</h2>
        <p>{{ select.type }}</p>
        
    </div>



</template>

<style scoped>
.card {
    padding: 1rem;
    width: 10rem;
    background-color: chocolate;
    border: 1px solid black;
    font-size: 12px;
}

img {
    width: 100%;
}

p {
    color: rgb(0, 0, 0);
}

h2 {
    width: 100%;
}
</style>