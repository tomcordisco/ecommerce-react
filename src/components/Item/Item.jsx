import React from 'react';
import './Item.css';

const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className='cardProducto' id={`product-id-${id}`}>
            <img className='imgProducto' src={img} alt={nombre} />
            <h3>{nombre}</h3>
            <p>${precio}</p>
            <button>Ver detalles</button>
        </div>
    );
};

export default Item;
