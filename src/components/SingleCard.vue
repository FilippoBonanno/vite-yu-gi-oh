<script>
export default {
    name: "SingleCard",
    props: {
        select: String


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
}
</style>