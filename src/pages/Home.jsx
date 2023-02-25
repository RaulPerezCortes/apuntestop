import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";


export const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>NUESTRO VANER PRINCIPAL</h1>
        <div>
          <img src="gig.phy.png" alt="" />
        </div>
      </div>
      <section>
        <h2>APUNTES</h2>
        <p className="ajustar">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
          pariatur deserunt enim doloremque atque labore, fugiat eligendi eum
          repellendus aut earum voluptates quas harum neque obcaecati
          consequatur expedita voluptatem iusto.
        </p>
        <Link className="botonhome" to="/apuntes">
          VER APUNTES
        </Link>
      </section>
      <section>
        <h2>CREADORES</h2>
        <p className="ajustar">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
          pariatur deserunt enim doloremque atque labore, fugiat eligendi eum
          repellendus aut earum voluptates quas harum neque obcaecati
          consequatur expedita voluptatem iusto.
        </p>
        <Link className="botonhome" to="/creadores">
          VER CREADORES
        </Link>
      </section>
      <section>
        <h2>COMPRAR</h2>
        <p className="ajustar">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
          pariatur deserunt enim doloremque atque labore, fugiat eligendi eum
          repellendus aut earum voluptates quas harum neque obcaecati
          consequatur expedita voluptatem iusto.
        </p>
        <Link className="botonhome" to="/comprar">
          COMPRAR
        </Link>
      </section>
      <section>
        <h2>COMUNIDAD</h2>
        <p className="ajustar">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
          pariatur deserunt enim doloremque atque labore, fugiat eligendi eum
          repellendus aut earum voluptates quas harum neque obcaecati
          consequatur expedita voluptatem iusto.
        </p>
        <Link className="botonhome" to="/comunidad">
          VER COMUNIDAD
        </Link>
      </section>
      <section>
        <h2>TRABAJA CON NOSOTROS</h2>
        <div className="trabajar">
          <div>
            <h3>SER CREADOR</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              maiores optio, libero quisquam esse quam molestiae id omnis
              pariatur culpa magnam, aspernatur voluptas vero obcaecati
              voluptatibus deleniti dicta ut voluptatem.
            </p>
            <Link className="botonhome" to="/sercreador">SER CREADOR</Link>
          </div>
          <div>
            <h3>SER AFILIADO</h3>
            <p >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              error eos accusamus maxime delectus fugit nisi recusandae
              accusantium exercitationem magnam molestias rem maiores asperiores
              ipsum distinctio, aliquid natus sed sint?
            </p>
            <Link className="botonhome" to="/serafiliado">SER AFILIADO</Link>
          </div>
        </div>
      </section>
      <section className="contacto" >
        <h2>CONTACTO</h2>
        <p className="ajustar">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
          pariatur deserunt enim doloremque atque labore, fugiat eligendi eum
          repellendus aut earum voluptates quas harum neque obcaecati
          consequatur expedita voluptatem iusto.
        </p>
        <Link className="botonhome" to="/contacto">CONTACTANOS</Link>
      </section>
    </div>
  );
};
