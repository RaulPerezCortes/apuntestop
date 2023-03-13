import React from "react";
import "../styles/paginas.css";
import { Link } from "react-router-dom";

export const Trabajaconnostros = () => {
  return (
    <div className="paginas">
      <h1>TRABAJA CON NOSOTROS</h1>
      <p>
        ESTUDIANTESTOP no sería nada sin personas externas que quieran trabajar
        con nosotros. Ofrecemos dos formas de poder trabajar con nosotros.
        Siendo creador y siendo afiliado, para poder llegar a ser alguna de
        ellas o ambas vas a necesitar conocer toda la información relacionada
        con cada una.
      </p>
      <section>
        <h2>TRABAJA CON NOSOTROS</h2>
        <div className="trabajar">
          <div>
            <h3>SER CREADOR</h3>
            <p>
              Si deseas que tus apuntes estén disponibles y poder obtener un
              beneficio con ellos, vas a necesitar conocer que requisitos son
              necesarios para emprezar a ser creador, las condiciones de los
              creadores y como se lleva a cabo este proceso.
            </p>
            <Link className="botonhome" to="/estudiantestop/sercreador">
              SER CREADOR
            </Link>
          </div>
          <div>
            <h3>SER AFILIADO</h3>
            <p>
              Siendo afiliado puedes llegar a cobrar una comisión cada vez que
              un comprardor te mencione al adquirir uno de nuestros productos.
              Para empezar a rezlizar dicha actividad necesitarás conocer toda
              la información con respecto a ella.
            </p>
            <Link className="botonhome" to="/estudiantestop/serafiliado">
              SER AFILIADO
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
