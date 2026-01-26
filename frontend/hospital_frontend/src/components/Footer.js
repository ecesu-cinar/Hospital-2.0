import React from 'react';
import { FaInstagram,FaFacebook,FaXTwitter  } from "react-icons/fa6";

//Header is fucking weird dont write Hakkımza cuz like ehodf needs hakkımzda also add soem credit thingy but I have no diea how that works so maybe waht a youtube video

const Footer = () => {
    return(
        <div>
            <div className='bg-primary text-white '>
                <h1 className='text-center mx-auto p-4 md:p-9 text-xl md:text-3xl font-semibold'>Hakkımızda</h1>
                <h3 className='text-center mx-auto px-4 md:px-12 text-sm md:text-xl font-normal' >Akademi Cerrahi Tıp Merkezi web sayfamız üzerinden, hastanemizde verdiğimiz hizmetlere ilişkin bilgilere ulaşabilirsiniz.</h3>
                <h1 className='text-center mx-auto pt-4 pb-7 md:pt-9 md:pb-9 text-xl md:text-3xl font-semibold'>Bize Ulaşın</h1>
                <ul className='flex justify-center text-2xl md:text-3xl space-x-12 pb-7 md:pb-8 '>
                    <li>
                        <a href='https://www.instagram.com/ozelakademitipmerkezi/'  className='hover:text-secondary transition-colors duration-200'>
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href='https://x.com/akademitip' className='hover:text-secondary transition-colors duration-200'>
                            <FaXTwitter />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.facebook.com/ozelakademitipmerkezi/' className='hover:text-secondary transition-colors duration-200'>
                            <FaFacebook />
                        </a>
                    </li>
                </ul>

                <p className='text-center text-xs md:text-base md:pt-4'>
                    Son Güncelleme: 26.01.2026 / Editör: Eda Ecesu ÇINAR
                </p>

                <p className='text-center text-xs md:text-base pb-3'>
                    Editör İletişim: ecesu.cinar24@gmail.com
                </p>

            </div>
        
        </div>
    )
}
export default Footer;