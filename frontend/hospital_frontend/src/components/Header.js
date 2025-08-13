import React from 'react';

/**
 * Header for each page
 *  Dispalyes a given photo as a background and given in white int eh center of it.
 *
 * Usage:
 *  <Header img={img} text="Text" />
 *
 * Example usage:
 * 
 *  import HeaderPhoto from '../assets/hakk.jpg';
 *  ... rest of the code
 * 
 *  <Header img={HeaderPhoto} text="Hakkımızda" />
 * 
*/

const Header = ({ img , text }) => {
    return(
        <div 
            className="relative w-full h-52 md:h-96 bg-center bg-cover flex justify-center items-center" 
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            
            <h1
                className='relative z-10 text-white text-2xl md:text-4xl font-bold'
            >
                {text}
            </h1>      
        </div>

    )

};

export default Header