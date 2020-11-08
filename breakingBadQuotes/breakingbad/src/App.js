import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';



const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100% );
  background-size: 300px;
  font-family :Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;

  }

`;

const Contedor = styled.div`
   display:flex;
   align-items: center;
   padding-top:5rem;
   flex-direction: column;
`;

function App() {

  const [frase, guardarFrase] = useState({
    quote: '',
    author: ''
  });

  const consultarApi = async () => {

    const api = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const respuesta = await api.json();
    console.log('json res...', respuesta);
    guardarFrase(respuesta[0]);
  }

      useEffect( () => {consultarApi()}, [])                



  return (
    <Contedor>      
      <Frase
        frase={frase}
       />
       <Boton onClick={consultarApi}
      >Obtener Frase
      </Boton>
    </Contedor>
  );
}

export default App;
