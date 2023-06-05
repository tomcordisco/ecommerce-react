import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { getProductos, getProductosByCategoria } from '../../asyncmock';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();

    useEffect( ()=> {
        const funcionProductos = idCategoria ? getProductosByCategoria : getProductos;

        funcionProductos(idCategoria)
            .then(res => setProductos(res))
            .catch(error => console.error(error));
    }, [idCategoria])
    
    return (
        <>
            <h2> {props.greeting} </h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer