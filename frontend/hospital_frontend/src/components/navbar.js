import React, {useState} from 'react';
import logo from '../assets/logo.png'; 
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    const[isMenuOpen, setMenuOpen] = useState(false);

    return(
        <nav className="bg-white shadow-lg">
            <div className="mx-auto px-4 md:px-9 flex justify-between items-center h-16 md:h-20 third text-third">
                {/* Logo */}
                <div className="logo">
                    <a href="/">
                        <img 
                            src={logo}
                            alt="Hastane Logosu" 
                            className="h-10 md:h-14"
                        />
                    </a>
                </div>
                
                {/* Links */}
                <ul className="space-x-8 font-medium text-gl hidden md:flex">
                    <li>
                        <a href="/haberler" className="text-third hover:text-secondary relative group transition-colors duration-300">
                            Haberler
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300 ease-out"></span>

                        </a>
                    </li>
                    <li>
                        <a href="/hakkımızda" className="text-third hover:text-secondary relative group transition-colors duration-300">
                            Hakkımızda
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300 ease-out"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/tıbbi-birimler" className="text-third hover:text-secondary relative group transition-colors duration-300">
                            Tıbbi Birimler
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300 ease-out"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/hekimler" className="text-third hover:text-secondary relative group transition-colors duration-300">
                            Hekimler
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300 ease-out"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/iletişim" className="text-third hover:text-secondary relative group transition-colors duration-300">
                            İletişim
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300 ease-out"></span>
                        </a>
                    </li>
                </ul>

                <button 
                    className="md:hidden text-2xl text-black  "
                    onClick={() => setMenuOpen(!isMenuOpen)}
                    >
                    <IoMenu />
                </button>
            </div>
            <div className={` text-right  ease-in-out md:hidden transition-all duration-150 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <ul className="px-4 py-4 space-y-4  border-t">
                    <li>
                        <a href="/haberler" className="block text-third hover:text-secondary">
                            Haberler
                        </a>
                    </li>
                    <li>
                        <a href="/hakkımızda" className="block text-third hover:text-secondary">
                            Hakkımızda
                        </a>
                    </li>
                    <li>
                        <a href="/tıbbi-birimler" className="block text-third hover:text-secondary">
                            Tıbbi Birimler
                        </a>
                    </li>
                    <li>
                        <a href="/hekimler" className="block text-third hover:text-secondary">
                            Hekimler
                        </a>
                    </li>
                    <li>
                        <a href="/iletişim" className="block text-third hover:text-secondary">
                            İletişim
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;