import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import swal from 'sweetalert';
import Footer from '../Home/Footer/Footer';
import Header2 from '../Home/Header/Header2';
import useAuth from '../hooks/UseAuth';
import orderNow from '../Images/travel/photo-1622589476300-b72799ca4ade.jpg'

const OrderNow = () => {
    const { servicesId } = useParams();
    const [service, setService] = useState({});
    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    console.log(service);
    useEffect(() => {

        fetch(`http://localhost:5000/services/${servicesId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [servicesId])

    const {
        register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {

        data.service = service;
        data.status = 'Pending'
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                // if (data.insertedId) {
                //     swal('Order Confirmed successfully!').then((result) => {
                //         if (result.isConfirmed) {
                //             navigate.push("/home");
                //         } else if (result.isDenied) {
                //             navigate.push("/myOrders");
                //         }
                //     });


                // } else {

                // }
            })
            .catch((err) => {
                console.log(err.message);
            });
        reset()
    };
    //         .then((result) => console.log(result));
    //     console.log(data);
    //     reset()
    // };
    return (
        <div>
            <div style={{
                background: `linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.25)),url(${orderNow}) center center/cover fixed no-repeat`, overflow: "hidden",
            }}
                className="z-0" data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                <Header2></Header2>
                <div className="my-container py-40 ">
                    <div className="grid rounded-xl shadow-lg grid-cols-1 md:grid-cols-2 bg-gray-100 py-10">
                        <div className="p-10 transition duration-500 transform hover:scale-110">
                            <img src={service?.img} alt="" />
                            <h3 className="text-3xl mt-2 text-red-700 font-bold text-center ">{service?.name}</h3>

                            <div className="px-10 mt-2 space-y-2">
                                <div className="flex items-center justify-center font-medium">
                                    <p>Your Ordered:</p>
                                    <p> 1</p>
                                </div>
                                <div className="flex items-center justify-center font-medium">
                                    <p>Your Total Cost:</p>
                                    <p>${service?.price}</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-10">
                            <h2 className="text-4xl text-red-800">Hello, {user?.displayName}</h2>
                            <p className="italic text-gray-800 text-sm">
                                Your are logged in as {user?.email}
                            </p>
                            <form
                                className="flex flex-col  justify-center space-y-2"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <p className="text-left mt-8 inline-block text-xl text-red-800">
                                    Plz Place Your Order
                                </p>
                                <input
                                    type="text"
                                    className="rounded w-full px-4 py-1 border-2 border-gray-300 focus:outline-none "
                                    defaultValue={user?.displayName}
                                    {...register("name")}
                                    readOnly
                                />
                                <input
                                    type="text"
                                    className="rounded w-full px-4 py-1 border-2 border-gray-300 focus:outline-none "
                                    defaultValue={user?.email}
                                    {...register("email")}
                                    readOnly
                                />
                                <input {...register("date", { required: true })} placeholder="date" defaultValue={new Date()} className="rounded w-full px-4 py-1 border-2 border-gray-300 focus:outline-none " />
                                <label
                                    className="text-left mt-8 inline-block text-xl text-red-800"
                                    htmlFor="address"
                                >
                                    Gender
                                </label>
                                <input
                                    id="gender"
                                    className="rounded w-full px-4 py-1 border-2 border-gray-300 focus:outline-none "
                                    required
                                    {...register("gender")}
                                />
                                <label
                                    className="text-left mt-8 inline-block text-xl text-red-800"
                                    htmlFor="address"
                                >
                                    Your Address
                                </label>
                                <textarea
                                    id="address"
                                    className="rounded w-full px-4 py-1 border-2 border-gray-400 focus:outline-none focus:border-gray-600"
                                    required
                                    {...register("address")}
                                />

                                <input
                                    className="bg-red-700 text-white border-none focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2 hover:bg-white hover:text-red-800 hover:shadow-lg cursor-pointer py-2 rounded text-lg"
                                    value="Confirm Your Order"
                                    type="submit"
                                />
                            </form>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>


        </div>
    );
};

export default OrderNow;