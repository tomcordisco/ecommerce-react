const productos = [
    {id: 1, nombre: "REMERA ESCUADRÓN GALÁCTICO [ BLANCO ]", precio: 12900, img: "./img/remera-savetheworld-02-blanco.webp"},
    {id: 2, nombre: "REMERA ESCUADRÓN GALÁCTICO [ NEGRO ]", precio: 12900, img: "./img/remera-savetheworld-02-negro.webp"},
    {id: 3, nombre: "REMERA HOSPITAL PLANETARIO [ BLANCO ]", precio: 12900, img: "./img/luxo-741-hosp-plan-blanco.webp"},
    {id: 4, nombre: "REMERA HOSPITAL PLANETARIO [ NEGRO ]", precio: 12900, img: "./img/luxo-741-hosp-plan-negro.webp"}

]

export const getProductos = () => {
    return new Promise( (resolve) => {
        setTimeout( ()=> {
            resolve(productos);
        }, 2000);
    });
}