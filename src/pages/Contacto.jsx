import React from "react";
import gmail from "../fijo/gmail.png";
import instagram from "../fijo/instagram.png";
import telefono from "./telefono.png";

import "../styles/contacto.css";

export const Contacto = () => {
  return (
    <div className="paginas">
      <h1>CONTACTANOS</h1>
      <h2>PARA QUE PUEDES CONTACTARNOS</h2>
      <p>
        Nos puedes llegar a contactar con cualquier tipo de propósito, pero
        seguramente únicamente obtengas una respuesta si nos contactas para
        empezar a ser creador, afiliado, has tenido algún problema con los
        servicios que ofrecemos o has tenido algún otro problema, por ejemplo
        relacionado con el pago.
      </p>
      <h2>¿CÓMO NOS PUEDES CONTACTAR?</h2>
      <p>
        Nos puedes llegar a contactar de las siguiente formas:
        <ul className="contact">
          <div>
          <li>
            <a href="https://www.instagram.com/estudiantestop/" target="_blank">
              <img src={instagram} alt="" />
              <p>@estudiantestop</p>
            </a>
          </li>
          <li>
            <a href="mailto:estudiantestop.com@gmail.com" target="_blank">
              <img src={gmail} alt="" />
              <p>estudiantestop.com@gmail.com</p>
            </a>
          </li>
          <li>
            <a href="https://wa.me/+34638918907" target="_blank">
              <img src={telefono} alt="" />
              <p>638 91 89 07</p>
            </a>
          </li>
          </div>
        </ul>
      </p>
    </div>
  );
};
