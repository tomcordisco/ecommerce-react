import Product from "../Product/Product";

const ContainerProduct = () => {
    const props = {
        nombre: "Remera azul",
        precio: 13900
    }
    return (
        <div>
            <Product nombre="Remera blanca" precio={12900} />
            <Product nombre="Remera negra" precio={12900} />
            <Product {...props}/>
        </div>
    ) 
}

export default ContainerProduct;