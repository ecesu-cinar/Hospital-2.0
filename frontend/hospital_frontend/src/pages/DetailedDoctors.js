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

                            </div>

                            <div>

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