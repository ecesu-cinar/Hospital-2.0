import React,  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getDetailedDoctor} from '../api/DoctorApi';
import HeaderPhoto from '../assets/photos/doctor.jpg';
import Header from '../components/Header';


const DetailedDoctors = () => {

    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);
    const {id} = useParams()

    useEffect(() => {
        const fetchDetailedDoctor = async () =>{
            try{
                const doctor = await getDetailedDoctor(id);
                console.log('Raw API response:', doctor); 
                setDoctor(doctor);
            }catch(error){
                console.error('Failed to fetch details for a doctor:', error);
            }finally{
                setLoading(false);
            }
        }

        fetchDetailedDoctor();

    },[id]);

    return(
        <div>
            <div>
                <Header img={HeaderPhoto} text="" />
            </div>
            
            <section>

                {loading ? (

                    <div>

                        <p
                            className='text-3xl font-medium text-primary m-10 md:m-20'
                        >
                            Haber detayları yükleniyor, lütfen bekleyin...
                        </p>

                    </div>

                ): doctor ?(

                    <div>

                        <div>
                            <div>
                                <img
                                    src={doctor.image}
                                    alt="Hekimin fotoğrafı"
                                    loading='lazy'
                                    className=''
                                />

                                <div>
                                    <h1>{doctor.name}</h1>
                                    <h2>{doctor.unit.name}</h2>
                                </div>
                                

                            </div>


                            <div>
                                
                                <h1>Hekim Hakkında</h1>
                                
                                {doctor.education && (
                                    <div>
                                        <h1>Eğitim</h1>
                                        <p className="whitespace-pre-line">{doctor.education}</p>
                                    </div>
                                )}

                                {doctor.experience && (
                                    <div>
                                        <h1>Mesleki Deneyim</h1>
                                        <p className="whitespace-pre-line">{doctor.experience}</p>
                                    </div>
                                )}

                                {doctor.language && (
                                    <div>
                                        <h1>Yabancı Dil</h1>
                                        <p className="whitespace-pre-line">{doctor.language}</p>
                                    </div>
                                )}         

                            </div>

                        </div>

                    </div>

                ):(
                    <div>

                        <p
                            className='text-3xl font-medium text-primary m-10 md:m-20'
                        >
                            Bu hekim şu anda görüntülenemiyor.
                        </p>

                    </div>
                )}
            
            </section>
        
        </div>
    )
};

export default DetailedDoctors