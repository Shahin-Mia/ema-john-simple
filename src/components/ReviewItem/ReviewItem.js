import React from 'react';

const ReviewItem = (props) => {
    const { name, quantity, key, price } = props.product;
    return (
        <div style={{ borderBottom: '1px solid lightGrey' }}>
            <h4 className="product-name">{name}</h4>
            <p>quantity : {quantity}</p>
            <p>price :<small>{price}</small></p>
            <br />
            <button onClick={() => props.handleRemoveItem(key)} className="main-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;