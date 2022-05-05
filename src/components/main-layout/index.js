import React from 'react';
import {Footer} from "../footer";
import {Header} from "../header";

export const MainLayout = ({
    children
                           }) => {
    return (
        <div>
            <Header/>
                {children}
            <Footer/>
        </div>
    );
};

