import React from "react";
import { AiFillHeart } from "react-icons/ai";
import {
    BsFacebook,
    BsGithub,
    BsLinkedin,
    BsPaypal,
    BsTwitter,
} from "react-icons/bs";
import {
    FaCcDiscover,
    FaCcJcb,
    FaCcMastercard,
    FaCcVisa,
    FaEnvelope,
} from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 w-full">
            <ScrollToTop
                smooth
                viewBox="0 0 24 24"
                svgPath="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
                color='#EF4444'
            />
            <div className="my-container">
                <div className="grid space-y-4 space-x-4 grid-cols-1 md:grid-cols-3">
                    <div
                        data-aos="flip-right"
                        data-aos-duration="1500"
                        className="space-y-2"
                    >
                        <h2 className="text-white text-3xl font-bold font-grandHotel tracking-widest">
                            <span className="text-red-900">Traveliana </span>
                        </h2>
                        <p>
                            Join us on a Traveliana Team Tour and Step behind the scenes,
                            soak up the atmosphere and walk in the footsteps of your Traveliana Team in an unforgettable
                        </p>
                        <div className="flex space-x-4">
                            <BsFacebook className="transition text-xl cursor-pointer hover:text-orange" />
                            <BsGithub className="transition text-xl cursor-pointer hover:text-orange" />
                            <BsTwitter className="transition text-xl cursor-pointer hover:text-orange" />
                            <BsLinkedin className="transition text-xl cursor-pointer hover:text-orange" />
                        </div>
                    </div>

                    <div
                        data-aos="flip-up"
                        data-aos-duration="1500"
                        className="flex md:justify-center"
                    >
                        <div className="">
                            <h3 className="text-3xl mb-2">Quick Links</h3>
                            <div className="flex flex-col list-none">
                                <li className="flex items-center space-x-1 group">
                                    <MdNavigateNext />
                                    <Link className="transition group-hover:text-orange" to="/">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="flex items-center space-x-1 group">
                                    <MdNavigateNext />
                                    <Link className="transition group-hover:text-orange" to="/">
                                        About Us
                                    </Link>
                                </li>
                                <li className="flex items-center space-x-1 group">
                                    <MdNavigateNext />
                                    <Link className="transition group-hover:text-orange" to="/">
                                        Latest News
                                    </Link>
                                </li>
                                <li className="flex items-center space-x-1 group">
                                    <MdNavigateNext />
                                    <Link className="transition group-hover:text-orange" to="/">
                                        Subscribe
                                    </Link>
                                </li>
                                <li className="flex items-center space-x-1 group">
                                    <MdNavigateNext />
                                    <Link className="transition group-hover:text-orange" to="/">
                                        Our Policies
                                    </Link>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1500" className="">
                        <h3 className="text-3xl mb-2">Join us</h3>
                        <p>
                            Join us on a Traveliana Team Tour and Step behind the scenes.
                        </p>

                        <div className="flex space-x-1 items-center rounded-lg p-2 border-2 mt-4">
                            <FaEnvelope className="text-lg text-lightBlue" />
                            <input
                                className="bg-transparent w-full focus:outline-none border-none focus:ring-0 px-2"
                                type="text" required
                                placeholder="Your Email:"
                            />
                        </div>
                        <button className="bg-red-900 text-white font-bold outline-none  rounded-lg px-6 py-2 mt-2 w-full shadow-lg hover:text-white hover:bg-red-800 hover:border-red-800">
                            Join us
                        </button>
                    </div>


                </div>

                <hr className="my-6" />

                <div
                    data-aos="flip-down"
                    data-aos-duration="1500"
                    className="flex flex-col items-center text-xl text-darkBlue"
                >

                    <h2 className="text-lg mb-1">We Accept</h2>
                    <div className="flex items-center space-x-4">
                        <FaCcVisa />
                        <BsPaypal />
                        <FaCcMastercard />
                        <FaCcJcb />
                        <FaCcDiscover />
                    </div>
                    <div className="flex flex-col items-center text-xl text-darkBlue">
                        <p className="text-gray-200 text-sm">

                            <br />
                            &copy;2021-2022{" "} Traveliana Developed by <AiFillHeart className="inline text-orange" /> Traveliana Team
                        </p>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;