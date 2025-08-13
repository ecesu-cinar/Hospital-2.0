import React from 'react';
import Header from '../components/Header';
import HeaderPhoto from '../assets/photos/hakk.jpg';
import HospitalPhoto from '../assets/photos/hak.jpg';


const AboutUs = () => {
    return(
        <div>
            <div>
                <Header img={HeaderPhoto} text="Hakkımızda" />
            </div>

            <div
                className='max-w-6xl my-10 md:my-20 mx-auto items-justify-center grid grid-cols-1 md:grid-cols-2 py-3 md:py-12 px-12 md:px-6 gap-10 md:gap-20'
            >
                
                <p 
                    className='text-primary font-normal text-base md:text-xl leading-relaxed'
                >
                    1997 yılında Bağcılar’da kurulan kurumumuz, tıp merkezi olarak açılmıştır. 27 yıldır bulunduğumuz bölgede, genel cerrahi başta olmak üzere birçok branşta hizmet vermeye devam etmektedir. Misyonumuz, her şeyden önce çevreye birçok uzmanlık alanında dürüst, güvenilir ve teknolojiyi kullanarak ekonomik ve bilimsel hizmet sunmaktır. Kurumumuz, 2015 yılında yeni binasına taşınarak Akademi Cerrahi Tıp Merkezi olarak hizmetlerine devam etmektedir.
                </p>

                <img 
                    src={HospitalPhoto} alt="Akademi Cerrahi Tıp Merkezinin fotoğrafı"
                    className=''
                />

            </div>

        </div>
    );
};

export default AboutUs;
