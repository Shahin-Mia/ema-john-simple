import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif';
import { useHistory } from 'react-router-dom';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const history = useHistory();

    useEffect(() => {
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProduct)
    }, [])

    const handlePlaceOrder = () => {
        history.push('/shipment')
    }


    const handleRemoveItem = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey)
        removeFromDatabaseCart(productKey);
        setCart(newCart);
    }

    let thankyou;
    if (orderPlaced) {
        thankyou = <img src={happyImage} />;
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(item => <ReviewItem
                        product={item}
                        key={item.key}
                        handleRemoveItem={handleRemoveItem}
                    />)
                }
                {
                    thankyou
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="main-btn">Proceed to checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;