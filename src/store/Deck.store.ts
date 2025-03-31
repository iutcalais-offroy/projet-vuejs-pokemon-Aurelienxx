import axios from 'axios';

//const API = 'https://pokemon-api-seyrinian-production.up.railway.app';
const API = 'http://localhost:3030';

interface Deck {

    name: string,
    ownerId: 0,
    cards: [ 0 ]
}


export const createDeck = async(deck : Deck) => {
    try {
        const response = await axios.post(API + "/decks", deck, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
                "Content-Type": "application/json"
            }
        });
        return response.data;
    } catch(error){
        console.error('Erreur lors de la création du deck :', error);
        throw error;
    }
};