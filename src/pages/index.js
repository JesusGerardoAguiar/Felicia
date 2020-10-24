import React from "react"
import styled from "styled-components"
import FondoVerde from "../../content/assets/img/fondo-01.jpg"
import FeliciaLogo from "../../content/assets/icons/feliciablanco.svg"
import Layout from "../components/layout"
import TextContainer from "../components/TextContainer"
import Values from '../components/Values';
import Services from '../components/Services';
import { createGlobalStyle } from "styled-components"
import ImagenNosotros1 from "../../content/assets/img/imagenesredondas-01.png"
import ImagenNosotros6 from "../../content/assets/img/imagenesredondas-06.png"
import ImagenesRedondas5 from "../../content/assets/img/imagenesredondas-05.png"

import Scroll from 'react-scroll';
const Element = Scroll.Element;


const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: QuicksandR;
    src: url(${require("../../content/assets/fonts/Quicksand-Regular.ttf")});
  }
  @font-face {
    font-family: ArconRoundedR;
    src: url(${require("../../content/assets/fonts/Arcon-Rounded-Regular.otf")});
  }
`




const arrayTexts = [
  "Felicia nace como un sueño: revalorizar y jerarquizar el rol y los derechos de los adultos mayores en nuestra sociedad.",
  "No son solo pasibles de cuidados, son personas que sienten, sueñan, tienen historias, proyectos, angustias.",
  "El proyecto de Felicia es darles un espacio de soporte y las herramientas para que sean protagonistas de sus propias vidas.",
  "Somos un gran equipo con las capacidades técnicas y humanas para hacer de este sueño una realidad.",
  "Nuestros servicios incluyen estadías permanentes, temporales, diurnas y participación de actividades puntuales. También acogemos y estimulamos proyectos comunitarios que apunten a la inclusión.",
]

const arrayListFacilities = [
  "Amplio estar comedor panorámico.",
  "Habitaciones iluminadas con vistas al parque.",
  "Áreas específicas para actividades individuales y grupales.",
  "SUM (Salón de usos múltiples).",
  "Biblioteca y sala de juegos.",
  "Parque, terraza y parrillero.",
  "Sala de cine.",
 
  "Espacios de circulación interior/ exterior amplios seguros y accesibles."

]

const arrayListStay = [
  "Estadía Permanente: El residente se aloja por un período de tiempo determinado por diferentes motivos (estado post - operatorio, rehabilitación, convalecencia).",
  "Estadía Diurna: El residente concurre a la residencia sin alojamiento nocturno, con el fin de participar de los diferentes servicios que se brindan durante el día.",
  "Estadía Temporaria: El residente se aloja por un periodo determinado por vacaciones propias o de sus familiares, o por otras circunstancias. Los residentes pueden contar con plena autonomía o con necesidades de asistencia."
]

class Blog extends React.Component {
  render() {
    return (
      <Layout>
        <GlobalStyles />
        <BannerDiv backgroundImg={FondoVerde}>
          <img
            src={FeliciaLogo}
            style={{ width: "25rem", marginBottom: "4rem" }}
          />
        </BannerDiv>
        <Element  name="AboutUs">
          <TextContainer
            img={ImagenNosotros1}
            title={"Nosotros"}
            texts={arrayTexts}
          />
        </Element>
        <div id="Values">
          <Values />
        </div>
        <div id="Facilities">
          <TextContainer
            img={ImagenNosotros6}
            title={"Instalaciones"}
            list={arrayListFacilities}
          />
        </div>
        <div id="Services">
          <Services />
        </div>
        {/* <div id="Stay">
        <TextContainer
            img={ImagenesRedondas5}
            title={"Estadias"}
            list={arrayListStay}
            texts={["Al ingreso, nuestro equipo médico efectúa una entrevista donde se relevan las necesidades y preferencias del futuro residente, para determinar su perfil particular. En base a dicho perfil, se diseña una experiencia única y personalizada que combina el tipo de estadía con los servicios ofrecidos por nuestra residencia."]}
          />
        </div> */}
      </Layout>
    )
  }
}

const BannerDiv = styled.div`
  background-image: url(${props => props.backgroundImg});
  background-position: center center;
  background-repeat: no-repeat;
  height: 40rem;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "ArconRoundedR";
  color: white;

  h1 {
    font-family: "ArconRoundedR";
    width: 20rem;
    margin: 0;
    text-align: center;
    font-size: 36px;
  }

  @media (max-width: 768px) {
    background-size: cover;

    height: 20rem;
    img{
      width: 10rem!important;
      margin-bottom: 10px!important;
        }
    h1{
      font-size: 20px
    }
   }
`

export default Blog
