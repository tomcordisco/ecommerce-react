// 1. importar useState y createContext

import { useState, createContext } from "react";

// 2. Crear el contexto:

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalQuantity: 0
});



export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    // Metodos para manipular el carrito:
    // Agregar al carrito:
    const addProduct = (item, quantity) => {
        const productExist = cart.find(prod => prod.item.id === item.id);

        //si el producto existe, lo agregamos al carrito
        if(!productExist) {
            setCart( prev => [...prev, { item, quantity } ] );
            setTotalQuantity( prev => prev + quantity);
            setTotal( prev => prev + (item.precio * quantity))
        } else {
            // si el producto ya existe, actualizamos cantidad:
            const cartUpdated = cart.map( prod => {
                if(prod.item.id === item.id) {
                    return {...prod, quantity: prod.quantity + quantity}
                } else {
                    return prod;
                }
            });
            setCart(cartUpdated);
        }
    }
    //Eliminar del carrito:
    const removeProduct = (id) => {
        const productDeleted = cart.find(prod => prod.item.id === id);
        const cartUpdated = cart.filter(prod => prod.item.id !== id);
        setCart(cartUpdated);
        setTotalQuantity(prev => prev - productDeleted.quantity);
        setTotal(prev => prev - (productDeleted.item.precio * productDeleted.quantity) );
    }
     // Vaciar carrito:
    const deleteCart = () => {
        setCart([]);
        setTotalQuantity(0);
        setTotal(0);
    }

    // 5. Usamos CartContext.Provider para enviar el valor actual del carrito.

    return (
        <CartContext.Provider value={{cart , addProduct, removeProduct, deleteCart, total, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

// 6. Children es una propiedad especial que se utiliza para representar a todos los componentes que necesiten el caert y sus metodos.

