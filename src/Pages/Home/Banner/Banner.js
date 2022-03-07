import React, { Component } from "react";
import Slider from "react-slick";
import bannerimg from '../../Images/slider-man-removebg-preview.png'
import bannerimg2 from '../../Images/photo-1551854336-5bcdc4f2d185-removebg-preview.png'
import bannerimg3 from '../../Images/photo-1610650290670-2b8ebe2fa73b-removebg-preview.png'
import bannerimg4 from '../../Images/photo-1588731234159-8b9963143fca-removebg-preview.png'
import CloseToBanner from "../CloseToBanner/CloseToBanner";


export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            initialSlide: 0
        };
        return (
            <div className="my-container">
                <Slider {...settings}>

                    <div className=" my-16">
                        <div className="container mx-auto flex items-center justify-center " >
                            <div className="text-center">
                                <div className="">
                                    <h2 className=" mb-5 text-white text-6xl font-bold">Get 12 % OFF</h2>
                                    <h1 className="text-white text-3xl font-bold mb-3">PICK THE BEST CITY FOR YOU OUR DESTINATIONS</h1>
                                    <p className="text-white font-semibold text-sm">THE BEST CITY FOR YOU OUR DESTINATIONS PICK THE BEST CITY FOR YOU OUR DESTINATIONS BEST CITY</p>
                                    <div className=" text-white mt-7 text-5xl font-medium">
                                        <span className="">
                                            Price: $1000
                                        </span>

                                    </div>
                                </div>
                            </div>
                            <div className=" text-start">
                                <img className="" src={bannerimg2} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className=" my-16">
                        <div className="container mx-auto flex items-center justify-center " >
                            <div className="text-center">
                                <div className="">
                                    <h2 className=" mb-5 text-white text-6xl font-bold">Get 20 % OFF</h2>
                                    <h1 className="text-white text-3xl font-bold mb-3">PICK THE BEST CITY FOR YOU OUR DESTINATIONS</h1>
                                    <p className="text-white font-semibold text-sm">THE BEST CITY FOR YOU OUR DESTINATIONS PICK THE BEST CITY FOR YOU OUR DESTINATIONS BEST CITY</p>
                                    <div className=" text-white mt-7 text-5xl font-medium">
                                        <span className="">
                                            Price: $1500
                                        </span>

                                    </div>
                                </div>
                            </div>
                            <div className=" text-start">
                                <img src={bannerimg3} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className=" my-16">
                        <div className="container mx-auto flex items-center justify-center" >
                            <div className="text-center" data-aos="fade-up"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000">
                                <div className="">
                                    <h2 className=" mb-5 text-white text-6xl font-bold">Get 10 % OFF</h2>
                                    <h1 className="text-white text-3xl font-bold mb-3">PICK THE BEST CITY FOR YOU OUR DESTINATIONS</h1>
                                    <p className="text-white font-semibold text-sm">THE BEST CITY FOR YOU OUR DESTINATIONS PICK THE BEST CITY FOR YOU OUR DESTINATIONS BEST CITY</p>
                                    <div className=" text-white mt-7 text-5xl font-medium">
                                        <span className="">
                                            Price: $900
                                        </span>

                                    </div>
                                </div>
                            </div>
                            <div className=" text-start">
                                <img src={bannerimg} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className=" my-16">
                        <div className="container mx-auto flex items-center justify-center " >
                            <div className="text-center">
                                <div className="">
                                    <h2 className=" mb-5 text-white text-6xl font-bold">Get 8 % OFF</h2>
                                    <h1 className="text-white text-3xl font-bold mb-3">PICK THE BEST CITY FOR YOU OUR DESTINATIONS</h1>
                                    <p className="text-white font-semibold text-sm">THE BEST CITY FOR YOU OUR DESTINATIONS PICK THE BEST CITY FOR YOU OUR DESTINATIONS BEST CITY</p>
                                    <div className=" text-white mt-7 text-5xl font-medium">
                                        <span className="">
                                            Price: $1700
                                        </span>

                                    </div>
                                </div>
                            </div>
                            <div className=" text-start">
                                <img src={bannerimg4} alt="" />
                            </div>
                        </div>

                    </div>


                </Slider>
                <CloseToBanner></CloseToBanner>
            </div>

        );
    }
}
