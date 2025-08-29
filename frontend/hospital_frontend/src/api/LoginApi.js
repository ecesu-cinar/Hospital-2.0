import { api } from './index'

export const loginAuth = async(credentials) => {
    try{
        const response = await api.post('auth/login/', credentials);
        return response.data;
    }catch(error){
        console.error('Error logging in:', error);
        throw error;
    }
}