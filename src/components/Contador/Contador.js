import React, {useState, Fragment} from 'react';

const Contador = () => {

    const [numero, setNumber] = useState(0);

    const aumentar = () => {
        setNumber(numero + 1);
    }

    return (
        <Fragment>
            <h3>Contador: {numero}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
        
    );
}

export default Contador;