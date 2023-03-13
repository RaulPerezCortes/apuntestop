import React from 'react'
import { creadores } from "../diccionarios/creadores";
import { apuntes } from "../diccionarios/apuntes";
import { Link } from 'react-router-dom';
import '../styles/paginascreadores.css'

export const AlbaPerez = () => {
  return (
    <div className='creador'>
        <h1>Alba Pérez Cortés</h1>
        <div className='listarcontenido'>
          {creadores.map((contenido, indice) => {
            
            let hayapuntes = 0

            return (
              <div key={indice}>
                
                {apuntes.map((apunte, indice)=>{
                    if(apunte.autor == contenido.nombre && hayapuntes == 0){
                      hayapuntes += 1
                        return <h3 key={indice}>APUNTES</h3>
                      }
                  })}
                
                <div className='pagcreadorapuntes'>
                  {apuntes.map((apunte, indice)=>{

                    if(apunte.autor == contenido.nombre){
                      return <>
                      <Link key={indice} className='link' to={apunte.vermas}>{apunte.nombre}</Link>
                      </>}
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <h2>CONTACTO</h2>
    </div>
  )
}
