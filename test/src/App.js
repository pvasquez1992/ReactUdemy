import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto'
import Carrito from './components/Carrito'

import { Fragment, useState } from 'react';

function App() {

  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Mouse', precio: 10 },
    { id: 2, nombre: 'Teclado', precio: 45 },
    { id: 3, nombre: 'Monitor', precio: 155 },
    { id: 4, nombre: 'CPU i7 R2342', precio: 665 }
  ]);

  //state carrito compras

  const [carrito, agregarProducto] = useState([]);


  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header />
      <h1>List Productos</h1>
      {
        productos.map(item => (

          <Producto 
          key={item.id} 
          producto={item}
          carrito={carrito}          
          agregarProducto={agregarProducto}
          productos={productos}
          />

        ))}

        <Carrito carrito={carrito} agregarProducto={agregarProducto}/>
      <Footer fecha={fecha} />

    </Fragment>
  );
}

export default App;
