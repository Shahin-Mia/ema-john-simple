import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';


const Product = (props) => {
    console.log(props.product)
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="Product-img" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by </small>{seller}</p>
                <p>${price}</p>
                <br />
                <p><small>Only {stock} left in stock - Order Soon</small></p>
                <button className="main-btn" onClick={() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>

            </div>
        </div>
    );
};

export default Product;