import React from "react"
import {
  MainDiv,
  LogoDiv,
  LinksContainerDiv,
  LinkDiv,
  InsideLinkDiv,
  IconDiv,
} from "./styles"
import FeliciaLogo from "../../../content/assets/icons/feliciaarriba.svg"
import Facebook from "../../../content/assets/icons/facebook.svg"
import Instagram from "../../../content/assets/icons/instagram.svg"
import { Link } from "gatsby"

const Header = () => {
  return (
    <MainDiv>
      <LogoDiv>
        <img src={FeliciaLogo} style={{ margin: "12px" }} />
      </LogoDiv>
      <LinksContainerDiv>
        <LinkDiv>
          <InsideLinkDiv>
            <Link>Inicio</Link>
            <Link>Nosotros</Link>
            <Link>Servicios</Link>
            <Link>Actividades</Link>
            <Link>Galeria</Link>
          </InsideLinkDiv>
        </LinkDiv>
        <IconDiv>
          <img src={Facebook} style={{ width: "2rem", marginBottom: 0, cursor: 'pointer' }} />
          <img src={Instagram} style={{ width: "2rem", marginBottom: 0, cursor: 'pointer' }} />
        </IconDiv>
      </LinksContainerDiv>
    </MainDiv>
  )
}

export default Header
