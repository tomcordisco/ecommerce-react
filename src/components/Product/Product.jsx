import React from 'react'

const Product = ({nombre, precio}) => {
    return (
        <div>
            <h2>Remera</h2>
            <p>{nombre}</p>
            <p>${precio}</p>
            <button>Add to cart</button>
        </div>
    )
}

export default Product