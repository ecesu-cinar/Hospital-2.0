import React from 'react';
import { FaInstagram,FaFacebook,FaXTwitter  } from "react-icons/fa6";

//Header is fucking weird dont write Hakkımza cuz like ehodf needs hakkımzda also add soem credit thingy but I have no diea how that works so maybe waht a youtube video

const Footer = () => {
    return(
        <div>
            <div className='bg-primary text-white'>
                <h1 className='text-center mx-auto p-4 md:p-9 md:text-3xl font-semibold'>Hakkımızda</h1>
                <h3>Akademi Cerrahi Tıp Merkezi web sayfamız üzerinden, hastanemizde verdiğimiz hizmetlere ilişkin bilgilere ulaşabilirsiniz.</h3>
                <h1>Bize Ulaşın</h1>
                <ul>
                    <li>
                        <a href='https://www.instagram.com/ozelakademitipmerkezi/'>
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href='https://x.com/akademitip'>
                            <FaXTwitter />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.facebook.com/ozelakademitipmerkezi/'>
                            <FaFacebook />
                        </a>
                    </li>
                </ul>

                <p>
                    Son Güncelleme: 19.12.2024 / Editör: Eda Ecesu ÇINAR.
                </p>

                <p>
                    İletişim: ecesu.cinar24@gmail.com
                </p>

            </div>
        
        </div>
    )
}
export default Footer;