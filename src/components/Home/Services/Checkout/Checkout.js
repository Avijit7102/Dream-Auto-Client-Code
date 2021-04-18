import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../../../App';
import Sidebar from '../../../Sidebar/Sidebar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [checkout, setCheckout] = useState(false);
    const [cart, setCart] = useState([]);
    const { id } = useParams();



    useEffect(() => {
        fetch('https://floating-wave-39867.herokuapp.com/checkout/' + id)
            .then(res => res.json())
            .then(data => {
                setCart(data[0]);
                //setOrderDetails(updateOrder);
            })


    }, [id])

    const order = {
        ...cart,
        userName: loggedInUser.name,
        userEmail: loggedInUser.email,
    }
    //console.log('this order details: ', order)
    const handleSave = () => {
        setCheckout(true);
        const orderInfo = cart;
        
        
    }
    return (
        <div>
            <Sidebar></Sidebar>
            <div style={{marginLeft:'100px'}}className="d-flex justify-content-center">
                <div className="w-75 row pt-5">
                    <div className="col-md-4 text-center mb-5 p-1 bg-light">
                        <img style={{ height: '150px', width: '350px' }} src={cart.imageURL} alt="" />
                        <h5 className="mt-3 mb-3">{cart.name}</h5>
                        <p className="text-secondary">{cart.description}</p>
                        <p>Price: ${cart.price}</p>
                        <button onClick={handleSave} class="btn-brand text-white w-50">Proceed to Checkout</button>
                    </div>
                </div>
                
            </div>
            {
                    checkout && <div style={{width: '500px', marginLeft: '450px'}}>
                        <h4 className="text-center m-5 border-bottom p-3 border-success bg-light">Your checkout: </h4>
                        <ProcessPayment cart = {cart}></ProcessPayment>
                    </div>
            }

        </div>
    );
};

export default Checkout;