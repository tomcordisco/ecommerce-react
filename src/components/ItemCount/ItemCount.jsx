import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ minimum, stock, functionAddToCart }) => {
    console.log("stock: " +  stock);
    const [contador, setContador] = useState(minimum);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const decrementar = () => {
        if (contador > minimum) {
            setContador(contador - 1);
        }
    };

    return (
        <>
            <div className='container-count'>
                <button className='minus' onClick={decrementar}>-</button>
                <div className='contador'><p>{contador}</p></div>
                <button className='plus' onClick={incrementar}>+</button>
            </div>
            <button className='add' onClick={() => functionAddToCart(contador)} id="product-button">Add to cart</button>
        </>
    );
};

export default ItemCount;
