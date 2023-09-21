import React from 'react';
import logo from '../assets/ans-logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    const navLinks = [
        {
            page: "Anime",
            link: "/anime",
        },
        {
            page: "Manga",
            link: "/manga",
        },
        {
            page: "Characters",
            link: "/characters",
        },
    ]
    return (
        <footer className="bg-[#070720] text-white py-6">
            <div className="container mx-auto flex flex-col items-center justify-center">
                {/* Logo */}
                <Link to="/" className="text-xl font-bold">
                    <img src={logo} alt="Logo" className="h-24 w-auto" />
                </Link>

                {/* Navigation Links */}
                <nav className="mt-4">
                    <ul className="flex space-x-4">
                        {navLinks.map((link,index) => (
                            <li key={index}>
                                <Link 
                                to={link.link}
                                className="text-[#b7b7b7] hover:text-white text-[18px] font-medium cursor-pointer uppercase"
                                >
                                    {link.page}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Copyright Text */}
                <p className="mt-4 text-sm">&copy; 2023 <span className='text-[#e53637] font-semibold'>Anime No Sekai</span>. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
