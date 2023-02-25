import React, { useState, useEffect } from "react";
import { creadores } from "../diccionarios/creadores";
import "../styles/creadores.css";

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
            return (
              <div key={indice}>
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
                
                <h3>APUNTES</h3>
                <ul>
                  {contenido.apuntes.map((apunte, indiceapunte) => {
                    return <li key={indiceapunte}>{apunte}</li>;
                  })}
                </ul>
                <h3>CONTACTO</h3>
                <ul>
                  {contenido.contacto.map((contacto, indicecontacto) => {
                    return <li key={indicecontacto}>{contacto}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
