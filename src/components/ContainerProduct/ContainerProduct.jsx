import React from "react";
import Product from "../Product/Product";

const ContainerProduct = () => {
    const product1 = {
        nombre: "Remera blanca",
        precio: 12900,
        stock: 100,
        minimum: 2,
    };

    const product2 = {
        nombre: "Remera negra",
        precio: 12900,
        stock: 100,
        minimum: 3,
    };

    const product3 = {
        nombre: "Remera azul",
        precio: 13900,
        stock: 10,
        minimum: 1,
    };

    return (
        <div>
        <Product {...product1} />
        <Product {...product2} />
        <Product {...product3} />
        </div>
    );
};

export default ContainerProduct;
