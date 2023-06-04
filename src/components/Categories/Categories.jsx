import React, {useState, useEffect} from 'react';

const Categories = () => {
    const [categoria, setCategoria] = useState("Helton Store");

    useEffect( () => {
        document.title = categoria;
    }, [categoria]);

    const handleClick = (categoria) => {
        setCategoria(categoria);
    }

    return (
        <div>
            <button onClick={()=> handleClick("Remeras")}>Remeras</button>
            <button onClick={() => handleClick("Hoodies")}>Hoodies</button>
            <button onClick={() => handleClick("Hoodies")}>Hoodies</button>
            
        </div>
    )
}

export default Categories;