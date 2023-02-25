import { useState } from 'react'
import {BrowserRouter, Route,Routes } from 'react-router-dom'
import {Home} from './pages/Home'
import {Apuntes} from './pages/Apuntes'
import {Comprar} from './pages/Comprar'
import {Creadores} from './pages/Creadores'
import {Comunidad} from './pages/Comunidad'
import {SerAfiliado} from './pages/SerAfiliado'
import {SerCreador} from './pages/SerCreador'
import {Trabajaconnostros} from './pages/Trabajaconnostros'
import { Contacto } from './pages/Contacto'
import {Page404} from './pages/Page404'

import {Encabezado} from './fijo/Encabezado'
import Footer from './fijo/Footer'


import {Alba} from './paginasapuntes/alba/Alba'


import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter >
    
    <Encabezado/>

    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/apuntes/' element={<Apuntes/>}></Route>
    <Route path='/creadores' element={<Creadores/>}></Route>
    <Route path='/comprar' element={<Comprar/>}></Route>
    <Route path='/serafiliado' element={<SerAfiliado/>}></Route>
    <Route path='/trabajaconnosotros' element={<Trabajaconnostros/>}></Route>
    <Route path='/comunidad' element={<Comunidad/>}></Route>
    <Route path='/sercreador' element={<SerCreador/>}></Route>
    <Route path='/contacto' element={<Contacto/>}></Route>
    <Route path='*' element={<Page404/>}></Route>
    <Route path='apuntes/alba' element={<Alba/>}></Route>
    
    </Routes>

    <Footer/>

    </BrowserRouter>
    
  )
}

export default App
