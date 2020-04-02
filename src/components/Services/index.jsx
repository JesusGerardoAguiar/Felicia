import React from "react"
import { MainDiv, ValuesDiv, ValuesBox, TextDiv } from "./styles"
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
            <div
              style={{
                display: "flex",
                width: "40rem",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <p>
                -Estadías permanentes, diurnas y temporales (post-operatorios,
                rehabilitación, convalecencia, vacaciones).
                <br />
                -Atención médica diaria.
                <br />
                -Servicio de enfermería especializado.
                <br />
                -Fisioterapia y rehabilitación.
                <br />
                -Nurse coordinadora.
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
                -Tai Chi, Gimnasia y yoga.
                <br />
                -Reiki.
                <br />
                -Taller literario.
                <br />
                -Taller de avistamiento de aves.
                <br />
                -Taller de jardinería y huerta.
                <br />
                -Taller de arte y manualidades.
                <br />
                -Servicios estéticos.
                <br />
                -Talleres, charlas y eventos integrando usuarios y comunidad.
              </p>
            </div>
          </TextDiv>
        </ValuesBox>
        <ValuesBox>
          <img src={Manito} style={{ width: "7rem" }} />
          <TextDiv>
            <h3>Adicionales</h3>
            <div
              style={{
                display: "flex",
                width: "40rem",
                flexDirection: "row",
              }}
            >
              <p>
                -Traslados.
                <br />
                -Alquiler de ortopedia y artículos médicos.
                <br />
                -Pañales.
                <br />
              </p>
            </div>
          </TextDiv>
        </ValuesBox>
      </ValuesDiv>
    </MainDiv>
  )
}

export default Values
