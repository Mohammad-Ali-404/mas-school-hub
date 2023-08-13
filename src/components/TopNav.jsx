import React from 'react';
import { SlEnvolope } from 'react-icons/sl'
import { CiFacebook, CiLinkedin } from 'react-icons/ci'
import { FaTwitter } from 'react-icons/fa'
import { TfiYoutube } from 'react-icons/tfi'
const TopNav = () => {
    return (
        <div className='w-full py-2 px-20 bg-cyan-800 flex justify-between items-center text-white'>
            <div className='flex items-center gap-2'>
                <SlEnvolope/>
            masschoolhub@gmail.com
            </div>
            <div className='flex items-center gap-2'>
                <span>Follow us</span>
                <CiFacebook/>
                <FaTwitter/>
                <CiLinkedin/>
                <TfiYoutube/>

            </div>
        </div>
    );
};

export default TopNav;