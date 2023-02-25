import React from "react";
import '../styles/paginas.css'
import {Link} from 'react-router-dom'


export const Trabajaconnostros = () => {
  return (
    <div className="paginas">
    
      <h1>TRABAJA CON NOSOTROS</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem maxime
        corporis rem eaque, sit, modi harum quaerat alias voluptas ullam saepe
        quisquam qui tempora in quasi officia delectus beatae asperiores!
      </p>
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
    </div>
  );
};
