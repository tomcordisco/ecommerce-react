import React, { useState } from 'react';

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
            <div>
                <button onClick={decrementar}>-</button>
                <p>Contador: {contador}</p>
                <button onClick={incrementar}>+</button>
            </div>
            <button onClick={() => functionAddToCart(contador)} id="product-button">Add to cart</button>
        </>
    );
};

export default ItemCount;
