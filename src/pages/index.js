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
  "Un agradable ambiente, se aprecia el paisaje y el arte, hay risas y diversión. Experiencias que nos hacen sentir vivos. Nos imaginamos un cambio del rol del adulto mayor en nuestra sociedad. Nuestra inspiración es dignificar la vida.",
  "Buscamos cuidar a nuestros residentes y apoyar a sus familias para que se sientan queridos, valorados, respetados e integrados a nuestra sociedad.",
  "Nuestro equipo de trabajo reúne las capacidades humanas y técnicas necesarias para asegurar nuestra excelencia, brindando experiencias únicas de bienestar y comodidad.",
  "Nuestras opciones de servicios generales y de estimulación sensorial permiten adecuar cada estadía a las necesidades específicas de cada uno de nuestros residentes, asegurando una experiencia única y plena.",
]

const arrayListFacilities = [
  "Áreas específicas para actividades individuales y grupales.",
  "SUM.",
  "Espacios de circulación interior y exterior amplios, seguros y accesibles.",
  "Biblioteca.",
  "Sala de juegos.",
  "Estufa a leña.",
  "Parque enjardinado con terraza, mesas y sillas, parrillero.",
  "Entorno natural, tranquilo, privado.",

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
            style={{ width: "20rem", marginBottom: "4rem" }}
          />
          <h1>Centro, Durazno. Paisaje y arte.</h1>
        </BannerDiv>
        <div id="AboutUs">
          <TextContainer
            img={ImagenNosotros1}
            title={"Nosotros"}
            texts={arrayTexts}
          />
        </div>
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
        <div id="Stay">
        <TextContainer
            img={ImagenesRedondas5}
            title={"Instalaciones"}
            list={arrayListStay}
            texts={["Al ingreso, nuestro equipo médico efectúa una entrevista donde se relevan las necesidades y preferencias del futuro residente, para determinar su perfil particular. En base a dicho perfil, se diseña una experiencia única y personalizada que combina el tipo de estadía con los servicios ofrecidos por nuestra residencia."]}
          />
        </div>
      </Layout>
    )
  }
}

const BannerDiv = styled.div`
  background-image: url(${props => props.backgroundImg});
  background-position: center center;
  background-repeat: no-repeat;
  height: 37.555555555rem;
  background-size: contain;
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
