import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Squash as Hamburger } from 'hamburger-react'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-3 text-[#FEC260]">
            <div className='flex items-center'>
                {/* Toggle Button */}
                <span className="pr-4">
                    <Hamburger />
                </span>
                
                {/* Logo */}
                <div className="px-4">
                    <span className="text-2xl font-bold">Logo</span>
                </div>
            </div>
            
            {/* Search Input */}
            <div className="flex items-center border-b-2 border-[#FEC260] w-1/3">
                <label htmlFor="search">
                <FaSearch />
                </label>
                <input
                    type="text"
                    id="search"
                    placeholder='Search ...'
                    className="bg-transparent px-6 py-2 outline-none w-full placeholder:text-[#FEC260]"
                />
            </div>
        </nav>
    )
}

export default Navbar