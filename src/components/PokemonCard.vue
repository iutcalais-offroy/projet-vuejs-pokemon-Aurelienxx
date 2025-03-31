<template>
    <div class="card">
      <img :src="pokemon.imageUrl" :alt="pokemon.name" class="pokemon-img">
  
      <div class="card-body">
        <div class="name-hp">
          <h3>{{ pokemon.name }}</h3>
          <span class="hp">PV {{ pokemon.lifePoints }}</span>
        </div>
        <div v-if="pokemon && pokemon.type">
          <span class="type" :style="{ backgroundColor: getTypeColor(pokemon.type.name) }">
          {{ pokemon.type.name }}
        </span>
        </div>
        
  
        <p class="info">Taille: {{ pokemon.height }}m | Poids: {{ pokemon.weight }}kg</p>
  
        <div v-if="pokemon && pokemon.attack !== undefined">
        <div class="attack">
          <span class="attack-name">{{ pokemon.attack.name }}</span>
          <span class="attack-damage">{{ pokemon.attack.damages }} PV</span>
        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    pokemon: Object
  });
  
  const getTypeColor = (type) => {
    const colors = {
      Grass: "#78C850",
      Fire: "#F08030",
      Water: "#6890F0",
      Electric: "#F8D030",
      Normal: "#A8A878",
      Psychic: "#F85888",
      Ice: "#98D8D8",
      Dragon: "#7038F8",
      Dark: "#705848",
      Fairy: "#EE99AC",
      Steel: "#B8B8D0",
      Rock: "#B8A038",
      Ground: "#E0C068",
      Bug: "#A8B820",
      Poison: "#A040A0",
      Flying: "#A890F0",
      Fighting: "#C03028",
      Ghost: "#705898"
    };
    return colors[type] || "#68A090";
  };
  </script>
  
  <style scoped>
  .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 10px;
}

.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  padding: 15px;
  text-align: center;
}

.card:hover{
transform: scale(1.1);
}

.pokemon-img {
  width: 100%;
  max-height: 200px;
  object-fit: contain;
}

.card-body {
  padding-top: 10px;
}

.name-hp {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  margin: 0;
}

.hp {
  color: red;
  padding: 3px 8px;
  border-radius: 5px;
  font-weight: bold;
}

.type {
  display: inline-block;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  margin-top: 5px;
  font-weight: bold;
}

.info {
  font-size: 14px;
  color: gray;
  margin: 5px 0;
}

.attack {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f2f2f2;
  padding: 5px 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.attack-name {
  font-weight: bold;
}

.attack-damage {
  color: red;
  font-weight: bold;
}
  </style>
  