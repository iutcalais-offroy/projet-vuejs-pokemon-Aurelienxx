<template>
    <n-card title="Card with Cover">
      <template #cover>
        <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
      </template>
      Card Content
    </n-card>
  </template>
  

<script setup>
import { ref } from 'vue';
import { fetchAllPokemon } from './../store/Pokemon.store.ts';

const fetchAll = async () => {
    try {
        const response = await fetchAllPokemon({});
        return response.data;
    } catch (error) {
        console.error('Erreur de récuperation :', error);
    }
};


</script>

<style scoped>
  .n-card {
    max-width: 300px;
  }

</style>