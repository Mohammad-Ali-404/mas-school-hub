import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { PiBooksBold } from 'react-icons/pi';
import { GiTeacher } from 'react-icons/gi';

const Facility = () => {
    return (
        <div className='md:flex mx-20 md:absolute -bottom-16 md:divide-x-2 my-8 md:my-0'>
            <div className='bg-cyan-800 text-white flex gap-4 py-4 px-6 w-full h-full mb-4 md:mb-0'>
                <div><FaGraduationCap className='text-yellow-400 text-4xl '/></div>
                <div>
                    <h1 className='text-xl font-bold mb-2'>Scholarship Facility</h1>
                    <p className='w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, culpa.</p>
                </div>
            </div>
            <div className='bg-cyan-800 text-white flex gap-4 py-4 px-6 w-full mb-4 md:mb-0'>
                <div><PiBooksBold className='text-yellow-400 text-4xl'/></div>
                <div>
                    <h1 className='text-xl font-bold mb-2'>Books & Liabrary</h1>
                    <p className='w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, culpa.</p>
                </div>
            </div>
            <div className='bg-cyan-800 text-white flex gap-4 py-4 px-6 w-full mb-4 md:mb-0'>
                <div><GiTeacher className='text-yellow-400 text-4xl'/></div>
                <div>
                    <h1 className='text-xl font-bold mb-2'>Certified Teachers</h1>
                    <p className='w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, culpa.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Facility;