import React, { useState, useEffect } from 'react';

const ItemCount = ({stock, minimum}) => {
    const [contador, setContador] = useState(minimum);
    const [color, setColor] = useState("black");

    useEffect(() => {
        if (contador > 5) {
            setColor("red");
        } else {
            setColor("black");
        }
    }, [contador]);

    const addToCart = () => {
        console.log("Se agregó al carrito");
    };

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
        <div>
            <button onClick={decrementar}>-</button>
            <p>{contador}</p>
            <button onClick={incrementar}>+</button>
            <button onClick={addToCart} id="product-button" style={{color: color}}>Add to cart</button>
        </div>
    );
};

export default ItemCount;
