import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

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

Listado.propTypes = {
gastos : PropTypes.array.isRequired

}

export default Listado;