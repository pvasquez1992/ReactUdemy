import React , {useState} from 'react';

const Formulario = () => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);

    const registrarGasto  = e => {

        e.preventDefault();

        alert("registrarGasto")

        // validar

        // construir el gasto

        // pasar el pasgo al component princial
    
        // resetear el form

    }

    return (

        <form
        onSubmit={registrarGasto}
        >
            <h2>Agrega tus gastos</h2>

            <div className="campo">
                <label>Nombre de gasto: </label>
                <input
                    className="u-full-width"
                    placeholder="Ej. Alimento"
                    type="text"
                    value = {nombre}
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

export default Formulario;