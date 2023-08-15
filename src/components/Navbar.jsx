"use client"
import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import React, { useState } from 'react';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            <nav className="flex items-center justify-between px-10 md:px-16 relative bg-gray-100">
                <div className="logo">
                    <Link href="/home">
                        <Image
                            src="/images/logo.png" alt="Logo"
                            width={200}
                            height={64}
                            priority={true}
                        />
                    </Link>
                </div>
                <div className='absolute -bottom-4 left-1/2 md:hidden'>
                    <button className='rounded-full bg-cyan-800 hover:bg-cyan-900 text-white p-1 pull z-20' onClick={toggleMenu}>
                        {
                            showMenu ? <IoIosArrowDown title='Tap to see menu' /> :<IoIosArrowUp title='Tap to close menu'/>
                        }
                    
                    </button>
                </div>
                <div>
                    <Link href="/login"> 
                    <button className='button'>
                        Log In
                    </button></Link>
                </div>
            </nav>
            <ul className={`md:flex  ${showMenu ? 'hidden' : 'justify-between'} text-center mt-6 md:mt-0 px-10 md:px-16 bg-gray-200 font-bold`}>
                <li className='pt-4 px-4 pb-1 hover:bg-gray-300 border-b-4 hover:border-cyan-800 hover:text-cyan-800'><Link href="/home">Home</Link></li>
                <li className='pt-4 px-4 pb-1 hover:bg-gray-300 hover:border-b-4 hover:border-cyan-800 hover:text-cyan-800'><Link href="/home/online-course">Online Course</Link></li>
                <li className='pt-4 px-4 pb-1 hover:bg-gray-300 hover:border-b-4 hover:border-cyan-800 hover:text-cyan-800'><Link href="/home/online-admission">Online Admission</Link></li>
                <li className='pt-4 px-4 pb-1 hover:bg-gray-300 hover:border-b-4 hover:border-cyan-800 hover:text-cyan-800'><Link href="/home/about-us">About Us</Link></li>
                <li className='pt-4 px-4 pb-1 hover:bg-gray-300 hover:border-b-4 hover:border-cyan-800 hover:text-cyan-800'><Link href="/home/gallery">Gallery</Link></li>
                <li className='pt-4 px-4 pb-1 hover:bg-gray-300 hover:border-b-4 hover:border-cyan-800 hover:text-cyan-800'><Link href="/home/events">Events</Link></li>
                <li className='pt-4 px-4 pb-1 hover:bg-gray-300 hover:border-b-4 hover:border-cyan-800 hover:text-cyan-800'><Link href="/home/news">News</Link></li>
                <li className='pt-4 px-4 pb-1 hover:bg-gray-300 hover:border-b-4 hover:border-cyan-800 hover:text-cyan-800'><Link href="/home/contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;
