import React from 'react';
import { GrLinkDown } from 'react-icons/gr';
import about from '../../Images/3.jpg'
import about2 from '../../Images/New folder/photo-1543746746-46047c4f4bb0.jpg'
import about3 from '../../Images/New folder/photo-1576667896105-31ffa7b30722.jpg'
import about4 from '../../Images/New folder/photo.jpg'
import about5 from '../../Images/New folder/photo-1523225918988-00624e6d8fee.jpg'
import about6 from '../../Images/New folder/photo-1530789253388-582c481c54b0.jpg'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="">
            <div className="my-container">
                <div className="grid items-center grid-cols-1 md:grid-cols-2">
                    <div data-aos="fade-right" data-aos-duration="1500" className="p-10">
                        <h3 className="text-5xl py-2 text-gray-800 font-bold">
                            <span className='text-red-800'>About</span> Traveliana
                        </h3>
                        <p className="text-gray-700">
                            Travel Agency Usa. Free Results 24/7 For You! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast, 99% Match.
                        </p>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="1500" className="p-10">
                        <div className="w-full overflow-hidden rounded-lg">
                            <div class="flex flex-wrap md:-m-2 -m-1">
                                <div class="flex flex-wrap w-1/2">
                                    <div class="md:p-2 p-1 w-1/2">
                                        <img
                                            className="w-full h-full object-cover transform transition hover:scale-110"
                                            src={about}
                                            alt=""
                                        />
                                    </div>
                                    <div class="md:p-2 p-1 w-1/2">
                                        <img
                                            className="w-full h-full object-cover transform transition hover:scale-110"
                                            src={about6}
                                            alt=""
                                        />
                                    </div>
                                    <div class="md:p-2 p-1 w-full">
                                        <img
                                            className="w-full h-full object-cover transform transition hover:scale-110"
                                            src={about5}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div class="flex flex-wrap w-1/2">
                                    <div class="md:p-2 p-1 w-full">
                                        <img
                                            className="w-full h-full object-cover transform transition hover:scale-110"
                                            src={about2}
                                            alt=""
                                        />
                                    </div>
                                    <div class="md:p-2 p-1 w-1/2">
                                        <img
                                            className="w-full h-full object-cover transform transition hover:scale-110"
                                            src={about3}
                                            alt=""
                                        />
                                    </div>
                                    <div class="md:p-2 p-1 w-1/2">
                                        <img
                                            className="w-full h-full object-cover transform transition hover:scale-110"
                                            src={about4}
                                            alt=""
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
                <div className="flex items-center justify-center mt-4">

                    <button className="text-white px-3 py-2 rounded-md  font-medium text-xl bg-red-800 hover:text-red-700 hover:bg-white hover:border-red-800 border-2" type="submit" data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">


                        <div className='flex items-center justify-center mb-5'>
                            <GrLinkDown className="absolute animate-bounce " size="3em" />
                        </div>
                        <Link
                            to="/aboutUs"
                            className="   px-3 py-2 rounded-md  font-bold text-1xl "
                        >
                            More About In Traveliana
                        </Link>


                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;