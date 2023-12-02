//libreria
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react'
//componentes 
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import { CartContainer } from './components/CartContainer/CartContainer.jsx';
import { ItemDetailContainer } from './components/ItemDetailContaienr/ItemDetailContainer.jsx';
import { CartContextProvider } from './CartContext/CartContext.jsx';
//Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:cid' element={<ItemListContainer/>} />
          <Route path='/detail/:pid' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<CartContainer/>} />
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
