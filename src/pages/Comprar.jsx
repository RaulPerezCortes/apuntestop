import React from "react";
import "../styles/paginas.css";
import "../styles/paginas.css";
import tranferencia from './transferencia-movil.png'
import bizum from './bizum-2.jpg'

export const Comprar = () => {
  return (
    <div className="paginas">
      <h1>REALIZA TU COMPRA</h1>
      <h2>AQUÍ VA UN VIDEO EXPLICATIVO</h2>
      <h2>MÉTODOS DE PAGO</h2>
      <ul className="pago">
        <li><img src={tranferencia} alt="" /><p>TRANFERENCIA BANCARIA al: <p></p></p></li>
        <li><img src={bizum} alt="" /><p>BIZUM al: <p>638 91 89 07</p></p></li>


      </ul>
      <h2>CÓMO REALIZAR LA COMPRA</h2>
      <p>
        Una vez elegido el contenido que se desea aquirir y el metodo de pago
        con el que se desea realizar la compra, se deberá hacer un ingreso con
        un importe igual al precio del apunte deseado. Además al realizar el
        pago se deberá incluir el título del apunte, el autor de éste, el correo
        electrónico con el que se desea acceder al documento y en caso de haber
        conocido el material por un afiliado se debe incluir el nombre de
        este.
        Una vez realizada la transacción se deberá acceder al documento y solicitar acceso a este.
        Una vez realizada la compra se le concederá acceso al documento lo antes posible.
        Al realizar la compra se acepta nuestra política y funcionamiento.
      </p>
      <h2>¿QUÉ DEBO HACER SI HA HABIDO ALGÚN PROBLEMA AL REALIZAR EL PAGO?</h2>
      <p>Si el importe realizado es menor al precio del apunte se devolverá el pago. Si el importe es mayor al precio del apunte, se le devolverá sólo el dinero sobrante. Si el error se encuentra en la información otorgada al realizar el pago, usted deverá ponerse en contacto con nosotros dando la información correcta.</p>
    </div>
  );
};
