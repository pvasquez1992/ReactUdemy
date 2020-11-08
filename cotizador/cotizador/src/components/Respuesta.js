import React from 'react';
import styled from '@emotion/styled';

const Mensaje = styled.p`
    background-color: rgb(127,224,237);
    margin-top:2rem;
    padding: 1rem;
    text-align : center;
`;

const Respuesta = ({ cotizacion }) => {

    return (
        
            cotizacion === 0 
            ? <Mensaje>Elije marca, año y tipo de seguro.</Mensaje>
            : <Mensaje>El total es $ {cotizacion}</Mensaje>


    );
}



export default Respuesta;