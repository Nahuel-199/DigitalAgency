import React, { useContext } from 'react';
import "./App.css";
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Ejemplos from './components/ejemplos/Ejemplos';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Parallax from './components/parallax/Parallax';
import Planes from './components/planes/Planes';
import Portfolio from './components/portfolio/Portfolio';
import ScrollUp from './components/scrollup/ScrollUp';
import CardTestimonials from './components/testimonials/CardTestimonials';
import Testimonials from './components/testimonials/Testimonials';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
    style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}
    >
    <Toggle />
    <Header />
    <main className='main'>
    <Home />
    <About />
    <Parallax />
    <Portfolio />
    <Ejemplos />
    <Testimonials />
    <CardTestimonials />
    <Planes />
    <Contact />
    </main>

    <Footer />
    <ScrollUp />
    </div>
  );
}

export default App;
