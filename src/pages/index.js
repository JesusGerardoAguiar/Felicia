import React from "react"
import styled from "styled-components"
import FondoVerde from "../../content/assets/img/fondo-01.jpg"
import FeliciaLogo from "../../content/assets/icons/feliciablanco.svg"
import Layout from "../components/layout"
import TextContainer from "../components/TextContainer"
import Values from '../components/Values';
import { createGlobalStyle } from "styled-components"
import ImagenNosotros1 from "../../content/assets/img/imagenesredondas-01.png"
import ImagenNosotros6 from "../../content/assets/img/imagenesredondas-06.png"


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
`

export default Blog
