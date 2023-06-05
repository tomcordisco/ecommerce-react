const productos = [
    {id: "1", idCategoria: "1", nombre: "REMERA ESCUADRÓN GALÁCTICO [ BLANCO ]", precio: 12900, img: "./img/remera-savetheworld-02-blanco.webp"},
    {id: "2", idCategoria: "2", nombre: "REMERA ESCUADRÓN GALÁCTICO [ NEGRO ]", precio: 12900, img: "./img/remera-savetheworld-02-negro.webp"},
    {id: "3", idCategoria: "3", nombre: "REMERA HOSPITAL PLANETARIO [ BLANCO ]", precio: 12900, img: "./img/luxo-741-hosp-plan-blanco.webp"},
    {id: "4", idCategoria: "3", nombre: "REMERA HOSPITAL PLANETARIO [ NEGRO ]", precio: 12900, img: "./img/luxo-741-hosp-plan-negro.webp"}

]

export const getProductos = () => {
    return new Promise( (resolve) => {
        setTimeout( ()=> {
            resolve(productos);
        }, 100);
    });
}

export const getProducto = (id) => { 
    return new Promise( resolve => {
        setTimeout( () => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    });
}

export const getProductosByCategoria = (idCategoria) => { 
    return new Promise( resolve => {
        setTimeout( () => {
            const productosCategoria = productos.filter(prod => prod.idCategoria === idCategoria);
            resolve(productosCategoria);
        }, 100)
    });
}