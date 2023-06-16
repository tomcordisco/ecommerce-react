import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className='cardProducto' id={`product-id-${id}`}>
            <Link to={`/item/${id}`}><img className='imgProducto' src={img} alt={nombre} /></Link>
            <h3>{nombre}</h3>
            <p>${precio}</p>
            <Link className='verDetalles' to={`/item/${id}`}> Ver Detalles </Link>        
        </div>
    );
};

export default Item;
