import React, { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
    // Creo un estado para setear la cantidad de productos que se agregan al carrito:
    const [addToCart, setAddToCart] = useState(0);

    // Traigo el context de cart
    const { addProduct } = useContext(CartContext);

    // Funcion que maneja la cantidad de productos en el carrito:
    const handleQuantity = (quantity) => {
        setAddToCart(quantity);

        const item = { id, nombre, precio };
        addProduct(item, quantity);
    };

    return (
        <div className={`contenedorItem item-id-${id}`}>
            <div className='img'>
                <img src={img} alt={nombre} />
            </div>
            
            <div className='contenido'>
                <h2>{nombre}</h2>
                <h3>${precio}</h3>
                
                {stock === 0 ? (
                    <p className='sinStock'>Sin stock</p>
                ) : addToCart > 0 ? (
                    <Link className='finish' to="/cart"><p>Terminar Compra</p></Link>
                ) : (
                    <ItemCount minimum={1} stock={stock} functionAddToCart={handleQuantity} />
                )}
            </div>
            
        </div>
    );
};

export default ItemDetail;
