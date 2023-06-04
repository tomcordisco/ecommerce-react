import React from 'react';
import './ProductButton.css'

const ProductButton = () => {

    const addToCart = () => {
        console.log(`Se agrego al carrito`);
    }

    return (
        <button onClick={addToCart} className='product-button'>Add to cart</button>
    )
}

export default ProductButton