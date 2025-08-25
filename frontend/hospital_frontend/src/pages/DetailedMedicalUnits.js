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
                            <div>
                                <img
                                    src={unit.image}
                                    alt="Tıbbi birimin fotoğrafı"
                                    loading='lazy'
                                    className='w-full h-96 object-cover rounded'
                                />
                            </div>

                            <div>
                                <h1>{unit.name}</h1>
                            </div>
                            
                        </div>

                        <div>
                            <div>
                                <p
                                    className='whitespace-pre-line'
                                >
                                    {unit.description}
                                </p>

                            </div>

                            <div>
                                <h1>
                                    Birim Doktorlarmız
                                </h1>

                                <div>
                                    {unit.doctors.map((doctor) => (
                                        <div key={doctor.id}>
                                        <Link to={`/hekimler/${doctor.id}`}>{doctor.name}</Link>
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