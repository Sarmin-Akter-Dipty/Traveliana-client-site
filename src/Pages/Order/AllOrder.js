import React from 'react';
import Footer from '../Home/Footer/Footer';
import Header2 from '../Home/Header/Header2';
import allorder from '../Images/travel/photo-1526772662000-3f88f10405ff.jpg'

const AllOrder = () => {
    return (
        <div style={{
            background: `linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.25)),url(${allorder}) center center/cover fixed no-repeat`, overflow: "hidden",
        }}>
            <Header2></Header2>
            <div className='my-40'>
                <h1 className='text-red-800 text-center text-5xl font-bold'>Upcoming......</h1>
                <h1 className='text-white text-center text-5xl my-5'>It will be implemented very soon</h1>
                <h1 className='text-white text-center text-2xl '>Stay with us, stay well</h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllOrder;