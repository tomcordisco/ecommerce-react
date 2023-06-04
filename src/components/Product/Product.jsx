import React from 'react'
import ItemCount from "../ItemCount/ItemCount";
const Product = ({nombre, precio, stock, minimum}) => {
    return (
        <div>
            <h2>Remera</h2>
            <p>{nombre}</p>
            <p>${precio}</p>
            <ItemCount stock={stock} minimum={minimum}/>
        </div>
    )
}

export default Product;