import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'
import logo from '../assets/ans-logo.png'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

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
        <nav className='sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-[#070720]'>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo */}
                <Link to="/" className="flex item-center gap-2">
                    <img src={logo} alt="logo" className="h-16 object-contain" />
                </Link>
                {/* Links */}
                <ul className="list-none hidden md:flex flex-row gap-10">
                    {navLinks.map((link, index) => (
                        <li
                        key={index}
                        className="text-[#b7b7b7] hover:text-white text-[18px] font-medium cursor-pointer uppercase"
                        >
                            <Link to={link.link}>{link.page}</Link>
                        </li>
                    ))}
                </ul>
                {/* Search */}
                <div className="relative md:ml-4">
                    <input
                        type="text"
                        id="search"
                        placeholder="Search"
                        className="pl-12 pr-4 py-2 rounded-lg bg-white text-[#070720] placeholder:text-[#070720] focus:outline-none focus:ring focus:ring-[#070720]"
                    />
                    <BsSearch className="h-6 w-6 absolute left-2 top-2 text-[#070720]" />
                </div>
                {/* Responsive Links */}
                <div className="md:hidden flex flex-1 justify-end items-center">
                    <div 
                        className="block md:hidden text-white"
                        onClick={() => setToggle(!toggle)}
                    >
                        <Hamburger />
                    </div>
                    <div className={`${toggle ? 'flex' 
                    : 'hidden'} p-6 bg-[#070720] absolute top-20
                    right-0 mx-4 my-2 min-w-[140px] z-10`}>
                        <ul className="list-none flex justify-end items-start flex-col gap-4 text-white">
                            {navLinks.map((link, index) => (
                                <li
                                    key={index}
                                    className="font-poppins font-medium cursor-pointer text-[16px]"
                                    onClick={() => {
                                    setToggle(!toggle)
                                    }}
                                >
                                    <Link to={link.link}>{link.page}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        // <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-indigo-600">
        //     <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        //         <Link to="/" className="flex item-center gap-2">
        //             <img src="https://i.pinimg.com/564x/2f/f2/6e/2ff26e3f3e260998f403b4052b3d8106.jpg" alt="logo" className="h-10 object-contain" />
        //         </Link>
        //         <ul className="list-none hidden sm:flex flex-row gap-10">
        //             {navLinks.map((link) => (
        //                 <li
        //                 key={link.page}
        //                 className="text-white hover:text-indigo-200 text-[18px] font-medium cursor-pointer"
        //                 >
        //                     <Link to={link.link}>{link.page}</Link>
        //                 </li>
        //             ))}
        //         </ul>
                // <div className="sm:hidden flex flex-1 justify-end items-center">
                //     <div 
                //         className="block md:hidden text-white"
                //         onClick={() => setToggle(!toggle)}
                //     >
                //         <Hamburger />
                //     </div>
                //     <div className={`${toggle ? 'flex' 
                //     : 'hidden'} p-6 bg-indigo-600 absolute top-20
                //     right-0 mx-4 my-2 min-w-[140px] z-10`}>
                //         <ul className="list-none flex justify-end items-start flex-col gap-4 text-white">
                //             {navLinks.map((link) => (
                //                 <li
                //                     key={link.page}
                //                     className="font-poppins font-medium cursor-pointer text-[16px]"
                //                     onClick={() => {
                //                     setToggle(!toggle)
                //                     }}
                //                 >
                //                     <Link to={link.link}>{link.page}</Link>
                //                 </li>
                //             ))}
                //         </ul>
                //     </div>
                // </div>
        //     </div>
        // </nav>
    );
};

export default Navbar;
