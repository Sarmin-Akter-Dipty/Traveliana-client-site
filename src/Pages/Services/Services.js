import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import './Service.css'
import { GrLinkDown } from 'react-icons/gr';
import useAuth from '../hooks/UseAuth';
import Service from './Service';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
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
        <div className=''>
            <div className="my-container my-20">

                <h1 className='text-4xl md:text-4xl text-red-700 font-bold mb-6'>Latest Services .....</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
            <div>
                <div className="flex items-center justify-center mt-4 ">

                    <button className=" px-3 py-2 rounded-md  font-medium text-xl bg-red-800 hover:text-red-700 hover:bg-white hover:border-red-800 border-2 mb-10" type="submit" data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">


                        <div className='flex items-center justify-center mb-5'>
                            <GrLinkDown className="absolute animate-bounce " size="3em" />
                        </div>
                        <Link
                            to="/allServices"
                            className=" hover:text-red-700 text-white px-3 py-2 rounded-md  font-bold text-1xl"
                        >
                            All Services
                        </Link>


                    </button>
                </div>
            </div>
        </div>
    );
};

export default Services;