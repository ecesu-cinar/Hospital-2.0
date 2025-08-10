import React from 'react';
import Foto from '../assets/akad.jpg'
import Gallery from '../components/Gallery'
import NewsCatalog from '../components/NewsCatalog'


const Homepage = () => {
    return(
        <div>
            <div 
                className='bg-cover bg-center bg-no-repeat h-[85vh] bg-slate-700 bg-blend-overlay flex flex-col justify-center item-center text-center'
                style={{ backgroundImage: `url(${Foto})` }}
            >
                
                <h1 
                    className='text-white md:text-6xl text-4xl font-bold px-4 md:pb-6 pb-3'
                >
                    Özel Akademi Cerrahi Tıp Merkezi
                </h1>

                <p
                    className='text-white md:text-2xl text-lg font-normal md:p-4 p-7 pb-3'
                >
                    Olmaya devlet cihanda bir nefes sıhhat gibi!
                </p>

                <a
                    href ="/Contact"
                    className='text-white inline-block border border-white rounded-full m-10 md:mx-auto px-8 py-1.5 text-base bg-transparent relative cursor-pointer transition-all duration-100 hover:bg-opacity-15 hover:bg-white'
                >
                    Daha fazla bilgi için bize ulaşın 
                </a>

            </div>

            <div>
                
                <NewsCatalog />
                
            </div>

            <div>
                <Gallery />

            </div>

            <div>
                <h1
                    className=' text-2xl p-6 font-medium'
                >
                    25 yılı aşkın süredir hizmetinizdeyiz 
                </h1>

            </div>

        </div>
    );
};

export default Homepage;
