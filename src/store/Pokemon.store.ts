import axios from 'axios';

//const API = 'https://pokemon-api-seyrinian-production.up.railway.app';
const API = 'http://localhost:3030';

export const fetchAllPokemon = async ()  => {
    try {
        const response = await axios.get(API + '/pokemons-cards');
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récuperation :', error);
        throw error;
    }
};


