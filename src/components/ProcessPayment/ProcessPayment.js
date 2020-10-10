import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './ProcessPayment.css'
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51Ha0sSGLcS77SwxaNkSRNobctra9RLWERYKCUyXeVfIf19uSguYtSBJBRvKOvXFJHuZgjARoEENJTEMaWR0wrxU400oylIAwXy');

const ProcessPayment = ({ handleOrderSuccess }) => {
    console.log(handleOrderSuccess)
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handleOrderSuccess={handleOrderSuccess}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;
