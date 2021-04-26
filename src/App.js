 import React, {Fragment,useState} from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Producto from './Components/Producto'
import Carrito from './Components/Carrito'

function App() {

  // Crear un Listado de Producto.
  const [productos,setProductos] = useState([
    {id:1, nombre:'Camisa ReactJS', precio:50},
    {id:2, nombre:'Camisa VueJS', precio:40},
    {id:3, nombre:'Camisa NodeJS', precio:30},
    {id:4, nombre:'Camisa Angular', precio:20}
  ]);
  // Crear un carrito de Compras.
  const[carrito,AddProductCarrito] = useState([]);

  // Calcular la fecha de la Pagina.
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header
        titulo='Mi Tienda Virtual'
      />
      {productos.map(producto =>(
          <Producto
              key = {producto.id}
              producto={producto}
              productos={productos}
              carrito={carrito}
              AddProductCarrito={AddProductCarrito}
              setProductos={setProductos}
          />
      ))}
      <Carrito
        carrito={carrito}
        AddProductCarrito={AddProductCarrito}
      />
      <Footer fecha={fecha}/>
    </Fragment>
  );
}

export default App;
