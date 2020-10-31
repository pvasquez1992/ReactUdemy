import React, { Fragment } from 'react';


const Pregunta = () => {
    return (
        <Fragment>
           <h2>Coloca tu presupuesto</h2>
           <input
                type="number"
                className="u-full-width"
                placeholder="Coloca tu presupuesto"
           />
           <input
           
           type="submit"
           className="u-full-width button-primary"
           value="Definir presupuesto"
           ></input>
        </Fragment>
    );
}

export default Pregunta;