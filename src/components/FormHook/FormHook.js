import React, {Fragment} from "react";
import {useForm} from 'react-hook-form'

const FormHook = () => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Fragment>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="titulo"
                    className="form-control my-2"
                    ref={
                        register({
                            required: {value: true, message: 'Titulo obligatorio'}
                        })
                    }
                />
                {errors.titulo && <p>{errors.titulo.message}</p>}
            </form>
            <button className="btn btn-primary">Enviar</button>
        </Fragment>
    )
}

export default FormHook;