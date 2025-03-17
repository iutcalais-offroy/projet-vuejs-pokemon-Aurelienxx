import axios from 'axios';

const API = 'https://pokemon-api-seyrinian-production.up.railway.app';

export const fetchAllPokemon = async ()  => {
    try {
        const response = await axios.get(API + '/pokemon-cards');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récuperation :', error);
        throw error;
    }
};