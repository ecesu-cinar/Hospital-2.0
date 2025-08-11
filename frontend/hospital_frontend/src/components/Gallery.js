import React, { useState, useEffect } from 'react';
import { getGalleryImages } from '../api/GalleryApi';
import { Splide , SplideSlide} from '@splidejs/react-splide'

const Gallery = () => {

    const [ galleryImages , setGalleryImages ] = useState([]);
    const[ loading , setLoading ] = useState(true);
    
    useEffect(() => {
        const fetchGallery = async() => {
            try{
                const images = await getGalleryImages();
                console.log('GalleryImages:',images);
                setGalleryImages(images);
            } catch (error){
                console.error('Failed to fetch gallery images:', error);
            }finally{
                setLoading(false);
            }
        }

        fetchGallery();
    },[]);



    return(
        <div className='bg-primary'>
            <div className='bg-primary'>
                <h1
                    className='text-white text-2xl md:text-4xl pt-8 md:pt-12 md:pb-5 font-bold'
                >
                    Galeri
                </h1>
            </div>

            {loading?(
                <p className='md:p-6 text-white text-xl'>
                    Galeri yükleniyor, lütfen bekleyin...
                </p>
            ): galleryImages.length > 0 && (
                <div className='px-8 pt-8 pb-12 md:py-12 bg-primary mx-5 md:mx-10'> 
                    <Splide options = {{
                        type: 'loop',
                        autoplay: true,
                        interval: 3000,
                        arrows: true,
                        perPage: 3,
                        perMove: 1,
                        gap: '2rem',
                        pagination: true,
                        breakpoints: {
                            768: { perPage: 1, gap: '1rem' },
                            1024: { perPage: 2, gap: '1.5rem' },
                        },
                    }}>
                        {galleryImages.map(image =>(
                            <SplideSlide key = {image.id} className='shadow-md overflow-hidden'>
                                <img
                                    src={image.image.replace('/upload/', '/upload/w_800,h_600,c_fill,q_90,f_auto/')}
                                    alt={image.description || 'Gallery image'}
                                    className='w-full h-80 object-cover'
                                    style={{
                                        filter: 'contrast(0.95) brightness(1.02) saturate(1.1)',
                                        imageRendering: 'optimizeQuality',
                                        backfaceVisibility: 'hidden',
                                        transform: 'translateZ(0)'
                                    }}
                                    
                                />
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            )
            
            }
        </div>
    )
}

export default Gallery