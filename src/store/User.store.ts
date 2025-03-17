import axios from 'axios';

const API = 'https://pokemon-api-seyrinian-production.up.railway.app';

interface LoginData {
    email: string;
    password: string;
}

export const loginUser = async (data: LoginData)  => {

    try {
        const response = await axios.post(API + '/users/login', data);
        console.log('Réponse de l’API :', response.data);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la connexion :', error);
        throw error;
    }
    
};

export const createUser = async (data: LoginData)  => {
    console.log('Données envoyées:', data);

    try {
        const response = await axios.post( API +'/users', data);
        console.log('Réponse de l’API :', response.data);
        return response.data.token;
    } catch (error) {
        console.error('Erreur lors de la connexion :', error);
        throw error;
    }
};
