import React, { Fragment } from 'react';

const Cita = (props) => {
    const {cita, eliminarCita } = props;

    return (

        <Fragment> 
            <div className="cita">
                <p> Mascota    : <span>{cita.mascota}</span></p>
                <p> propietario: <span>{cita.propietario}</span></p>
                <p> fecha      : <span>{cita.fecha}</span></p>
                <p> Hora       : <span>{cita.hora}</span></p>
                <p> Sintomas   : <span>{cita.sintomas}</span></p> 
                 <button className="button eliminar u-full-width" 
                 onClick={() => eliminarCita(cita.id)}
                 >Eliminar</button>          
            </div>                
            <br/>
        </Fragment>

    );

}


export default Cita;