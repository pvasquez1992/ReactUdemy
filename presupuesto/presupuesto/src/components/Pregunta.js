import React, { Fragment, useState } from 'react'
import Error from './Error';
import PropTypes from 'prop-types'


const Pregunta = ({ guardarPresupuesto, guardarPresupuestoRestante, actualizarPregunta }) => {

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const definirPresuesto = e => {
        console.log("definirPresuesto", parseInt(e.target.value, 10));
        guardarCantidad(parseInt(e.target.value, 10));

    }

    const agregarPresupuesto = e => {

        e.preventDefault();

        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }
        guardarError(false);

        guardarPresupuesto(cantidad);
        guardarPresupuestoRestante(cantidad);
        actualizarPregunta(false);

    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            { error ? <Error mensaje="Hubo algo malo" /> : ""}
            <form
                onSubmit={agregarPresupuesto}

            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresuesto}
                />
                <input

                    type="submit"
                    className="u-full-width button-primary"
                    value="Definir presupuesto"

                ></input>

            </form>
        </Fragment>
    );
}


Pregunta.propTypes = {


    guardarPresupuesto: PropTypes.func.isRequired,
    guardarPresupuestoRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired,

}


export default Pregunta;