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
              <img src={Musica} style={{ width: '7rem' }} />
              <h3>Dignificar la vida</h3>
            </ValuesBox>
            <ValuesBox>
              <img src={PazPersona} style={{ width: '7rem' }} />
              <h3>Paz</h3>
            </ValuesBox>
            <ValuesBox>
              <img src={WorkUnido} style={{ width: '7rem' }} />
              <h3>Responsabilidad, <br />profesionalismo,<br /> compromiso</h3>
            </ValuesBox>
            <ValuesBox>
              <img src={Abuelos} style={{ width: '7rem' }} />
              <h3>Inclusión</h3>
            </ValuesBox>
          </ValuesDiv>
        </MainDiv>
    )
}

export default Values;