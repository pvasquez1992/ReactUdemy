import React from 'react';

const Formulario = () => (

    <form

    >
        <h2>Agrega tus gastos</h2>

        <div className="campo">
            <label>Nombre de gasto: </label>
            <input
                className="u-full-width"
                placeholder="Ej. Alimento"
                type="text"
            />
        </div>
        <div className="campo">
            <label>Cantidad de gastos: </label>
            <input
                className="u-full-width"
                placeholder="Ej. 10"
                type="number"
            />
        </div>

        <input
            type="submit"
            className="button-primary u-full-width"
            value="Agregar gasto"
        />

    </form>

);

export default Formulario;