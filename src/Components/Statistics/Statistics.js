import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis,
    YAxis
} from "recharts";

const Statistics = () => {
    const data = useLoaderData();
    const chartData = data.data;
    console.log()

    return (
        <div>
            <div className='w-full h-screen flex justify-center items-center '>
                <ResponsiveContainer width="50%" height="50%" >
                    <BarChart width={600} height={400} data={chartData} margin={{
        top: 30,
        right: 30,
        left: 20,
        bottom: 30
      }} className=' bg-gray-100 shadow-xl rounded-xl'>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="total" />
                <Tooltip />
                <Legend />
                {/* <Bar dataKey="name" fill="#82ca9d" /> */}
                 <Bar dataKey="total" fill="rgb(13 148 136)" />

            </BarChart>
                </ResponsiveContainer>
                
            </div>
            

        </div>
     );
};

export default Statistics;