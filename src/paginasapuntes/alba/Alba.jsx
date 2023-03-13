import React from "react";
import alba from "./alba.jpg";
import { Link } from "react-router-dom";

import "../../styles/subapuntes.css";

export const Alba = () => {
  return (
    <div className="subapuntes">
      <h1>SEGUNDO DE BACHILLERATO DE CIENCIAS</h1>
      <p>
        Estos son todos los apuntes de bachillerato y materiales para preparar
        la EBAU que utilizó Alba Pérez para obtener un 13,93 en esta prueba.
      </p>
      <Link className="documento" to="/estudiantestop/comprar">
        COMPRAR
      </Link>
      <a
        href="https://drive.google.com/drive/folders/1JIxF5HoxxsTFFm0fEiySubwJ-N3Pgmb2?usp=sharing"
        target="_blank"
        className="documento"
      >
        VER DOCUMENTOS
      </a>
      <div className="autor" style={{marginTop: '3rem'}}>
       <h3>POR:</h3><Link className="documento" to='/estudiantestop/creadores/AlbaPérez'>Alba Pérez</Link>
      </div>
      <div className="autor" style={{marginBottom: '2rem'}}>
         <h3>PRECIO:</h3><strong>30€</strong>
      </div>

      <h2>ESTRUCTURA</h2>
      <ol className="orderlist">
        <li>ESTÁNDARES DE HISTORIA</li>
        <li>LENGUA CASTELLANA</li>
        <li>FÍSICA</li>
        <li>QUÍMICA</li>
        <li>INLGÉS</li>
        <li>MATEMÁTICAS</li>
      </ol>
      
      <h2>VISTAPREVIA</h2>
      <img src={alba} alt="" />
    </div>
  );
};
