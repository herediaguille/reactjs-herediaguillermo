//libreria
import { useState } from 'react'
//componentes 
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
//clases
//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting='Bienvenidos'/>
    </>
  )
}

export default App
