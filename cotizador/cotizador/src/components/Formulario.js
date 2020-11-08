import React, { useState } from 'react';
import styled from '@emotion/styled';
import {calculaMarca, obtenerDiferenciaYear, obtenerPlan} from '../helper';
import PropTypes from 'prop-types';

const Campo = styled.div`
display:flex;
margin-bottom: 1rem;
align-items: center;
`;

const Label = styled.label`
flex:  0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px  solid #e1e1e1;
    -webkit-appearance : none;
`;

const InputRadio = styled.input`
    margin : 0 1rem;
`;

const Boton = styled.button`
    background-color:#00838F;
    font-size: 16px;
    width: 100%;
    padding:1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight:bold;
    border:none;
    transition: background-color .30s ease;
margin-top:1rem;

    &:hover {
        cursor:pointer;
        background-color : #26C6DA;

    }

`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width:100%;
    text-align: center;
`;

const Formulario = ({guardarResumen, guardarCargando}) => {

    const [datos, guardarDatos] = useState({
        marca: '',
        year: 0,
        plan: ''
    });

    const [error, guardarError] = useState(false);


    const { marca, year, plan } = datos;

    const obtenerInfo = e => {

        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value
        });

    }

    const cotizarSeguro = e => {
        e.preventDefault();

        if (marca.trim() === '' || plan.trim() === '' || year.trim() === '') {
            guardarError(true);
            console.log('err');
            return;
        }
        guardarError(false);

        let resultado = 2000;

        const dif = obtenerDiferenciaYear(year);
        console.log('dif', dif);


        resultado -= ((dif * 3) * resultado) /100;
    

        resultado = calculaMarca(marca) * resultado;

        const increment = obtenerPlan(marca);

        resultado = parseFloat(increment * resultado).toFixed(2);


        console.log('res ' , resultado);

        guardarCargando(true);

        setTimeout(() => {
            guardarCargando(false);

            guardarResumen({
                cotizacion:Number(resultado),
                datos:datos
            });
            
        }, 3000);

    }
    return (
        <form
            onSubmit={cotizarSeguro}
        >
            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={obtenerInfo}
                >
                    <option value="" >-- Seleccione --</option>
                    <option value="americano" >Americano</option>
                    <option value="europeo" >Europeo</option>
                    <option value="asiatico" >Asiatico</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={obtenerInfo}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={obtenerInfo}
                /> Basico
                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={obtenerInfo}
                /> Completo


            </Campo>
            <Boton type="submit">Cotitzar</Boton>
        </form>

    );
}

Formulario.propTypes =  {
    guardarResumen : PropTypes.func.isRequired , 
    guardarCargando : PropTypes.func.isRequired

}


export default Formulario;