import {api} from './index'

export const getDoctors = async() => {
    try{
        const response = await api.get('doctors/');
        return response.data.results;
    } catch(error){
        console.error("Error fetching doctors:", error);
        throw error;
    }
};

export const getDetailedDoctor = async(doctorId) => {
    try{
        const response = await api.get(`doctors/${doctorId}/`)
        return response.data;
    }catch(error){
        console.error("Error fetching the details for teh specific doctor:", error);
        throw error;
    }
}