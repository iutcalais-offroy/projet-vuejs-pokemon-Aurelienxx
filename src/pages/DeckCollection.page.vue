<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';


//onMounted(fetchDecks);
</script>

<template>
  <n-card title="Liste des Decks">
    
    <n-modal v-model:show="showModal">
      <n-card style="width: 800px" title="Détails du Deck" closable @close="showModal = false">
        <p><strong>ID :</strong> {{ selectedDeck.id }}</p>
        <p><strong>Nom :</strong> {{ selectedDeck.name }}</p>
        <p><strong>Cartes :</strong> {{ selectedDeck.cards?.join(', ') }}</p>
      </n-card>
    </n-modal>
  </n-card>
</template>

<style scoped>
</style>
