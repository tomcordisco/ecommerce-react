import imgCarrito from'./cart.png'
import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext);
    
    return (
        
        <div className='cartWidget'>
            <Link className='number' to='/cart'>
                <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
                {
                    totalQuantity > 0 && <span>{totalQuantity}</span>
                }
            </Link>
            
        </div>
    )
}

export default CartWidget