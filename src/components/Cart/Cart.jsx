import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const {cart, deleteCart, total, totalQuantity} = useContext(CartContext);
    
    if(totalQuantity === 0) {
        return (
            <>
                <h2> No hay productos en el carrito</h2>
                <Link to='/'>Ver Productos</Link>
            </>
        )
    }

    return (
        <div>
            {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
            <h3>Total: ${total}</h3>
            <h3>Cantidad de productos: {totalQuantity}</h3>
            <button onClick={ ()=> deleteCart() }>Vaciar carrito</button>
            <Link to='/checkout'>Finalizar Compra</Link>
        </div>
    )
}

export default Cart