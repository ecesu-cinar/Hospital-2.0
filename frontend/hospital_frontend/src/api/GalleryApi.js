import { api } from './index'

export const getGalleryImages = async() => {
    try{
        const response = await api.get('gallery-images/');
        return response.data.results;
    } catch(error){
        console.error('Error fetching gallery images:' ,  error);
        throw error;
    }
};