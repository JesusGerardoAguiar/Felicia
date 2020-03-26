import React from "react";
import {
  MainDiv,
  DivOptions,
  LinkDiv,
  ImageDiv,
} from "./styles";
import Lograf from "../../../content/assets/lografLogo.svg";
// import Facebook from "../../assets/img/facebook.js";
// import Instagram from "../../assets/img/instagram.js";
// import { isMobile } from "react-device-detect";
// import Drawer from "@material-ui/core/Drawer";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import IconButton from "@material-ui/core/IconButton";
// import Hamburguer from '../../assets/img/hamburguer.png';
// import Close from '../../assets/img/close.png';
import { Link } from "gatsby"



const Header = () => {
  return (
    <MainDiv>
      <ImageDiv>
        <h1>Felicia</h1>
      </ImageDiv>
      <DivOptions>
        <LinkDiv><Link to='/'>Inicio</Link></LinkDiv>
        <LinkDiv>Sobre Nosotros</LinkDiv>
        <LinkDiv><Link to='/actividades'>Actividades</Link></LinkDiv>
        <LinkDiv><Link to='/galeria'>Galeria</Link></LinkDiv>
        <LinkDiv>Servicios</LinkDiv>
        {/* <a href="https://www.facebook.com/lograf.dg" target="_blank">
          <LinkImg>
            <Facebook fill="white" style={{ width: 13.5 }} />
          </LinkImg>
        </a>
        <a href="https://www.instagram.com/lograf.design/" target="_blank">
          <LinkImg>
            <Instagram
              fill="white"
              style={{ width: 30.5, marginRight: "3rem" }}
            />
          </LinkImg>
        </a> */}
      </DivOptions>
    </MainDiv>
  );
};

export default Header;
