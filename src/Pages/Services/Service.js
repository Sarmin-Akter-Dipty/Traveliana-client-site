import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    //distructuring
    const { _id, img, name, price, } = props.service
    return (
        <div className="rounded-lg overflow-hidden bg-gray-100 hover:shadow-md transition" data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <div className="overflow-hidden">
                <img
                    className="transition duration-500 transform hover:scale-110 "
                    src={img}
                    alt=""
                />
            </div>
            <div className="mt-2 p-4">
                <div className="text-2xl flex-wrap">
                    <h4 className="text-red-900 font-bold ">{name}</h4>
                </div>



                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                        <p className=" font-bold">${price}</p>

                    </div>

                    <button

                        className="bg-red-700 text-white border-red-700 border-2 transition hover:bg-white hover:text-red-700 px-4 py-1 rounded btn_regular transform hover:scale-110"
                    >
                        <Link to={`/ordernow/${_id} `} ><FontAwesomeIcon icon={faCartArrowDown} />  Add To Cart
                        </Link>
                    </button>
                </div>
            </div>

            <div className="mx-5 mb-4 mt-0">
                <button

                    className="  border-red-700 text-red-700 border-2 py-2 px-6 w-full focus:outline-none hover:bg-red-700 hover:text-white rounded text-lg"
                >
                    Details Veiw
                </button>

            </div>
        </div>

    );
};

export default Service;