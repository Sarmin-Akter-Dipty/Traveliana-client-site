import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Footer from '../Home/Footer/Footer';
import Header2 from '../Home/Header/Header2';
import useAuth from '../hooks/UseAuth';
import myorder from '../Images/travel/photo-1622589476300-b72799ca4ade.jpg'

const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([])
    const [status, setStatus] = useState(null)
    const { user } = useAuth()
    useEffect(() => {
        fetch(`http://localhost:5000/myorders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))

    }, [user.email, status])
    console.log(myOrders);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ,you wanted delete?');
        if (proceed) {
            const url = `http://localhost:5000/allOrders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {

                        alert('Deleted successfully')
                        const remaining = myOrders.filter(order => order._id !== id)
                        setMyOrders(remaining);

                    }
                })
        }
    }
    const approveOrder = id => {
        const url = `http://localhost:5000/myorders?id=${id}`
        fetch(url, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setStatus(!status)
                }
                else {
                    setStatus(false)
                }
            })
    }
    return (
        <div style={{
            background: `linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.25)),url(${myorder}) center center/cover fixed no-repeat`, overflow: "hidden",
        }}>
            <Header2></Header2>
            <div className='my-40 '>
                <h2 className='text-white text-center'>My Orders:{myOrders.length}</h2>
                {
                    myOrders?.map(order => <div key={order.service._id}>
                        <h3>Order Name: <span className="text">{order.service.name}</span></h3>
                        <div className="image-size"> <img src={order?.service.img} alt="" /></div>

                        <h4>Status: <span className="text-primary">{order.status}</span></h4>
                        <button className="bg-red-700 rounded px-4 py-2 border-0 my-5 mx-2" onClick={() => handleDelete(order._id)}>Delete</button>
                        <button className="bg-success text-white rounded px-4 py-2 border-0 my-5 mx-2" onClick={() => approveOrder(order._id)}>Approve</button>
                    </div>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyOrder;