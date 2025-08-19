import { api } from './index'

export const getNews = async() => {
    try{
        const response = await api.get('news/');
        return response.data.results;
    } catch(error) {
        console.error('Error fetching news:', error);
        throw error;
    }
};

export const getDetailedNews = async(newsId) => {
    try{
        const response = await api.get(`news/${newsId}/`);
        return response.data;
    } catch(error) {
        console.error('Error fetching detailed news:', error);
        throw error;
    }

};