import React, { useState } from 'react';
import useAuth from '../../hooks/UseAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { TailSpin } from 'react-loader-spinner';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GrClose } from 'react-icons/gr';
const Login = () => {
    const [loginData, setLoginData] = useState({})

    const { user, authError, loginUser, isLoading, signInWithGoogle } = useAuth()
    console.log(user.email);
    const location = useLocation()
    const navigate = useNavigate()
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        console.log(newLoginData);
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate)
        swal('Your login successfully added')


        e.preventDefault()
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }
    return (
        <div className='bg-red-50 '>
            <div className="flex items-center justify-center min-h-screen">
                <div className='max-w-lg mx-auto rounded-lg shadow-xl overflow-hidden py-10 px-20 bg-white relative z-1'>
                    <div
                        onClick={() => navigate.push("/")}

                        className="absolute top-2 left-0 btn px-4 animate-bounce "
                    >
                        <GrClose size="1.5em" />
                    </div>
                    <div className="" data-aos="fade-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">

                        <h1 className="text-red-700 text-2xl font-bold text-center" data-aos="zoom-in"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">Please Login</h1>
                        {!isLoading && <form onSubmit={handleLoginSubmit} data-aos="zoom-in"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000" className="space-y-6">
                            <div className='grid grid-cols-8 gap-6 space-y-2'>
                                <div className='relative col-span-8'>
                                    <input className="mt-5 h-10 w-full border-b-2 border-gray-300 text-gray-900  focus:outline-none focus:border-red-600 focus:ring-0 border-0" type="email" name="email" required placeholder="Your Email" onBlur={handleOnChange} />
                                </div>
                                <div className='relative col-span-6 '>
                                    <input className=" h-10 w-full border-b-2 border-gray-300 text-gray-900  focus:outline-none focus:border-red-600 focus:ring-0 border-0" type="password" name="password" required placeholder="Your Password" onBlur={handleOnChange} />
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <button className=" text-white px-3 py-2 rounded-md  font-medium bg-red-800" type="submit" data-aos="zoom-in"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000">Login</button>
                            </div>

                            <p className="text-center">
                                Don't have an account?{" "}
                                <Link
                                    className="text-red-700 hover:text-red-500 no-underline"
                                    to="/register"
                                >
                                    Create New.
                                </Link>
                            </p>
                        </form>}

                        {isLoading && <TailSpin color="#EF4444" height={80} width={80} />}
                        {(user?.email) ? <p className="text-">Success</p> : <p></p>}

                        {(authError) ? <p className="text-red-600">{authError}</p> : <p></p>}


                        <div className='flex flex-col space-x-4 justify-center items-center '>
                            <p className='text-2xl text-red-600 my-3 font-bold'>
                                Or
                            </p>
                            <button className="text-white px-3 py-2 rounded-md  font-medium bg-red-800" onClick={handleGoogleSignIn} data-aos="zoom-in"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000" >Google Sign In</button>
                        </div>

                        <p className='text-center font-bold mt-2'> <Link to="/home" className="item px-3 py-1 mt-5 hover" data-aos="fade-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000"> Go Home <FontAwesomeIcon icon={faSignInAlt} /></Link></p>
                    </div>


                </div>


            </div>
        </div>
    );
};

export default Login;