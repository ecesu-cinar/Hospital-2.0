import React, { useState, useEffect } from 'react';
import { getGalleryImages } from '../api/GalleryApi';

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
        <div>
            <div className='bg-primary'>
                <h1
                    className='text-white text-2xl p-6 font-medium'
                >
                    Galeri
                </h1>
            </div>

            {loading?(
                <p className='p-6'>
                    Loading Gallery...
                </p>
            ): galleryImages.length > 0 && (
                <div className='p-6'> 
                    <div>
                        {galleryImages.map(image =>(
                            <div key = {image.id} className='hadow-md overflow-hidden'>
                                <img
                                    src ={image.image}
                                    alt={image.description || 'Gallery image'}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )
            
            }
        </div>
    )
}

export default Gallery