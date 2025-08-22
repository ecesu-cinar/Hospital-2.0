import React,  { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeaderPhoto from '../assets/photos/doctor.jpg';
import { getDoctors } from '../api/DoctorApi';
import { useNavigate } from 'react-router-dom';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDoctors = async() => {
            try{
                const doctors = await getDoctors();
                console.log(doctors);
                setDoctors(doctors);

            }catch(error){
                console.error("Failed fetching doctors:", error);
            }finally{
                setLoading(false);
            }
        }

        fetchDoctors();

    }, []);

    const handleDoctorsClick = (doctorId) =>{
        navigate(`/hekimler/${doctorId}`);
    };

    return(
        <div>

            <div>
                <Header img={HeaderPhoto} text="Hekimler" />
            </div>

            <section>
                <div>
                    {loading?(
                        <p className='text-3xl font-medium text-primary mx-20 my-20'>
                            Hekimler yükleniyor, lütfen bekleyin...
                        </p>
                    ): doctors.length > 0 ? (
                        <div className='mx-6'>
                            <div
                                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-16 px-4 md:px-6 max-w-6xl mx-auto rounded-lg '
                            >

                                {doctors.map( doctor => (
                                    <div
                                        className='cursor-pointer rounded overflow-hidden bg-primary/10 shadow-lg md:hover:shadow-xl transition '
                                        key = {doctor.id}
                                        onClick={() => handleDoctorsClick(doctor.id)}
                                    >
                                        <div
                                            className='p-4'
                                        >
                                            <img
                                                src={doctor.image}
                                                loading = "lazy"
                                                alt='Hekimin fotoğrafı'
                                                className='w-full h-64 object-cover rounded'
                                            />
                                        </div>

                                        <div>
                                            <h1
                                                className='font-semibold text-xl text-primary leading-snug mt-1 mb-5 mx-3'
                                            >
                                                {doctor.name}
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
                            Şu anda görüntülenecek hekim bulunamadı.
                        </p>
                    )}

                </div>

            </section>


        </div>
    );
};

export default Doctors;
