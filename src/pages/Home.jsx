import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import estudiantestop from "./estudiantestop.png";

export const Home = () => {
  return (
    <div className="home">
      <div className="vaner">
        <img src={estudiantestop} alt="" />
        <div className="video">
          <h1>AQUÍ VA UN VIDEO</h1>
          <Link className="botonhome" to="/estudiantestop/politica">
          VER NUESTRA POLÍTICA Y FUNCIONAMIENTO
        </Link>
        </div>
      </div>
      <section>
        <h2>APUNTES</h2>
        <p className="ajustar">
          Nosotros nos basamos en los apuntes y materiales de estudio de los
          mejores estudiantes y profesionales para posteriormente crear un
          ecosistema alrededor de ellos. Puedes ver nuestra sección de apuntes
          y ver cuales son los que te interesan y posteriormente puedas adquirirlos y tener acceso a ellos.
        </p>
        <Link className="botonhome" to="/estudiantestop/apuntes">
          VER APUNTES
        </Link>
      </section>
      <section>
        <h2>CREADORES</h2>
        <p className="ajustar">
          Los autores de los apuntes son personas con unas grandes cualidades.
          En nuestra sección de creadores puedes ver todos los autores con los
          que trabajamos, una descripción sobre ellos, cual es su especialidad y
          los materiales de estudio que tienen disponibles.
        </p>
        <Link className="botonhome" to="/estudiantestop/creadores">
          VER CREADORES
        </Link>
      </section>
      <section>
        <h2>COMPRAR</h2>
        <p className="ajustar">
          Una vez ya has decidio que material de estudio o apunte deseas aquirir
          es hora de comprarlo. Conoce como se debe realizar la
          compra para poder tener acceso a él.
        </p>
        <Link className="botonhome" to="/estudiantestop/comprar">
          COMPRAR
        </Link>
      </section>
      <section>
        <h2>COMUNIDAD</h2>
        <p className="ajustar">
          Una de las grandes ventajas que ofrecemos es nuestra Comunidad, en la
          que puedes compartir ideas, dudas y opiniones con personas que han
          adquirido los mismos materiales de estudio que tú, los creadores de
          los materiales o incluso con nosotros mismos, los creadores de
          ESTUDIANTESTOP.
        </p>
        <Link className="botonhome" to="/estudiantestop/comunidad">
          VER COMUNIDAD
        </Link>
      </section>
      <section>
        <h2>TRABAJA CON NOSOTROS</h2>
        <div className="trabajar">
          <div>
            <h3>SER CREADOR</h3>
            <p>
              Si deseas que tus apuntes estén disponibles y poder obtener un
              beneficio con ellos, vas a necesitar conocer qué requisitos son
              necesarios para empezar a ser creador, las condiciones de los
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
              Para empezar a realizar dicha actividad necesitarás conocer toda
              la información con respecto a ella.
            </p>
            <Link className="botonhome" to="/estudiantestop/serafiliado">
              SER AFILIADO
            </Link>
          </div>
        </div>
      </section>
      <section className="contacto" style={{ border: "none" }}>
        <h2>CONTACTO</h2>
        <p className="ajustar">
          En nuestra sección de contacto vas a poder conocer para qué puedes
          contactar y cómo puedes llegar a hacerlo. Además, puedes encontrar
          nuestras redes sociales en el pie de página.
        </p>
        <Link className="botonhome" to="/estudiantestop/contacto">
          CONTACTANOS
        </Link>
      </section>
    </div>
  );
};
