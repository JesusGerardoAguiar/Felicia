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
          <img src={Medico} style={{ width: "7rem" }} />
          <TextDiv>
            <h3>Médicos</h3>
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
            </p>
          </TextDiv>
        </ValuesBox>
        <ValuesBox>
          <img src={Manito} style={{ width: "7rem" }} />
          <TextDiv>
            <h3>Generales</h3>
            <p>
              -Coordinación de comidas y eventos para los residentes y sus
              familiares en el SUM.
              <br />
              -Coordinación de servicios estéticos (peluquería, podología,
              manicura, maquillaje).
              <br />
              -Organización de talleres, charlas y eventos para la integración
              del residente y su comunidad. <br />
              -Coordinación de juegos y entretenimientos.
              <br />
              -Servicio de lavandería.
              <br />
              -Servicio de WIFI en toda la residencia.
              <br /> -Sala de cine
            </p>
          </TextDiv>
        </ValuesBox>
      </ValuesDiv>
      <ValuesDiv>
        <ValuesBox>
          <img src={PersonaCerebro} style={{ width: "7rem" }} />
          <TextDiv>
            <h3>Estimulación sensorial</h3>
            <p>
              -Tai Chi o Gimnasia bioenergética, Reiki o Yoga o Biodanza.
              <br />
              -Taller de lectura. <br />
              -Escritura.
              <br />
              -Taller de avistamiento de aves.
              <br />
              -Taller de astronomía.
              <br />
              -Taller de botánica.
              <br />
              -Taller de jardinería y huerta.
              <br />
            </p>
          </TextDiv>
        </ValuesBox>
        <ValuesBox>
          <img src={Ambulancia} style={{ width: "7rem" }} />
          <TextDiv>
            <h3>Adicionales</h3>
            <p>
              -Traslados.
              <br />
              -Alquiler de ortopedia y artículos médicos.
              <br />
              -Pañales.
              <br />
            </p>
          </TextDiv>
        </ValuesBox>
      </ValuesDiv>
    </MainDiv>
  )
}

export default Values
