import React from 'react';
import { Container, Grid } from '@material-ui/core';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './Shipment.css';
import ShipmentForm from './ShipmentForm';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import { useState } from 'react';


const Shipment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [shippingData, setShippingData] = useState(null);

    const onSubmit = data => {
        setShippingData(data)
    };
    const handleOrderSuccess = paymentId => {
        const savedCart = getDatabaseCart();
        const orderDetails = {
            ...loggedInUser,
            product: savedCart,
            shipmentDetails: shippingData,
            orderTime: new Date(),
            paymentId
        }
        fetch('https://polar-caverns-47902.herokuapp.com/addOrders', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    processOrder();
                    alert("Order has been placed")
                }
            })
    }
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid style={{ display: shippingData ? 'none' : 'block' }} item md={6} xs={12}>
                    <ShipmentForm onSubmit={onSubmit} loggedInUser={loggedInUser} />
                </Grid>
                <Grid style={{ display: shippingData ? 'block' : 'none' }} item md={6} xs={12}>
                    <ProcessPayment handleOrderSuccess={handleOrderSuccess} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Shipment;