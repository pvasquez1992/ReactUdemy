import React from 'react';
import Gasto from './Gasto';

const Listado = ({gastos}) => (
    <div className="gastos-realizados">
        <h2>Listado</h2>
        {
            gastos.map(item => (
                <Gasto
                key={item.id}
                 gasto={item} />
            ))
        }
    </div>
);


export default Listado;