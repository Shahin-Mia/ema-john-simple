import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetail = () => {
    const { productKey } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://polar-caverns-47902.herokuapp.com/product/${productKey}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productKey])

    return (
        <div>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;