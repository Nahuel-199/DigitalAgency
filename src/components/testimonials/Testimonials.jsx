import React, { useContext } from 'react';
import { ThemeContext } from "../../context";
import { BsGoogle } from "react-icons/bs";
import { GoLightBulb } from "react-icons/go";
import { FiHeart } from "react-icons/fi";
import { RiUserHeartLine } from "react-icons/ri";
import { RxRocket } from "react-icons/rx";
import "./testimonials.css";

const Testimonials = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className="testimonial container section">
      <h2 style={{color: darkMode && "#fff"}} className="section__title">Porque nos eligen</h2>

      <div className="top-test">
        <div className="top-sec1">
          <div className="icon-container">
            <span>
              <BsGoogle className="icon" />
            </span>
          </div>
          <span>Somos Socios de Google:</span>
          <p>
            Esto quiere decir que Google nos reconoce como agencia experta y con
            experiencia en su plataforma publicitaria.
          </p>
        </div>

        <div className="top-sec1">
          <div className="icon-container">
            <span>
              <GoLightBulb className="icon" />
            </span>
          </div>
          <span>Experiencia:</span>
          <p>
            Más de 10 años trabajando en Marketing Digital, especialmente en
            Google. Hemos manejado más de 30 millones de dólares en medios
            digitales, en Argentina, Colombia, Brasil, India, etc.
          </p>
        </div>

        <div className="top-sec1">
          <div className="icon-container">
            <span>
              <FiHeart className="icon" />
            </span>
          </div>
          <span>Leads:</span>
          <p>
            Nos especializamos en Campañas de Performance, quiere decir que
            cuando activamos campañas tenemos el foco en generar leads
            (contactos, llamadas telefónicas, visitas a un local, etc).
          </p>
        </div>

        <div className="top-sec1">
          <div className="icon-container">
            <span>
              <RiUserHeartLine className="icon" />
            </span>
          </div>
          <span>Vocación de Servicio:</span>
          <p>
            Creamos vínculos con nuestros clientes y los asesoramos en temas que
            van más allá de Google, Redes Sociales o Email Marketing, porque
            queremos que les vaya bien y que progresen.
          </p>
        </div>

        <div className="top-sec1">
          <div className="icon-container">
            <span>
              <RxRocket className="icon" />
            </span>
          </div>
          <span>Nos adaptamos rápido:</span>
          <p>
            Tenemos clientes de varios rubros y en distintos países
            (Centroamérica, Argentina, India, México). Estudiamos cada empresa,
            sus servicios y su entorno, y nos ponemos a trabajar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
