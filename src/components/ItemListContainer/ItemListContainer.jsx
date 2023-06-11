import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
//import { getProductos, getProductosByCategoria } from '../../asyncmock';
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../services/config';

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();

    useEffect( () => {
        const misProductos = idCategoria ? query(collection(db, "productos"), where("idCategoria", "==", idCategoria)) : collection(db, "productos"); 

    getDocs(misProductos)
        .then(res => {
            const nuevosProdusctos = res.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            });
            setProductos(nuevosProdusctos);
        })
        .catch(error => console.error(error))

    }, [idCategoria]);

    // useEffect( ()=> {
    //     const funcionProductos = idCategoria ? getProductosByCategoria : getProductos;

    //     funcionProductos(idCategoria)
    //         .then(res => setProductos(res))
    //         .catch(error => console.error(error));
    // }, [idCategoria])
    
    return (
        <>
            <h2> {props.greeting} </h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer