import React from 'react';
import logo from '../assets/logo.png'; 

const Navbar = () => {
    return(
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo */}
                <div className="logo">
                    <a href="/">
                        <img 
                            src={logo}
                            alt="Hastane Logosu" 
                            className="h-10"
                        />
                    </a>
                </div>
                
                {/* Links */}
                <ul className="flex space-x-8">
                    <li>
                        <a href="/haberler" className="text-gray-700 hover:text-blue-600 font-medium">
                            Haberler
                        </a>
                    </li>
                    <li>
                        <a href="/hakkımızda" className="text-gray-700 hover:text-blue-600 font-medium">
                            Hakkımızda
                        </a>
                    </li>
                    <li>
                        <a href="/tıbbi-birimler" className="text-gray-700 hover:text-blue-600 font-medium">
                            Tıbbi Birimler
                        </a>
                    </li>
                    <li>
                        <a href="/hekimler" className="text-gray-700 hover:text-blue-600 font-medium">
                            Hekimler
                        </a>
                    </li>
                    <li>
                        <a href="/iletişim" className="text-gray-700 hover:text-blue-600 font-medium">
                            İletişim
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;