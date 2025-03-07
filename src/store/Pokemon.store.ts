import axios from 'axios';

export const fetchAllPokemon = async ()  => {
    try {
        const response = await axios.post('https://pokemon-api-seyrinian-production.up.railway.app/pokemon-cards');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récuperation :', error);
        throw error;
    }
};