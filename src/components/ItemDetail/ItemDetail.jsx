import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({id, nombre, precio, img}) => {
    return (
        <div className='contenedorItem item-id-${id}'>
            <h2>{nombre}</h2>
            <h3>{precio}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eos dolore deserunt doloremque? Impedit praesentium voluptatum deserunt nihil quas consequuntur unde asperiores. Corporis, perspiciatis? Commodi totam expedita at a distinctio?</p>
            <img src= {img} alt={nombre} />
        </div>
    )
}

export default ItemDetail;