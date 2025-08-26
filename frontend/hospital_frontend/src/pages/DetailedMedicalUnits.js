import React,  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import HeaderPhoto from '../assets/photos/medicalUnit.jpg';
import { getDetailedMedicalUnit } from '../api/MedicalUnitApi';
import { Link } from 'react-router-dom';


const DetailedMedicalUnits = () => {
    const [unit, setUnit] = useState(null);
    const [loading, setLoading] = useState(true);
    const {id} = useParams()

    useEffect(()=> {

        const fetchDetailedMedicalUnit = async() => {
            try{
                const unit = await getDetailedMedicalUnit(id);
                console.log('Raw API response:', unit);
                setUnit(unit);
            }catch(error){
                console.error('Error fetching details for a medical unit:', error);
            }finally{
                setLoading(false);
            }
        }

        fetchDetailedMedicalUnit();

    },[id]);


    return(
        <div>

            <div>
                <Header img={HeaderPhoto} text="" />
            </div>

            <section>
                {loading? (
                    <div>

                        <p
                            className='text-3xl font-medium text-primary m-10 md:m-20'
                        >
                            Tıbbi birim detayları yükleniyor, lütfen bekleyin...
                        </p>

                    </div>
                ): unit ?(
                    <div>
                        <div>
                            <div className='my-16 mx-5 md:mx-36'>

                                <img
                                    src={unit.image}
                                    alt="Tıbbi birimin fotoğrafı"
                                    loading='lazy'
                                    className='w-full h-96 object-cover rounded'
                                />

                            </div>

                            <div>
                                <h1 className='pb-5 text-3xl lg:text-4xl font-bold border-b-4 border-primary/25 md:mx-52 mx-16 text-primary' >{unit.name}</h1>
                            </div>
                            
                        </div>

                        <div className='text-primary'>
                            <div>
                                <p
                                    className='whitespace-pre-line py-8 md:py-10 px-10 text-lg md:px-16 lg:px-64 md:text-xl lg:text-2xl'
                                >
                                    {unit.description}
                                </p>

                            </div>

                            <div className='pb-5 md:pb-10'>
                                <h1
                                    className='text-2xl lg:text-3xl font-semibold pb-3'
                                >
                                    Birim Doktorlarımız
                                </h1>

                                <div
                                    className='text-lg md:text-xl lg:text-2xl p-2 md:p-4'
                                >
                                    {unit.doctors.map((doctor) => (
                                        <div key={doctor.id}>
                                        <Link to={`/hekimler/${doctor.id}`}> - {doctor.name}</Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                ):(
                    <div>

                        <p
                            className='text-3xl font-medium text-primary m-10 md:m-20'
                        >
                            Bu tıbbi birim şu anda görüntülenemiyor.
                        </p>

                    </div>
                )}
            </section>

        </div>

    )
};

export default DetailedMedicalUnits;