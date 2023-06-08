import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ( {item, quantity} ) => {
    const {removeProduct} = useContext(CartContext);
    return (
        <div>
            <h4>{item.nombre}</h4>
            <p>Cantidad: {quantity}</p>
            <p>Precio: {item.precio}</p>
            <button onClick={ () => removeProduct(item.id) }>Eliminar</button>  
        </div>
    )
}

export default CartItem