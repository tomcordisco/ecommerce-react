import React from 'react'
import './Vista.css'
import { useState } from 'react'

const Vista = () => {

    const [modoOscuro, setModoOscuro] = useState(false);

    const cambiarModo = () => {
        setModoOscuro(!modoOscuro);
    }

    const estilo = modoOscuro ? "oscuro" : "claro";

    return (
        <div className={estilo}>
            <button onClick={cambiarModo}> {modoOscuro ? "Claro" : "Oscuro"} </button>
            <h2>Componente Vista</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus inventore harum earum amet dolores laudantium corrupti ex, vitae consectetur voluptate, laborum pariatur commodi rerum vel obcaecati! Illo mollitia vero soluta.</p>
        </div>
    )
}

export default Vista