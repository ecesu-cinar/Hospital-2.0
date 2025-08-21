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
                        <div>
                            <div>

                                {doctors.map( doctor => (
                                    <div
                                        key = {doctor.id}
                                        onClick={() => handleDoctorsClick(doctor.id)}
                                    >
                                        <img
                                            src={doctor.image}
                                            loading = "lazy"
                                            alt='Hekimin fotoğrafı'
                                        />

                                        <div>
                                            <h1>
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
