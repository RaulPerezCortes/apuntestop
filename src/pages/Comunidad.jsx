import React from "react";
import "../styles/paginas.css";
import discord from '../fijo/discord.png'

export const Comunidad = () => {
  return (
    <div className="paginas">
      <h1>COMUNIDAD</h1>
      <p>
        Una de las grandes ventajas que ofrecemos es nuestra comunidad, en la
        cual puedes compartir ideas, dudas u opiniones con personas que han
        adquirido los mismos materiales de estudio que tu, los creadores de los
        esos materiales o incluso con nosotros mismos, los creadores de
        ESTUDIANTESTOP.
      </p>
      <h2>NUESTRA COMUNIDAD</h2>
      <p>
        Para crear nuestra comunidad hemos decidido usar la aplicación Discord
        ya que creemos que es la apropiada para realizar todas las distintas
        ideas que tenemos en mente con respecto a la comunidad. Puedes unirte a
        nuestra comunidad de Discord a través del siguiente link:
        <p style={{margin: '1rem 0'}}>
        <a href="https://discord.gg/QWAzym2SS7" target='_blank'>
          https://discord.gg/QWAzym2SS7
        </a>
        
        </p><a href="https://discord.gg/QWAzym2SS7" target='_blank'>
        <img src={discord} alt="" style={{width: '200px'}}/>
        </a>
        
        
      </p>
      <h2>CARACTERÍSTICAS DE LA COMUNIDAD</h2>
      <p>
        En nuestra comunidad encontrarás una sección general, una sección para cada materia en concreto. Ej: química, informática, inglés... Además también se incluirá una sección no realacionado dónde se puede hablar de otros temas varios.
      </p>
      <h2>NORMAS DE LA COMUNIDAD</h2>
      <p>
        Si algún usario tiene un comportamiento inadecuado o utiliza la
        comunidad para actividades distintas a las que se plantean, a este
        usario se le podrá denegar el acceso a la comunidad.
      </p>
    </div>
  );
};
