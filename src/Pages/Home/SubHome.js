import React from 'react';
import Header from './Header/Header';
import bannerbg from '../Images/banner-1.jpg'
import Banner from '../Home/Banner/Banner'


const SubHome = () => {
    return (
        <div style={{
            background: `url(${bannerbg}) center center/cover fixed no-repeat`, overflow: "hidden",
        }} className=' z-0'>
            <Header></Header>
            <Banner></Banner>



        </div>
    );
};

export default SubHome;