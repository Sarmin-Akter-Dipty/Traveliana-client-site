import React from 'react';
import Footer from '../Home/Footer/Footer';
import Header2 from '../Home/Header/Header2';

const NotFound = () => {
    return (
        <div className='bg-red-50'>
            <Header2></Header2>
            <div className='text-center'>
                <h1 className='mt-40 text-red-700 text-5xl font-bold'>404</h1>
                <h2 className='mb-40 mt-5 text-red-700 text-5xl font-bold'>Not Found</h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;