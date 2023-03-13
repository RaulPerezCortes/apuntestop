import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../styles/encabezado.css'
import estudiantestop from './estudiantestop.png'
import close from './close.png'
import menu from './menu.png'

export const Encabezado = () => {
  const [encabezado, setEncabezado] = useState(false)

  return (
    <div className='encabezado'>
      <div className='divlogo'>
        <Link className='logo' to='/estudiantestop/'><img src={estudiantestop} alt="" /></Link>
        <button className='mostrarnav' onClick={()=>setEncabezado(!encabezado)} ><img src={!encabezado ? menu : close} alt="" /> </button>
        </div>
        <div className={encabezado ? 'divboton mostrar': 'divboton'}>
            <Link className='botonheader' to='/estudiantestop/apuntes/'>APUNTES <strong className='carrito'>📒</strong></Link>
            <Link className='botonheader' to='/estudiantestop/creadores/'>CREADORES</Link>
            <Link className='botonheader' to='/estudiantestop/comprar/'>COMPRAR <strong className='carrito'>🛒</strong></Link>
            <Link className='botonheader' to='/estudiantestop/comunidad/'>COMUNIDAD</Link>
            <Link className='botonheader' to='/estudiantestop/trabajaconnosotros/'>TRABAJA CON NOSOTROS</Link>
            <Link className='botonheader' to='/estudiantestop/contacto/'>CONTACTO</Link>
            
        </div>
    </div>
  )
}

