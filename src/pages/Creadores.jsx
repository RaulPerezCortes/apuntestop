import React, { useState, useEffect } from "react";
import { creadores } from "../diccionarios/creadores";
import { apuntes } from "../diccionarios/apuntes";
import "../styles/creadores.css";
import { Link } from 'react-router-dom'

export const Creadores = () => {
  const [buscarCreadores, setBuscarCreadores] = useState("");
  const [especialidadCreadores, setEspecialidadCreadores] = useState("");
  const [buscar, setBuscar] = useState(creadores);


  useEffect(() => {
    let content = creadores.filter((cont) => {
      let comparar = cont.nombre
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      if (
        comparar.includes(buscarCreadores) &&
        (cont.especializades.includes(especialidadCreadores) ||
          especialidadCreadores == "")
      ) {
        return true;
      } else {
        return false;
      }
    });
    setBuscar(content);
  }, [buscarCreadores, especialidadCreadores]);

  return (
    <div className="creadores">
      <h1 className="titulo">CREADORES</h1>
      <div className="buscarcreadores">
        <input
          type="text"
          placeholder="buscar creadores"
          onChange={(e) => {
            setBuscarCreadores(
              e.target.value
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            );
          }}
        />
        <select
          name="especial"
          id=""
          onChange={(e) => {
            setEspecialidadCreadores(e.target.value);
          }}
        >
          <option value="" selected>
            TODOS
          </option>
          <option value="química">QUÍMICA</option>
          <option value="informática">INFORMÁTICA</option>
          <option value="organización">ORGANIZACIÓN</option>
        </select>
      </div>

      {buscar.length == 0 ? (
        <h6 className="noresult">NO SE HAN ENCONTRADO RESULTADOS</h6>
      ) : (
        <div className="listarcreadores">
          {buscar.map((contenido, indice) => {
            
            let hayapuntes = 0

            return (
              <div key={indice} className='creadorlistado'>
                <img src={contenido.foto} alt="" />
                <h1>{contenido.nombre}</h1>
                <p>{contenido.descripción}</p>
                <h3>ESPECIALIDADES</h3>
                <ul>
                  {contenido.especializades.map(
                    (especialidad, indiceespecialidad) => {
                      return <li className="capitalize" key={indiceespecialidad}>{especialidad}</li>;
                    }
                  )}
                </ul>
                {apuntes.map((apunte, indice)=>{
                    if(apunte.autor == contenido.nombre && hayapuntes == 0){
                      hayapuntes += 1
                        return <h3 key={indice}>APUNTES</h3>
                      }
                  })}
                <main className="apuntescreador">
              
                  {apuntes.map((apunte, indice)=>{

                    if(apunte.autor == contenido.nombre){
                      return <>
                      <Link key={indice} className="link" to={apunte.vermas}>{apunte.nombre}</Link>
                      </>}
                  })}
                
                </main>
                
                <Link className="link azul" to={contenido.vermas}>VER MÁS INFO</Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
