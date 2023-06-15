import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from '../../services/config';
import { collection, addDoc } from 'firebase/firestore';
import './Checkout.css'


const Checkout = () => {
    const { cart, deleteCart } = useContext(CartContext);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmation, setEmailConfirmation] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    const handleForm = (event) => {
        event.preventDefault();

        if( !name || !surname || !telephone || !email || !emailConfirmation){
            setError("Por favor complete todos los campos!");
            return;
        }

        if(email !== emailConfirmation){
            setError("Los campos del emial no coinciden!");
            return;
        }

        const order = {
            items: cart.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                quantity: producto.quantity
            })),
            total: cart.reduce((total, producto) => total + producto.item.precio * producto.quantity, 0),
            name,
            surname,
            telephone,
            email
        };

        addDoc(collection(db, "orders"), order)
        .then(docRef => {
            setOrderId(docRef.id);
            deleteCart();
        })
        .catch(error => {
            setError("Se produjo un error al crear la orden.");
        });

    }

    return (


        <div>
            <h2>Checkout</h2>
            <form onSubmit={ handleForm }>
                {cart.map(producto => (
                <div>
                    <p>
                        { producto.item.nombre} x {producto.quantity}
                    </p>
                    <p> Precio ${producto.item.precio} </p>
                </div>
                ))}
                <hr />
                
                <div className="form-group">
                    <label htmlFor=""> Nombre </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                
                <div className="form-group">
                    <label htmlFor=""> Apellido </label>
                    <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
                </div>
                
                <div className="form-group">
                    <label htmlFor=""> Telefono </label>
                    <input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                </div>
                
                <div className="form-group">
                    <label htmlFor=""> Email </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                
                <div className="form-group">
                    <label htmlFor=""> Email Confirmación </label>
                    <input type="email" value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)} />
                </div>

                {error && <p style={{color:"red"}}> {error} </p>}
                
                <button type="submit"> Finalizar Compra </button>
            </form>

            {

                orderId && (
                    <strong>¡Gracias por tu compra! Tu número de orden es {orderId}.</strong>
                )

            }
            
        </div>
    )
}

export default Checkout