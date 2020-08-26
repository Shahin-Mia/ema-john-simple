import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prod) => total + prod.price, 0);
    const tax = total * .1;
    let shipping = 0;
    if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }
    const formatNumber = num => parseFloat(num.toFixed(2));

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered: {props.cart.length}</p>
            <p><small>Product Price : ${formatNumber(total)}</small></p>
            <p><small>Shipping Cost : ${shipping}</small></p>
            <p>Subtotal : ${formatNumber(total + shipping)}</p>
            <p><small>Tax + Vat: ${formatNumber(tax)}</small></p>
            <p>Total: ${total + shipping + tax}</p>

        </div>
    );
};

export default Cart;