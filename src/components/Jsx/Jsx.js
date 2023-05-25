import React, {useState, Fragment} from 'react';

const Jsx = () => {

    const temperatura = 21;

    return (
        <Fragment>
            <h3>Frio o calor?</h3>
            <h2>
                {temperatura > 20 ? 'Calor' : 'Frio'}
            </h2>
        </Fragment>
    );
}

export default Jsx;