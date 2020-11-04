import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types'


const Formulario = ({ agregarGasto, guardarCrearGasto }) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);


    const registrarGasto = e => {

        e.preventDefault();

        // validar

        if (error || cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }
        guardarError(false);

        // construir el gasto

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        console.log("gasto", gasto);

        // pasar el pasgo al component princial

        agregarGasto(gasto);
        guardarCrearGasto(true);

        // resetear el form
        guardarCantidad(0);
        guardarNombre('');

    }

    return (

        <form
            onSubmit={registrarGasto}
        >
            <h2>Agrega tus gastos</h2>

            {
                error ? <Error mensaje="Campos obligatorios o presupuesto incorrecto" /> : null
            }

            <div className="campo">
                <label>Nombre de gasto: </label>
                <input
                    className="u-full-width"
                    placeholder="Ej. Alimento"
                    type="text"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad de gastos: </label>
                <input
                    className="u-full-width"
                    placeholder="Ej. 10"
                    type="number"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"

            />

        </form>


    );


}

Formulario.propTypes =  {
    agregarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;