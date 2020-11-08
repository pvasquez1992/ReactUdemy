import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Respuesta from './components/Respuesta';
import styled from '@emotion/styled';

const Contenedor = styled.div`
      max-width: 600px;
      margin: 0 auto;
`;

const ContendorFormulario = styled.div`
      background-color : #FFF;
      padding: 3rem;

`;



function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }

  });

  const { cotizacion,  datos } = resumen;


  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros" />
      <ContendorFormulario>
        <Formulario guardarResumen={guardarResumen} />
        <Resumen datos={datos} />
        <Respuesta cotizacion={cotizacion} />
      </ContendorFormulario>
    </Contenedor>
  );
}

export default App;
