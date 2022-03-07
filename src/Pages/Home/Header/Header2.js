import { faPlaneDeparture, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Transition } from '@headlessui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../hooks/UseAuth';

const Header2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useAuth();
    return (
        <div className='bg-gray-900 py-5'>
            <nav className="">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-around h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 flex items-center justify-between">

                                <a
                                    href="#"
                                    className=" hover:text- text-red-800 px-3 py-2 rounded-md  font-bold text-4xl"
                                >
                                    <FontAwesomeIcon className='text-white' icon={faPlaneDeparture} />  Traveliana
                                </a>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">

                                    <a
                                        href="#"
                                        className=" hover:text-green-700 text-dark px-3 py-2 rounded-md  font-bold text-2xl "
                                    >

                                    </a>
                                    <a
                                        href="#"
                                        className=" hover:text-green-700 text-dark px-3 py-2 rounded-md  font-bold text-2xl "
                                    >

                                    </a>
                                    <a
                                        href="#"
                                        className=" hover:text-green-700 text-dark px-3 py-2 rounded-md  font-bold text-1xl "
                                    >

                                    </a>
                                    <Link
                                        to="/home"
                                        className=" text-white px-3 py-2 rounded-md  font-bold text-1xl "
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to="/aboutUs"
                                        className=" text-white px-3 py-2 rounded-md  font-bold text-1xl "
                                    >
                                        AboutUs
                                    </Link>


                                    {user.email ? (
                                        <Link

                                            to="/addServices"
                                            className=" text-white px-3 py-2 rounded-md  font-bold text-1xl"
                                        >
                                            Add Services
                                        </Link>
                                    ) : (
                                        ""
                                    )}
                                    {user.email ? (
                                        <Link

                                            to="/allServices"
                                            className="text-white px-3 py-2 rounded-md  font-bold text-1xl"
                                        >
                                            All Services
                                        </Link>
                                    ) : (
                                        ""
                                    )}
                                    {user.email ? (
                                        <Link

                                            to="/myorder"
                                            className=" text-white px-3 py-2 rounded-md  font-bold text-1xl"
                                        >
                                            My Order
                                        </Link>
                                    ) : (
                                        ""
                                    )}
                                    {user.email ? (
                                        <Link

                                            to="/allOrder"
                                            className=" text-white px-3 py-2 rounded-md  font-bold text-1xl"
                                        >All Order
                                        </Link>
                                    ) : (
                                        ""
                                    )}



                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <h6 className=" py-2 font-bold hover:text-red-800">{user?.displayName}</h6>

                                {user?.email ? <a onClick={logOut} className="hover:text-red-800 hover:bg-white text-white px-3 py-2 rounded-md  font-medium bg-red-800"><FontAwesomeIcon icon={faSignInAlt} />Log Out</a> : <Link to="/login" className="hover:text-red-800 hover:bg-white text-white px-3 py-2 rounded-md  font-medium bg-red-800"><FontAwesomeIcon icon={faSignInAlt} /> Sign In</Link>}

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >

                                </a>
                                <Link
                                    to="/home"
                                    className="  text-white  py-2 rounded-md  font-bold text-1xl "
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/aboutUs"
                                    className=" text-white px-3 py-2 rounded-md  font-bold text-1xl "
                                >
                                    AboutUs
                                </Link>


                                {user.email ? (
                                    <Link

                                        to="/addServices"
                                        className=" text-white px-3 py-2 rounded-md  font-bold text-1xl"
                                    >
                                        Add Services
                                    </Link>
                                ) : (
                                    ""
                                )}
                                {user.email ? (
                                    <Link

                                        to="/allServices"
                                        className=" text-white px-3 py-2 rounded-md  font-bold text-1xl"
                                    >
                                        All Services
                                    </Link>
                                ) : (
                                    ""
                                )}
                                {user.email ? (
                                    <Link

                                        to="/myorder"
                                        className=" text-white px-3 py-2 rounded-md  font-bold text-1xl"
                                    >
                                        My Order
                                    </Link>
                                ) : (
                                    ""
                                )}
                                {user.email ? (
                                    <Link

                                        to="/allOrder"
                                        className=" text-white px-3 py-2 rounded-md  font-bold text-1xl"
                                    >All Order
                                    </Link>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
};

export default Header2;