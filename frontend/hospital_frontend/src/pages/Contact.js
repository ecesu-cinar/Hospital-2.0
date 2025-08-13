import React from 'react';
import Header from '../components/Header'
import HeaderPhoto from '../assets/photos/Contact.jpg'

const Contact = () => {
    return(
        <div>
            <div>
                <Header img={HeaderPhoto} text="İletişim" />
            </div>

            <div>
                <div className='mx-10 my-10 md:my-24 md:mx-32'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d269.82112128693507!2d28.844168357168332!3d41.049055140198845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa53845ec92bd%3A0x9c479fe3f90f95de!2sAKADEM%C4%B0%20CERRAHI%20TIP%20MERKEZ%C4%B0!5e0!3m2!1str!2snl!4v1755112921360!5m2!1str!2snl" 
                        className='h-64 md:w-full md:h-96'
                        style={{border: 0}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Akademi Cerrahi Tıp Merkezi Haritası"
                    ></iframe>
                </div>

                <div
                    className=''
                >
                    
                </div>
                
            </div>

        </div>
    );
};

export default Contact;
