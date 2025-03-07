<template>
</template>

<script setup>
import { ref } from 'vue';
import { fetchAllPokemon } from './../store/Pokemon.store.ts';

const fetchAll = async () => {
    try {
        const response = await fetchAllPokemon({});
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Erreur de récuperation :', error);
    }
};

</script>

<style scoped>

</style>