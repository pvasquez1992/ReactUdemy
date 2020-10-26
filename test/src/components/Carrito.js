import React from 'react';
import './Carrito.css'
import Producto from './Producto';



const Carrito = ({ carrito, agregarProducto }) =>  (

        <div className="carrito">
            <h2>Carrito compras</h2>

            {carrito.map(item => (

                <Producto key={item.id}
                    producto={item}
                    carrito={carrito}
                    agregarProducto={agregarProducto}
                />

            ))
            }

        </div>
    );


export default Carrito;