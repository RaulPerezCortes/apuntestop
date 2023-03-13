
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
import { Politica } from './pages/Politica'
import {Page404} from './pages/Page404'

import {Encabezado} from './fijo/Encabezado'
import Footer from './fijo/Footer'


import {Alba} from './paginasapuntes/alba/Alba'


import  {AlbaPerez} from './paginascreadores/AlbaPerez'


import './App.css'


function App() {

  return (
    
    <BrowserRouter >
    
    <Encabezado/>

    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/estudiantestop' element={<Home/>}></Route>
    <Route path='/estudiantestop/apuntes/' element={<Apuntes/>}></Route>
    <Route path='/estudiantestop/creadores/' element={<Creadores/>}></Route>
    <Route path='/estudiantestop/comprar/' element={<Comprar/>}></Route>
    <Route path='/estudiantestop/serafiliado/' element={<SerAfiliado/>}></Route>
    <Route path='/estudiantestop/trabajaconnosotros/' element={<Trabajaconnostros/>}></Route>
    <Route path='/estudiantestop/comunidad/' element={<Comunidad/>}></Route>
    <Route path='/estudiantestop/sercreador/' element={<SerCreador/>}></Route>
    <Route path='/estudiantestop/contacto/' element={<Contacto/>}></Route>
    <Route path='/estudiantestop/politica' element={<Politica/>}></Route>
    <Route path='*' element={<Page404/>}></Route>

    <Route path='/estudiantestop/apuntes/alba/' element={<Alba/>}></Route>

    <Route path='/estudiantestop/creadores/AlbaPérez/' element={<AlbaPerez/>}></Route>
    
    
    </Routes>

    <Footer/>

    </BrowserRouter>
    
  )
}

export default App
