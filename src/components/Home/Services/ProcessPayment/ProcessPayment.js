import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51Ie0TzF09ygWja4xdZDwQa0aDcKIuD0hqzvTlhBBVvAigXDCBnchEROt56drHq1XVkiCsPzv9SXn0KiveV0pS3WX00ksXHbozj');

const ProcessPayment = ({cart}) => {
    
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm cart={cart}></CheckoutForm>
        </Elements>
    );
};

export default ProcessPayment;