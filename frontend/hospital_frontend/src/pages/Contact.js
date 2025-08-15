import React from 'react';
import Header from '../components/Header'
import HeaderPhoto from '../assets/photos/Contact.jpg'
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt , FaInstagram, FaFacebookF } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

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
                    className='flex flex-col justify-center mx-1 md:mx-20'
                >
                    <div
                        className='grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-3 md:gap-y-16 md:gap-x-52 mx-auto text-primary mb-32 mt-12 items-center'
                    >
                        <div className="text-left">
                            <a
                                href="https://maps.app.goo.gl/agU5UYcjWcjBxrk39"
                                className="flex items-center gap-4 hover:text-secondary group transition duration-300"
                            >
                                <FaLocationDot className="text-3xl md:text-4xl shrink-0" />

                                <div>
                                <h3 className="text-base md:text-xl font-medium select-text">
                                    Fatih Mahallesi Velioğlu Caddesi No: 74
                                </h3>

                                <p className="text-sm md:text-base text-primary/70 group-hover:text-secondary transition duration-300">
                                    Bağcılar / İSTANBUL
                                </p>
                                </div>
                            </a>
                        </div>

                        <div
                            className='text-left'
                        >
                            <a href="https://www.instagram.com/ozelakademitipmerkezi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex items-center gap-4 hover:text-secondary transition duration-300'
                            >
                                
                                <FaInstagram 
                                    className='text-3xl md:text-4xl shrink-0'
                                />
                                
                                <h3
                                    className='text-base md:text-xl font-medium select-text'
                                >
                                    @ozelakademitipmerkezi
                                </h3>
                            
                            </a>
                        </div>

                        <div className='text-left'>
                            <a
                                href="tel:+902124740266"
                                className='flex items-center gap-4 hover:text-secondary transition duration-300'    
                            >

                                <FaPhoneAlt 
                                    className='text-3xl md:text-4xl shrink-0'
                                />

                                <h3
                                    className='text-base md:text-xl font-medium select-text'
                                >
                                    (212) 474 02 66
                                </h3>

                            </a>

                        </div>

                        <div
                            className='text-left'
                        >
                            <a href="https://www.facebook.com/ozelakademitipmerkezi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex items-center gap-4 hover:text-secondary transition duration-300'
                            >
                                
                                <FaFacebookF
                                    className='text-3xl md:text-4xl shrink-0'
                                />
                                
                                <h3
                                    className='text-base md:text-xl font-medium select-text'
                                >
                                    Akademi Tıp
                                </h3>
                            
                            </a>
                        </div>

                        <div
                            className='text-left'
                        >
                            <a 
                                href="mailto:akademitipmerkezi@windowslive.com"
                                className='flex items-center gap-4 hover:text-secondary transition duration-300'    
                            >
                                
                                <HiMail 
                                    className='text-3xl md:text-4xl shrink-0'
                                />
                                
                                <h3
                                    className='text-base md:text-xl font-medium select-text'
                                >
                                    akademitipmerkezi@windowslive.com
                                </h3>
                                
                                </a>
                        </div>


                        <div
                            className='text-left'
                        >
                            <a href="https://twitter.com/akademitip"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex items-center gap-4 hover:text-secondary transition duration-300'
                            >
                                
                                <FaXTwitter
                                    className='text-3xl md:text-4xl shrink-0'
                                />

                                <h3
                                    className='text-base md:text-xl font-medium select-text'
                                >       
                                    @akademitip
                                </h3>
                                
                            </a>
                        </div>                        
                    </div>
                </div>                
            </div>
        </div>
    );
};

export default Contact;
