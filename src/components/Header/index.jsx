import React, { useState, useEffect } from "react"
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
import Drawer from "@material-ui/core/Drawer"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import Hamburguer from "../../../content/assets/icons/hamburger.svg"
import Close from "../../../content/assets/icons/close.svg"
import Media from "react-media"
import Scroll from "react-scroll"

const LinkScroll = Scroll.Link
const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))

const Header = () => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const renderHeader = matches => {
    if (matches.small) {
      return (
        <div>
          <MainDiv>
            <div onClick={() => setOpen(true)}>
              <img src={Hamburguer} style={{ width: "3rem" }} />
            </div>

            <img src={FeliciaLogo} alt="logo" style={{ width: "10rem" }} />
          </MainDiv>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={() => setOpen(false)}>
                <div>
                  <img src={Close} style={{ width: "1rem" }} />
                </div>
              </IconButton>
            </div>
            <LinkDiv onClick={() => setOpen(false)}>
              <Link>Inicio</Link>
            </LinkDiv>

            <LinkDiv onClick={() => setOpen(false)}>
              <LinkScroll
                activeClass="active"
                to="AboutUs"
                onClick={() => setOpen(false)}
                spy={true}
                smooth={true}
                duration={400}
              >
                Nosotros
              </LinkScroll>
            </LinkDiv>
            <LinkDiv onClick={() => setOpen(false)}>
              <LinkScroll
                activeClass="active"
                to="Services"
                onClick={() => setOpen(false)}
                spy={true}
                smooth={true}
                duration={400}
              >
                Servicios
              </LinkScroll>
            </LinkDiv>
            <LinkDiv onClick={() => setOpen(false)}>
              <Link to="/actividades">Actividades</Link>
            </LinkDiv>
            <LinkDiv onClick={() => setOpen(false)}>
              <Link to="/galeria">Galeria</Link>
            </LinkDiv>
            <IconDiv>
              <a
                href="https://www.facebook.com/alfon3527/?__tn__=%2Cd%2CP-R&eid=ARCVpWnXJ9zy8nLvG0m4NGMz58CH_enI8kAfzsGnoJHLuamHlAPBDQlKELeNyjuQ87AEVCxcgV0y2Ja9"
                target="_blank"
              >
                <img
                  src={Facebook}
                  style={{ width: "2rem", marginBottom: 0, cursor: "pointer" }}
                />
              </a>
              <a
                href="https://www.instagram.com/felicia_stabernardina/"
                target="_blank"
              >
                <img
                  src={Instagram}
                  style={{ width: "2rem", marginBottom: 0, cursor: "pointer" }}
                />
              </a>
            </IconDiv>
          </Drawer>
        </div>
      )
    } else if (matches.large) {
      return (
        <MainDiv>
          <LogoDiv>
            <img src={FeliciaLogo} style={{ margin: "12px" }} />
          </LogoDiv>
          <LinksContainerDiv>
            <LinkDiv>
              <InsideLinkDiv>
                <Link>Inicio</Link>
                <LinkScroll
                  activeClass="active"
                  to="AboutUs"
                  spy={true}
                  smooth={true}
                  duration={400}
                >
                   <Link to="" style={{ marginRight: "0px"}}>Nosotros</Link>
                </LinkScroll>
                <LinkScroll
                  activeClass="active"
                  to="Services"
                  spy={true}
                  smooth={true}
                  duration={400}
                >
                  <Link to="" style={{ marginRight: "0px"}}>Servicios</Link>
                </LinkScroll>
                <Link to="/actividades">Actividades</Link>
                <Link to="/galeria">Galeria</Link>
              </InsideLinkDiv>
            </LinkDiv>
            <IconDiv>
              <a
                href="https://www.facebook.com/alfon3527/?__tn__=%2Cd%2CP-R&eid=ARCVpWnXJ9zy8nLvG0m4NGMz58CH_enI8kAfzsGnoJHLuamHlAPBDQlKELeNyjuQ87AEVCxcgV0y2Ja9"
                target="_blank"
              >
                <img
                  src={Facebook}
                  style={{ width: "2rem", marginBottom: 0, cursor: "pointer" }}
                />
              </a>
              <a
                href="https://www.instagram.com/felicia_stabernardina/"
                target="_blank"
              >
                <img
                  src={Instagram}
                  style={{ width: "2rem", marginBottom: 0, cursor: "pointer" }}
                />
              </a>
            </IconDiv>
          </LinksContainerDiv>
        </MainDiv>
      )
    }
  }

  return (
    <>
      <Media queries={{ small: { maxWidth: 768 }, large: { minWidth: 769 } }}>
        {matches => renderHeader(matches)}
      </Media>
    </>
  )
}

export default Header
