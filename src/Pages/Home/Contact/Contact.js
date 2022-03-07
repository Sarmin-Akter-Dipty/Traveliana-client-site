import React, { useState, useRef } from 'react';
import { GrLinkDown } from 'react-icons/gr';
import contact from '../../Images/3.jpg'
import { faAddressBook, faHome, faMailBulk, faMobileAlt, faPaintBrush, faPlane, faPlaneArrival, faPlaneDeparture, faPlaneSlash, faSignInAlt, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Transition } from '@headlessui/react';
import useAuth from '../../hooks/UseAuth';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// import { useRef } from 'react/cjs/react.production.min';
import swal from 'sweetalert';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useAuth();

    const { register } = useForm();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xa766if', 'template_fdbbb3z', e.target, 'user_fS1y02g7w65tWmMqKM4SA')
            .then((result) => {
                swal('Message sent successfully!');
            }, (error) => {
                alert(error.message);
            });
        e.target.reset();
    };
    return (
        <div style={{
            background: `linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.25)),url(${contact}) center center/cover fixed no-repeat`, overflow: "hidden",
        }}
            className="z-0 " data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">

            <div className="my-container" data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">

                <div>
                    <div className="flex items-center justify-center my-52">

                        <p className=" px-3 py-2 rounded-md  font-bold  text-red-900 hover:text-red-800 text-7xl" type="submit" data-aos="zoom-in"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            Contact Us</p>

                    </div>
                    <div className='flex items-center justify-center my-5'>
                        <GrLinkDown className="absolute animate-bounce " size="3em" />
                    </div>
                </div>

                <section className="text-gray-600 body-font relative">
                    <div className="container px-5 py-16 mx-auto flex sm:flex-nowrap flex-wrap" data-aos="flip-right"
                        data-aos-duration="1500">
                        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                            <iframe className="absolute inset-0 w-full h-full" frameborder="0" title="map" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe>
                            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                                <div className="lg:w-1/2 px-6">
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                    <p className="mt-1"> The President's address is 1600 Pennsylvania Avenue NW in Washington, D.C.</p>
                                </div>
                                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                    <a className="text-red-500 leading-relaxed ">Traveliana@gmail.com</a>
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                    <p className="leading-relaxed">+88017000000</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded p-4" data-aos="flip-left"
                            data-aos-duration="1500">
                            <h2 className="text-gray-900 text-lg mb-1 font-bold title-font">Contact Us</h2>
                            <p className="leading-relaxed mb-5 text-gray-600 font-medium">Trusted results for Contact Management System. Check Traveliana Search for the best results! Unlimited Access. Always Facts. Privacy Friendly. The Best Resources.</p>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="">
                                    <div className='relative mb-4'>
                                        <input {...register("name")} placeholder="Name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required /></div>
                                    <div className='relative mb-4'>
                                        <input  {...register("email", { required: true })} type="email" placeholder="Email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                    </div>


                                    <div className='relative mb-4'>
                                        <textarea {...register("message", { required: true })} placeholder="Message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required />
                                    </div>




                                    <input type="submit" className="text-white bg-red-900 border-0 py-2 px-6 w-full focus:outline-none hover:bg-red-800 rounded text-lg" />

                                    <p className="text-xs text-gray-500 mt-3 font-medium">You can send and receive text (SMS) .Thank you So much and stay with us.</p>
                                </div>


                            </form>


                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Contact;