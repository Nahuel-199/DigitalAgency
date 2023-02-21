import React, { useContext } from 'react';
import { ThemeContext } from "../../context";
import mq from "../../assets/mq.png"
import "./about.css";
import Info from './Info';

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className="about section" id="about">
        <h2  style={{color: darkMode && "#fff"}} className="section__title">
          Utilizá las redes mas importantes y nuestro ingenio para llegar a nuevos clientes</h2>
        <span className="section__subtitle">  
        Google, Facebook, Intagram, Linkedin,
         Email Marketing</span>
        <div className="about__container container grid">
           <img src={mq} alt="about" className="about__img" />
           <div className="about__data">
               <Info />
               <p className="about__description">
               Nos especializamos en Campañas de Performance, quiere decir que cuando activamos 
               campañas tenemos el foco en generar leads (contactos, llamadas telefónicas, visitas a un local, etc).
               Creamos vínculos con nuestros clientes y los asesoramos en temas que van más allá de Google, Redes Sociales 
               o Email Marketing, porque queremos que les vaya bien y que progresen.
               </p>
           </div>
        </div>
    </section>
  )
}

export default About