import React, {Fragment} from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header
        titulo='Mi Tienda Virtual mercaweb'
      />
      <Footer fecha={fecha}/>
    </Fragment>
  );
}

export default App;
