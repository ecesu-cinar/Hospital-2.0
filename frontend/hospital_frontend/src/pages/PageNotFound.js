import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return(
        <div className='bg-primary/5 text-primary flex items-center justify-center' >
            <div className='grid grid-cols-1 md:grid-cols-2 px-20 py-40 gap-14 md:gap-10 lg:gap-32'>
                <div>
                    <h1 className='flex text-9xl font-bold text-center items-center justify-center'>
                        404
                    </h1>

                </div>

                <div className='flex flex-col items-center justify-center md:gap-5 gap-8 lg:gap-8'>
                    <p
                        className='text-2xl md:text-3xl font-medium lg:text-4xl'
                    >
                        Böyle bir sayfa bulunamadı
                    </p>

                    <Link to="/">
                        <button
                            className='text-white inline-block border bg-primary/90 border-primary rounded-full px-8 py-1.5 relative cursor-pointer transition-all duration-100 hover:bg-opacity-100 hover:bg-primary shadow-md hover:shadow-lg
                                        text-lg md:text-xl lg:text-2xl'

                        >
                            Ana sayfaya dön
                        </button>
                    </Link>
                    
                </div>

            </div>

        </div>
    )
};

export default PageNotFound;