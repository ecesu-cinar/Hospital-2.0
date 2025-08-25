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

                    <div className=' m-12 md:m-16'>

                        <div
                            className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-16 items-start'
                        >
                            <div 
                                className='bg-primary/5 rounded col-span-1 flex flex-col items-center p-4'
                            >
                                <img
                                    src={doctor.image}
                                    alt="Hekimin fotoğrafı"
                                    loading='lazy'
                                    className='w-full h-full object-cover rounded'
                                />

                                <div>
                                    <h1 className='font-semibold text-xl pt-2 text-primary'>{doctor.name}</h1>
                                    <h2 className='text-lg font-medium text-primary/80'>{doctor.unit.name}</h2>
                                </div>
                                

                            </div>


                            <div
                                className='col-span-1 md:col-span-2 lg:col-span-3 text-primary space-y-10 lg:px-36 '
                            >
                                
                                <h1 className=' pb-4 text-2xl md:text-3xl font-semibold border-b-2 border-primary/25'>Hekim Hakkında</h1>
                                {doctor.education && (
                                    <div className='p-2' >
                                        <h1 className='text-left text-xl md:text-2xl mb-2'>Eğitim</h1>
                                        <p className="whitespace-pre-line text-left px-10 text-lg md:text-xl pl-6">{doctor.education}</p>
                                    </div>
                                )}

                                {doctor.experience && (
                                    <div className='p-2' >
                                        <h1 className='text-left text-xl md:text-2xl mb-2'>Mesleki Deneyim</h1>
                                        <p className="whitespace-pre-line text-left mb:px-10 text-lg md:text-xl pl-6">{doctor.experience}</p>
                                    </div>
                                )}

                                {doctor.language && (
                                    <div className='p-2'>
                                        <h1 className='text-left text-xl md:text-2xl mb-2' >Yabancı Dil</h1>
                                        <p className="whitespace-pre-line text-left px-10 text-lg md:text-xl pl-6 ">{doctor.language}</p>
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