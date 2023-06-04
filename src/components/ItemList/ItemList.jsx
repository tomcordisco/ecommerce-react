import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
    return (
        <div className='itemContainer'>
            {productos.map(producto => <Item key={producto.id} {...producto}/>)}
        </div>
    )
}

export default ItemList