import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
export const MyContext = createContext();

const Main = () => {
    const [link, setlink] = useState(`/quiz`);
    console.log(link);
    return (
        <div>
            <MyContext.Provider value={[link, setlink]}>
                <Header></Header>
                <Outlet></Outlet>
            </MyContext.Provider>
        </div>
    );
};

export default Main;