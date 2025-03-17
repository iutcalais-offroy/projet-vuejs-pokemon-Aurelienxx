<script setup>
import { ref, onMounted } from 'vue';
import { fetchAllPokemon, createDeck } from './../store/Pokemon.store.ts';
import PokemonCard from './../components/PokemonCard.vue';

const list = ref([]);
const pokemonsearch = ref('');
const deck = ref([]);
const cartes = ref([]);

const pokemonfilter = computed(() => {
    if (!pokemonsearch.value) {
        return list.value;
    }

    return list.value.filter(pokemon => 
        pokemon.name.toLowerCase().includes(pokemonsearch.value.toLowerCase())
    );
});

const ajoutDeck = (pokemon) => {
    deck.value.push(pokemon);
};

const supprimeDeck = (pokemon) => {
    const index = deck.value.findIndex(p => p.id === pokemon.id);
  if (index !== -1) {
    deck.value.splice(index, 1);
  }
};


const fetchAll = async () => {
    try {
        const response = await fetchAllPokemon({});
        list.value = response;
    } catch (error) {
        console.error('Erreur de récupération :', error);
    }
};

const CreateDeck = async (nom) => {
    const cartes = deck.value.map(pokemon => pokemon.id);

    try {
        const response = await createDeck({
            name: nom,
            ownerId: localStorage.id,
            cards: cartes
        });

        console.log('Deck créé :', response);
    } catch (error) {
        console.error('Erreur lors de la création du deck :', error);
    }
};



onMounted(() => {
    fetchAll();
});

</script>


<template>

<h3 v-if="deck.length > 0">Mon deck ({{ deck.length }} carte(s))</h3>

<n-form >
    <n-form-item >
      <n-input placeholder="Nom du deck..."/>
      <n-button  @click="">
        Sauvegarder
      </n-button>
    </n-form-item>
  </n-form>
  
  <div class="container">
    <PokemonCard v-for="pokemon in deck" :key="pokemon.id" :pokemon="pokemon" @click="supprimeDeck(pokemon)"/>
  </div>

<hr/>

    <n-form>
    <n-form-item >
      <n-input v-model:value="pokemonsearch" placeholder="Rechercher un pokemon..." @keydown.enter.prevent />
    </n-form-item>
    </n-form>
    

    <div class="container">
    <PokemonCard v-for="pokemon in pokemonfilter" :key="pokemon.id" :pokemon="pokemon" @click="ajoutDeck(pokemon)" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 10px;
}
button {
  background-color: green;
  color: white;
  font-weight: bold;
  border-radius: 7px;
}
</style>
