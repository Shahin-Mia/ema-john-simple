import { Button } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';


const ShipmentForm = ({ onSubmit, loggedInUser }) => {
    const { register, handleSubmit } = useForm();

    return (
        <form className="form-div" onSubmit={handleSubmit(onSubmit)}>
            <h2>Enter Your Shipment Addresses</h2>
            <div className="form-field">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" defaultValue={loggedInUser.displayName} name="fullName" className="field" ref={register({ required: true })} />
            </div>
            <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" defaultValue={loggedInUser.email} name="email" className="field" ref={register({ required: true })} />
            </div>
            <div className="form-field">
                <label htmlFor="address">Address</label>
                <input id="address" type="text" name="address" className="field" ref={register({ required: true })} />
            </div>
            <div className="form-field">
                <label htmlFor="tel">Phone Number</label>
                <input id="tel" type="tel" pattern="[0-9]{11}" name="phone" className="field" ref={register({ required: true })} />
            </div>
            <Button type='submit' variant="contained">Submit</Button>
        </form>
    );
}

export default ShipmentForm;