import React from "react";
import alba from './alba.jpg'

import  '../../styles/subapuntes.css'


export const Alba = () => {
  return (
    <div className="subapuntes">
      <h1>PRIMERO DE QUÍMICA EN UBU</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In officia vel
        ut earum esse nesciunt fugiat enim excepturi voluptatem recusandae,
        ullam, illum omnis voluptatum veniam ad a deleniti eius sed.
      </p>
      <a href="https://onedrive.live.com/edit.aspx?resid=C7CAF22FBBD09F50!17380" target='bla
      ' className="documento">ver documento</a>
      <a href="" target='_blank'>https://onedrive.live.com/edit.aspx?resid=C7CAF22FBBD09F50!17380</a>
      <h3>por: <strong>alba perez</strong></h3>
      <h3>precio: <strong>100€</strong></h3>
      
      <h2>ESTRUCTURA</h2>
      <img src={alba} alt="" /> 
      <h2>VISTAPREVIA</h2>
    </div>
  );
};
