import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../styles/encabezado.css'

export const Encabezado = () => {
  const [encabezado, setEncabezado] = useState(false)

  return (
    <div className='encabezado'>
      <div className='divlogo'>
        <Link className='logo' to='/home'>LOGO DE LA APP</Link>
        <button className='mostrarnav' onClick={()=>setEncabezado(!encabezado)} >{encabezado ? '✖️ ' : '🟰'}</button>
        </div>
        <div className={encabezado ? 'divboton mostrar': 'divboton'}>
            <Link className='botonheader' to='/apuntes'>APUNTES <strong className='carrito'>📒</strong></Link>
            <Link className='botonheader' to='/creadores'>CREADORES</Link>
            <Link className='botonheader' to='/comprar'>COMPRAR <strong className='carrito'>🛒</strong></Link>
            <Link className='botonheader' to='/comunidad'>COMUNIDAD</Link>
            <Link className='botonheader' to='/trabajaconnosotros'>TRABAJA CON NOSOTROS</Link>
            <Link className='botonheader' to='/contacto'>CONTACTO</Link>
            
        </div>
    </div>
  )
}

