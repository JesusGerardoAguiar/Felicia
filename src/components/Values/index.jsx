import React from 'react';
import { MainDiv, ValuesDiv, ValuesBox } from './styles';
import Musica from "../../../content/assets/icons/musicaconhojas.svg"
import PazPersona from "../../../content/assets/icons/pazpersona.svg"
import PiedrasZen from "../../../content/assets/icons/piedras.svg"
import WorkUnido from "../../../content/assets/icons/workunido.svg"
import Abuelos from "../../../content/assets/icons/abuelos.svg"

const Values = () => {
    return (
        <MainDiv>
          <h1>NUESTROS VALORES</h1>
          <ValuesDiv>
            <ValuesBox>
              <img src={Musica} style={{ width: '10rem' }} />
              <h3>Dignificar la vida:</h3>
              <p>Hacer que cada día de vida de cada persona tenga sentido y valga la pena ser vivido.</p>
            </ValuesBox>
            <ValuesBox>
              <img src={PazPersona} style={{ width: '10rem' }} />
              <h3>Paz interior:</h3>
              <p>Estar bien con uno mismo y con los demás, respetándonos a nosotros mismos y a los demás.</p>
            </ValuesBox>
            <ValuesBox>
              <img src={PiedrasZen} style={{ width: '10rem' }} />
              <h3>Paz en el trabajo:</h3>
              <p>Armonía, amabilidad: trabajar en equipo con espíritu colaborador, buena comunicación.</p>
            </ValuesBox>
            <ValuesBox>
              <img src={WorkUnido} style={{ width: '10rem' }} />
              <h3>Responsabilidad, <br />profesionalismo,<br /> compromiso:</h3>
              <p>Cumplir nuestro trabajo basados en criterios profesionales y científicos. Trascender, dejar huellas.</p>
            </ValuesBox>
            <ValuesBox>
              <img src={Abuelos} style={{ width: '10rem' }} />
              <h3>Inclusión:</h3>
              <p>Adulto mayor en la sociedad con herramientas creativas. Cuidado de la salud psico – física e intelectual.</p>
            </ValuesBox>
          </ValuesDiv>
        </MainDiv>
    )
}

export default Values;