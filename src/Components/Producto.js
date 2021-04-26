import React from 'react'

const Producto = ({producto, carrito, AddProductCarrito, productos, setProductos}) => {
    const {id, nombre, precio} = producto

    // agregar productos al carrito
    const SelectProducts = id =>{
        const producto = productos.filter(producto => producto.id === id)[0];
        AddProductCarrito([
            ...carrito,
            producto
        ]);
    }
    const EliminarProducto = id =>{
        const productDelete = carrito.filter(producto => producto.id !== id); 
        AddProductCarrito(productDelete);
    }

    return (  
        <div>
            <h2>{nombre}</h2>    
            <p>${precio}</p>
            {productos 
            ?
                (
                    <button 
                    onClick={() => SelectProducts(id)}
                    type="button">
                    Comprar</button> 
                )
            :
                (
                    <button onClick={() => EliminarProducto(id)} 
                    type="button">Eliminar</button> 
                )    
            }
        </div>
    );
}
 
export default Producto;
