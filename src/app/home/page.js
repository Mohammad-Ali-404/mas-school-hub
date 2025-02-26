"use client"
import AboutUs from '@/components/AboutUs';
import Banner from '@/components/Banner'
import Facility from '@/components/Facility'
import React from 'react';

const page = () => {
    return (
        <div>
            <div>
                <div className='relative'>
                    <Banner />
                    <Facility />
                </div>
                    <AboutUs/>

            </div>
        </div>
    );
};

export default page;