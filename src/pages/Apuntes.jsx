import React, { useState, useEffect } from "react";
import { apuntes } from "../diccionarios/apuntes";
import { creadores } from "../diccionarios/creadores";
import { Link } from "react-router-dom";
import '../styles/apuntes.css'

export const Apuntes = () => {
  const [buscar, setBuscar] = useState(apuntes);
  const [buscador, setBuscador] = useState("");
  const [materias, setMaterias] = useState("");
  const [instituciones, setInstituciones] = useState("");

  useEffect(() => {
    let content = apuntes.filter((cont) => {
      let comparar = cont.nombre
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      if (
        comparar.includes(buscador) &&
        (cont.materia.includes(materias) || materias == "") &&
        (cont.dirigido.includes(instituciones) || instituciones == "")
      ) {
        return true;
      } else {
        return false;
      }
    });
    setBuscar(content);
  }, [buscador, materias, instituciones]);

  return (
    <div>
      <h1 className="titulo">APUNTES</h1>
      <div className="elegir">
      <input
        type="text"
        onChange={(e) =>
          setBuscador(
            e.target.value
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          )
        }
        placeholder="buscar apuntes"
      />
      <select name="materias" id="" onChange={(e) => setMaterias(e.target.value)}>
        <option value="">TODAS LAS MATERIAS</option>
        <option value="química">QUÍMICA</option>
        <option value="matemáticas">MATEMÁTICAS</option>
      </select>
      <select name="instituciones" id="" onChange={(e) => setInstituciones(e.target.value)}>
        <option value="">TODAS LAS INSTITUCIONES</option>
        <option value="instituto">INSTITUTO</option>
        <option value="universidad">UNIVERSIDAD</option>
        <option value="oposiciones">OPOSICIONES</option>
      </select>
      </div>
      {buscar.length == 0 ? (
        <h1 className="no">NO SE HAN ENCONTRADO RESULTADOS</h1>
      ) : (
        <div className="apuntes">
          {buscar.map((contenido, indice) => {
            return (
              <div className="apunte" key={indice}>
                <h1>{contenido.nombre}</h1>

                <div className="autorapunte">
                  {creadores.map((creador, indicecreador)=>{
                    if(contenido.autor == creador.nombre){
                      return <>
                        <p>Por:</p>
                        <Link className="link" to={creador.vermas}>{creador.nombre}</Link>
                      </>
                    }
                  })}
                </div>
                <div><p>PRECIO: </p><strong>{contenido.precio}</strong></div>
                <h3 className="materia">MATERIA</h3>
                <ul>
                  {contenido.materia.map((materia, indicemateria) => {
                    return <li key={indicemateria}>{materia}</li>;
                  })}
                </ul>
                <h3>DIRIGIDO A:</h3>
                <ul>
                  {contenido.dirigido.map((dirigido, indicedirigido) => {
                    return <li key={indicedirigido}>{dirigido}</li>;
                  })}
                </ul>
                <div className="links">
                <Link className="link azul" to='/estudiantestop/comprar'>COMPRAR</Link>
                <Link className="link azul" to={contenido.vermas}>VER MÁS INFO</Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
