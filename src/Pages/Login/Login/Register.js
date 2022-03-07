import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { TailSpin } from 'react-loader-spinner';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuth from '../../hooks/UseAuth';
import { GrClose } from "react-icons/gr";

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const location = useLocation()
    const navigate = useNavigate()

    console.log(location);

    const { user, authError, registerUser, isLoading } = useAuth()
    console.log(user.email);
    const handleOnChange = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            swal('Your password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, location, navigate)

        swal("Your Register Successfully Added");
        e.preventDefault()
    }
    return (
        <div className='bg-red-50'>
            <div className="flex justify-center items-center min-h-screen">

                <div className="max-w-lg mx-auto rounded-lg shadow-xl overflow-hidden py-10 px-20 bg-white relative z-1">
                    <div
                        onClick={() => navigate.push("/")}

                        className="absolute top-2 left-0 btn px-4 animate-bounce "
                    >
                        <GrClose size="1.5em" />
                    </div>

                    {!isLoading && <form onSubmit={handleLoginSubmit} data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000" className="space-y-6 ">
                        <h1 className="text-red-700 text-2xl font-bold text-center" data-aos="zoom-in"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">Register</h1>

                        <div className='grid  grid-cols-8 gap-6 space-y-2'>
                            <div className='relative col-span-8'>
                                <input className=" h-10 w-full border-b-2 border-gray-300 text-gray-900  focus:outline-none focus:border-red-600 focus:ring-0 border-0" type="text" name="name" required placeholder="Your Name" onBlur={handleOnChange} />
                            </div>

                            <div className="relative col-span-8">
                                <input className="h-10 w-full border-b-2 border-gray-300 text-gray-900  focus:outline-none focus:border-red-600 focus:ring-0 border-0" type="email" name="email" required placeholder="Your Email" onBlur={handleOnChange} />

                            </div>
                            <div className="relative col-span-8">
                                <input className="h-10 w-full border-b-2 border-gray-300 text-gray-900  focus:outline-none focus:border-teal-600 focus:ring-0 border-0" type="password" required name="password" placeholder="Your Password" onBlur={handleOnChange} />
                            </div>
                            <div className="relative col-span-6">
                                <input className="h-10 w-full border-b-2 border-gray-300 text-gray-900  focus:outline-none focus:border-teal-600 focus:ring-0 border-0" type="password" required name="password2" placeholder="ReType Your Password" onBlur={handleOnChange} />
                            </div>

                        </div>
                        <div className="flex items-center justify-center">
                            <button className="text-white px-3 py-2 rounded-md  font-medium bg-red-800" type="submit" data-aos="zoom-in"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000">Register</button>
                        </div>
                        <p className='text-center'>Already register?{" "} <Link className="text-red-700 hover:text-red-500 no-underline " to='/login'> Please login</Link></p>
                    </form>}
                    <p className='text-center font-bold'><Link to="/home" className="justify-center" data-aos="fade-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"> Go Home <FontAwesomeIcon icon={faSignInAlt} /></Link></p>
                    {isLoading && <TailSpin color="#EF4444" height={80} width={80} />}
                    {(user?.email) ? <p className="text-indigo-700">success</p> : <p></p>}

                    {(authError) ? <p className=" text-red-600">{authError}</p> : <p></p>}
                </div>



            </div>
        </div>
    );
};

export default Register;