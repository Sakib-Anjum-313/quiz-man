import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <img  src="../../images/3828537.jpg" alt="" />
            <div className='w-full h-screen flex justify-center items-center flex flex-col '>
                <p className='font-bold text-3xl text-teal-600'>Page Not Found !!!</p>
                <Button className='mt-10'>
                    <Link to={'/'}>Go Home</Link>
                </Button>
            </div>
            
        </div>
        
    );
};

export default PageNotFound;