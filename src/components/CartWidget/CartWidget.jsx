import React from 'react'
import imgCarrito from'./cart.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
            <strong> 5 </strong>
        </div>
    )
}

export default CartWidget