import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useContext } from 'react';
import { userContext } from '../../../../App';

const CheckoutForm = ({cart}) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    //console.log('this is cart from process payment: ', cart);
    let ordersInfo = {
        ...cart,
        userName: loggedInUser.name,
        userEmail: loggedInUser.email,
    }
    let updateOrderInfo = {
        description: ordersInfo.description,
        imageURL: ordersInfo.imageURL,
        name: ordersInfo.name,
        price: ordersInfo.price,
        userEmail: ordersInfo.userEmail,
        userName: ordersInfo.userName
    }
    //console.log('orders Info: ', ordersInfo);
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const handleSubmit = async (event) => {

        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
        } else {
            setPaymentSuccess(paymentMethod.id)
            ordersInfo = {
                ...updateOrderInfo,
                status: 'pending'

            }
            let result = ordersInfo;
            console.log('result: ', result);
            fetch('https://floating-wave-39867.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(result)
        })
            .then(res => res.json())
            .then(data => {
                console.log('handle save data: ', data)
            })
            //console.log('order details ', ordersInfo);
        }
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <CardElement />
                <p style={{marginTop:'20px', textAlign:'center'}}>You will charged ${cart.price}</p>
                <button style={{ marginLeft: '200px' }} className="btn-brand mt-2" type="submit" disabled={!stripe}>Pay
                </button>

            </form>
            {
                paymentError && <p className="text-center m-5 text-danger font-weight-bold text-uppercase">{paymentError}</p>
                    
                
            }
            {
                paymentSuccess && <p className="text-center m-5 text-success font-weight-bold text-uppercase">Your Payment is successfully done.</p>
            }
        </div>


    );
};
export default CheckoutForm;