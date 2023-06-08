// 1. importar useState y createContext

import { useState, createContext } from "react";

// 2. Crear el contexto:

export const CartContext = createContext({cart: []});

export const CartProvider = ({children}) => {
    // 3. crear estado local con useState

    const [cart, setCart] = useState([]);

    // Metodos para manipular el carrito:
    // Agregar al carrito:
    const addProduct = (item, quantity) => {
        const productExist = cart.find(prod => prod.item.id === item.id);

        //si el producto existe, lo agregamos al carrito
        if(!productExist) {
            setCart( prev => [...prev, { item, quantity } ] );
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
    const removedProduct = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
    }
     // Vaciasr carrito:
    const deleteCart = () => {
        setCart([]);
    }

    // 5. Usamos CartContext.Provider para enviar el valor actual del carrito.

    return (
        <CartContext.Provider value={{cart , addProduct, removedProduct, deleteCart}}>
            {children}
        </CartContext.Provider>
    )
}

// 6. Children es una propiedad especial que se utiliza para representar a todos los componentes que necesiten el caert y sus metodos.

