import React from "react"
import { MainDiv, ValuesDiv, ValuesBox, TextDiv, TextCon } from "./styles"
import Medico from "../../../content/assets/icons/medico.svg"
import Manito from "../../../content/assets/icons/manito.svg"
import PersonaCerebro from "../../../content/assets/icons/personacerebro.svg"
import Ambulancia from "../../../content/assets/icons/ambulancia.svg"

const Values = () => {
  return (
    <MainDiv>
      <h1>Servicios</h1>
      <ValuesDiv>
        <ValuesBox>
          <img src={PersonaCerebro} style={{ width: "7rem" }} />
          <TextDiv>
            <TextCon>
              <p>
                -Estadías permanentes, diurnas y temporales (post-operatorios,
                rehabilitación, convalecencia, vacaciones).
                <br />
                -Atención médica diaria.
                <br />
                -Fisioterapia y rehabilitación.
                <br />
                -Nutricionista.
                <br />
                -Psicólogo.
                <br />
                -Estimulación cognitiva y motora.
                <br />
                -Fisioterapia y rehabilitación.
                <br />
              </p>
              <p>
                -Musicoterapia.
                <br />
                -Menú saludable personalizado elaborado en el día a cargo de
                nuestro Chef.
                <br />
                -Gimnasia.
                <br />
                -Reiki.
                <br />
                -Taller literario.
                <br />
                -Taller de arte y manualidades.
                <br />
                -Talle de Teatro.
                <br />
                -Meditación y Respiración.
                <br />
                -Servicios estéticos.
                <br />
                -Talleres, charlas y eventos integrando usuarios y comunidad.
              </p>
            </TextCon>
          </TextDiv>
        </ValuesBox>
      </ValuesDiv>
    </MainDiv>
  )
}

export default Values
