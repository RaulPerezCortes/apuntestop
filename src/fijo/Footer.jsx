import React from "react";
import "../styles/footer.css";
import gmail from './gmail.png'
import discord from './discord.png'
import tiktok from './tik-tok.png'
import instagram from './instagram.png'
const Footer = () => {
  return (
    <div className="footer">
      <p>
        Gracias por llegar hasta aquí, si quieres conocer más sobre nosotros puedes serguir viendo nuestra web o puedes visitar nuestras redes sociales. 
      </p>
      <h5>Con cariño ESTUDIANTESTOP ❤️</h5>
      <div className="fotos">
        <a href="mailto:estudiantestop.com@gmail.com" target='_blank'><img src={gmail} alt="" /></a>
        <a href="https://discord.gg/QWAzym2SS7" target='_blank'><img src={discord} alt="" /></a>
        <a href="https://www.tiktok.com/@estudiantestop" target='_blank'><img src={tiktok} alt="" /></a>
        <a href="https://www.instagram.com/estudiantestop/" target='_blank'><img src={instagram} alt="" /></a>
      </div>
    </div>
  );
};

export default Footer;
