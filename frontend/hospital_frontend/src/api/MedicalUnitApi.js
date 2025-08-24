import {api} from './index'

export const getMedicalUnits = async() =>{
    try{
        const response = await api.get('medical-units/');
        return response.data.results;
    }catch(error){
        console.error('Error fetching medical units:', error);
        throw error;
    }
};

export const getDetailedMedicalUnit = async(unitId) => {
    try{
        const response = await api.get(`medical-units/${unitId}/`);
        return response.data;
    }catch(error){
        console.error("Error fetching details for the specific medical unit:", error);
        throw error;
    }
};