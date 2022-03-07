import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import addPackage from '../../Images/travel/photo-1619687702140-93b976c626ba.jpg';
import { GrLinkDown } from 'react-icons/gr';
import Footer from '../../Home/Footer/Footer';
import axios from 'axios';
import Header2 from '../../Home/Header/Header2';

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://mighty-earth-23095.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    swal('Added successfully')
                    reset()
                }
            })
    }

    return (

        <div
            className=" z-0"
            style={{
                background: `linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.25)),url(${addPackage}) center center/cover fixed no-repeat`, overflow: "hidden",
            }}

        >
            <Header2></Header2>
            <div className="flex items-center justify-center my-52" >

                <p className=" px-3 py-2 rounded-md  font-bold  text-red-800 hover:text-red-700 text-7xl" type="submit" data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                    Add More Services</p>

            </div>
            <div className='flex items-center justify-center my-5'>
                <GrLinkDown className="absolute animate-bounce " size="3em" />
            </div>


            <div className="bg-red-50 py-8">
                <div className="my-container py-20" data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">

                    <form
                        className="lg:-mt-24 w-full md:w-1/2 lg:w-1/3 mx-auto flex flex-col  justify-center space-y-2"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <label
                            className="text-left mt-8 inline-block text-xl text-lightBlue"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="rounded-full w-full px-4 py-1 border-2 border-gray-300 focus:outline-none focus:border-gray-400"
                            required
                            {...register("name")}
                        />
                        <div className="flex items-center space-x-2">
                            <div className="price">
                                <label
                                    className="text-left inline-block text-xl text-lightBlue"
                                    htmlFor="price"
                                >
                                    Price
                                </label>
                                <input
                                    id="price"
                                    type="number"
                                    className="rounded-full w-full px-4 py-1 border-2 border-gray-300 focus:outline-none focus:border-gray-400"
                                    required
                                    {...register("price")}
                                />
                            </div>
                            <div className="price">
                                <label
                                    className="text-left inline-block text-xl text-lightBlue"
                                    htmlFor="duration"
                                >
                                    Time
                                </label>
                                <input
                                    id="duration"
                                    type="text"
                                    className="rounded-full w-full px-4 py-1 border-2 border-gray-300 focus:outline-none focus:border-gray-400"
                                    required
                                    {...register("duration")}
                                />
                            </div>
                        </div>

                        <label
                            className="text-left mt-8 inline-block text-xl text-lightBlue"
                            htmlFor="img"
                        >
                            Images
                        </label>
                        <input
                            id="img"
                            type="text"
                            className="rounded-full w-full px-4 py-1 border-2 border-gray-300 focus:outline-none focus:border-gray-400"
                            required
                            {...register("img")}
                        />
                        <label
                            className="text-left mt-8 inline-block text-xl text-lightBlue"
                            htmlFor="description"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            className="rounded-lg w-full px-4 py-1 border-2 border-gray-300 focus:outline-none focus:border-gray-400"
                            required
                            {...register("description")}
                        />

                        <input
                            className="bg-red-700 text-white border-none focus:outline-none focus:ring-2 focus:ring-lightRed focus:ring-offset-2 hover:bg-red-800 hover:shadow-lg cursor-pointer py-2 rounded-full text-lg"
                            value="Add Package"
                            type="submit"

                        />
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default AddPackage;