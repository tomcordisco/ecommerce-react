import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./CartItem.css";

const CartItem = ( {item, quantity} ) => {
    const {removeProduct} = useContext(CartContext);
    return (
        <div className='cartItem'>
            <h4>{item.nombre}</h4>
            <p>Cantidad: {quantity}</p>
            <p>Subtotal: ${item.precio}</p>
            <button onClick={ () => removeProduct(item.id) }>Eliminar</button>  
        </div>
    )
}

export default CartItem