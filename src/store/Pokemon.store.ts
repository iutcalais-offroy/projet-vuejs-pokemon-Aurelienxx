import axios from 'axios';

const API = 'https://pokemon-api-seyrinian-production.up.railway.app';

interface Deck {

    name: string,
    ownerId: 0,
    cards: [ 0 ]
}

export const fetchAllPokemon = async ()  => {
    try {
        const response = await axios.get(API + '/pokemon-cards');
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récuperation :', error);
        throw error;
    }
};


export const createDeck = async(deck : Deck) => {
    try{
        const response = await axios.post(API + '/decks', deck);
        return response.data;
    } catch(error){
        console.error('Erreur lors de la création du deck :', error);
        throw error;
    }
};