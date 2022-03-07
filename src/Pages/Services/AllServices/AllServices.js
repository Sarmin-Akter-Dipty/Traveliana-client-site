import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import useAuth from '../../hooks/UseAuth';
import AllService from './AllService';
import allService from '../../Images/travel/photo-1526772662000-3f88f10405ff.jpg'
import Footer from '../../Home/Footer/Footer';
import Header2 from '../../Home/Header/Header2';

const AllServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('allServices')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    console.log(services);
    const { isLoading } = useAuth();
    if (isLoading) {
        return <button type="button" className="bg-red-700" disabled>
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">

            </svg>

        </button>
    };
    return (
        <div style={{
            background: `linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.25)),url(${allService}) center center/cover fixed no-repeat`, overflow: "hidden",
        }}
            className="z-0" data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <Header2></Header2>
            <div className="my-container mt-20 mb-40">

                <h1 className='text-4xl md:text-4xl text-red-700 font-bold mb-6'>All Services .....</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        services.map(service => <AllService key={service._id} service={service}></AllService>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllServices;