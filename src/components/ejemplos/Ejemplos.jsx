import React from 'react'
import { useContext } from "react";
import { ThemeContext } from "../../context";
import ejemplos from "../../assets/ejemplos.png"
import "./ejemplos.css"

const Ejemplos = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  
    return (
      <section className="work container section" id="proyectos">
        <h2 style={{ color: darkMode && "#fff" }} className="section__title">
        Ejemplos Social Media
        </h2>
        <span className="section__subtitle">Redes sociales / Instagram Historias</span>
          <div>
            <img src={ejemplos} alt="" />
          </div>
      </section>
    );
  };
export default Ejemplos