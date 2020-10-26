import React, { Fragment } from 'react';

const Producto = ({producto, carrito , agregarProducto,productos}) => {

    const {nombre, precio, id} = producto;
    
    const seleccionarProducto = (id, nombre) => {

        const prod = productos.find(item => item.id === id );
         agregarProducto([...carrito, prod]);
    }
    const eliminarProducto = (id) => {
        const items = carrito.filter(item => item.id !== id );
        agregarProducto(items);

    }
    
    return (
        <Fragment>           
            <h6>nombre  : {nombre}</h6>
            <h6>precio $: {precio}</h6>

                { productos
                 ?
                 <button type="button" onClick={()=> seleccionarProducto(id, nombre)}   >Comprar</button>
                 :
                 <button type="button" onClick={()=> eliminarProducto(id)}   >Eliminar</button>

                }

           
        </Fragment>

    );
}

export default Producto;