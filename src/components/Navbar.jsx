import Link from 'next/link';
import Image from 'next/image';

import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="flex items-center justify-between px-4 py-2 bg-gray-100">
                <div className="logo">
                    <Link href="/">           
                            <Image src="/path-to-your-logo.png" alt="Logo" width={64} height={64} />
                    </Link>
                </div>
                <ul className="flex space-x-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/online-course">Online Course</Link></li>
                    <li><Link href="/online-admission">Online Admission</Link></li>
                    <li><Link href="/about-us">About Us</Link></li>
                    <li><Link href="/gallery">Gallery</Link></li>
                    <li><Link href="/events">Events</Link></li>
                    <li><Link href="/news">News</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;