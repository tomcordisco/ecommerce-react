import React, { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
    const [addToCart, setAddToCart] = useState(0);

    const handleQuantity = (quantity) => {
        setAddToCart(quantity);
        console.log('productos agregados: ' + quantity);
    };

    return (
        <div className='contenedorItem item-id-${id}'>
            <h2>{nombre}</h2>
            <h3>{precio}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eos dolore deserunt doloremque? Impedit praesentium voluptatum deserunt nihil quas consequuntur unde asperiores. Corporis, perspiciatis? Commodi totam expedita at a distinctio?</p>
            <img src={img} alt={nombre} />
            {
                addToCart > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<ItemCount minimum={1} stock={stock} functionAddToCart={handleQuantity} />)
            }
        </div>
    );
};

export default ItemDetail;
