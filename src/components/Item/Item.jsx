import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className='cardProducto' id={`product-id-${id}`}>
            <img className='imgProducto' src={img} alt={nombre} />
            <h3>{nombre}</h3>
            <p>${precio}</p>
            <Link to={`/item/${id}`}> Ver Detalles </Link>        
        </div>
    );
};

export default Item;
