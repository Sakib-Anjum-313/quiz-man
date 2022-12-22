import React from 'react';
import { useLoaderData } from 'react-router-dom';
import img from '../../images/quick-start.png';
import AllQuiz from './AllQuiz';

const Home = () => {
    const allQuiz = useLoaderData();
    const allQuizes = allQuiz.data;
    return (
        <div>
            <div className='mb-10' >
                <img className='absolute z-[-1]  w-full h-96 lg:h-screen   ' src={img} alt="" />
                <div className='w-full h-96 lg:h-screen flex flex-col lg:flex-row justify-center items-center'>
                    <p className='font-bold text-black text-lg md:text-2xl lg:text-5xl xl:text-5xl text-blue-900 '>Your Ultimate </p>
                    <p className='px-3 font-bold text-black text-lg md:text-2xl lg:text-5xl xl:text-5xl'>Quiz Solution!!!!</p>
                </div> 
            </div>

            <div className=' grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5 px-16 md:px-20 pb-20 lg:pt-20'>
                {
                allQuizes.map((quiz) => (
                    <AllQuiz key={quiz.id} quiz={quiz}> </AllQuiz>
                ))
            }

            </div>
            
            
        </div>
    );
};

export default Home;