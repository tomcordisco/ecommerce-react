import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css';

const Cart = () => {
    const {cart, deleteCart, total, totalQuantity} = useContext(CartContext);
    
    if(totalQuantity === 0) {
        return (
            <>  
            <div className="cartContainer">
                <h2 className="noHayProductos"> No hay productos en el carrito</h2>
                <Link className="home" to='/'>Ver Productos</Link>
            </div> 
            </>
        )
    }

    return (
        <div className="cartContainer">
            { cart.map(prod => 
                <CartItem className="cartItem" key={prod.id} {...prod} />
            )}
            <div className="totales">
                <h2 className="cantidad">Cantidad de productos: {totalQuantity}</h2>
                <h3 className="total">Total: ${total}</h3>
                <div className="botones">
                    <button className="vaciar" onClick={ ()=> deleteCart() }>Vaciar carrito</button>
                    <Link className="finalizar" to='/checkout'>Finalizar Compra</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart