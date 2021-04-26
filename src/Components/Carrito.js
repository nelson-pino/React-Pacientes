import React from 'react'
import './carrito.css'
import Producto from './Producto'

const Carrito = ({carrito,AddProductCarrito}) => {
    console.log(carrito);
    return (
        <div className='carrito'>
            <h2>Carrito de Compra</h2>
            {carrito.length === 0
            ?<p>No hay elementos</p> 
            :carrito.map(producto => (
                <Producto
                    key = {producto.id}
                    producto={producto}
                    carrito={carrito}
                    AddProductCarrito={AddProductCarrito}
                />
            ))
            }    
        </div>
    );
}
 
export default Carrito;
