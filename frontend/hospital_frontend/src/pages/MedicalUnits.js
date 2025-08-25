import React,  { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeaderPhoto from '../assets/photos/medicalUnit.jpg';
import { getMedicalUnits } from '../api/MedicalUnitApi';
import { useNavigate } from 'react-router-dom';


const MedicalUnits = () => {
    
    const[units,setUnits] = useState([]);
    const[loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMedicalUnits = async() => {
            try{
                const data = await getMedicalUnits();

                const units =[...data].sort((a,b) => a.id - b.id );

                setUnits(units);

            }catch(error){
                console.error("Failed fetching medical units:", error);

            }finally{
                setLoading(false);
            }
        }

        fetchMedicalUnits();

    },[]);

    const handleUnitClick = (unitId) => {
        navigate(`/tibbi-birimler/${unitId}`);
    };



    return(
        <div>

            <div>
                <Header img={HeaderPhoto} text="Tıbbi Birimler" />
            </div>

            <section>
                <div>
                    {loading?(

                        <p className='text-3xl font-medium text-primary mx-20 my-20'>
                            Tıbbi birimler yükleniyor, lütfen bekleyin...
                        </p>

                    ): units.length > 0?(
                        <div className='mx-6'>
                            <div
                                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-16 px-4 md:px-6 max-w-6xl mx-auto rounded-lg '
                            >
                                {units.map (unit => (
                                    <div
                                        className='cursor-pointer rounded overflow-hidden bg-primary/5 shadow-lg md:hover:shadow-xl transition '
                                        key = {unit.id}
                                        onClick={() => handleUnitClick(unit.id)}
                                    >
                                        <div
                                            className='p-4'
                                        >
                                            <img
                                                src={unit.image}
                                                loading = "lazy"
                                                alt='Tıbbi birimin fotoğrafı'
                                                className='w-full h-64 object-cover rounded'
                                            />
                                        </div>

                                        <div>
                                            <h1
                                                className='font-semibold text-xl text-primary leading-snug mt-1 mb-5 mx-3'
                                            >
                                                {unit.name}
                                            </h1>
                                        </div>

                                    </div>
                                ))}

                            </div>
                        </div>

                    ):(
                        <p
                            className='text-3xl font-medium text-primary m-10 md:m-20'
                        >
                            Şu anda görüntülenecek tıbbi birim bulunamadı.
                        </p>
                    )}

                </div>

            </section>

        </div>
    );
};

export default MedicalUnits;
