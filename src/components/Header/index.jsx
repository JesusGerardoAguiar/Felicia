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
import Media from "react-media"
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

const Header = ({ isMobile }) => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  if (false) {
    return (
      <div>
        <MainDiv>
          <div onClick={() => setOpen(true)}>open</div>

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
              <div>close</div>
            </IconButton>
          </div>
          <LinkDiv onClick={() => setOpen(false)}>
            <Link>Inicio</Link>
          </LinkDiv>
          <LinkDiv onClick={() => setOpen(false)}>
            <Link>Nosotros</Link>
          </LinkDiv>
          <LinkDiv onClick={() => setOpen(false)}>
            <Link>Servicios</Link>
          </LinkDiv>
          <LinkDiv onClick={() => setOpen(false)}>
            <Link>Actividades</Link>
          </LinkDiv>
          <LinkDiv onClick={() => setOpen(false)}>
            <Link>Galeria</Link>
          </LinkDiv>
          <IconDiv>
            <img
              src={Facebook}
              style={{ width: "2rem", marginBottom: 0, cursor: "pointer" }}
            />
            <img
              src={Instagram}
              style={{ width: "2rem", marginBottom: 0, cursor: "pointer" }}
            />
          </IconDiv>
        </Drawer>
      </div>
    )
  }
  return (
    <>
      <Media
        query="(max-width: 768px)"
        render={() => (
          <div>
            <MainDiv>
              <div onClick={() => setOpen(true)}>open</div>

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
                  <div>close</div>
                </IconButton>
              </div>
              <LinkDiv onClick={() => setOpen(false)}>
                <Link>Inicio</Link>
              </LinkDiv>
              <LinkDiv onClick={() => setOpen(false)}>
                <Link>Nosotros</Link>
              </LinkDiv>
              <LinkDiv onClick={() => setOpen(false)}>
                <Link>Servicios</Link>
              </LinkDiv>
              <LinkDiv onClick={() => setOpen(false)}>
                <Link>Actividades</Link>
              </LinkDiv>
              <LinkDiv onClick={() => setOpen(false)}>
                <Link>Galeria</Link>
              </LinkDiv>
              <IconDiv>
                <img
                  src={Facebook}
                  style={{ width: "2rem", marginBottom: 0, cursor: "pointer" }}
                />
                <img
                  src={Instagram}
                  style={{ width: "2rem", marginBottom: 0, cursor: "pointer" }}
                />
              </IconDiv>
            </Drawer>
          </div>
        )}
      />
      <Media
        query="(min-width: 769px)"
        render={() => (
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
                <img
                  src={Facebook}
                  style={{ width: "2rem", marginBottom: 0, cursor: "pointer" }}
                />
                <img
                  src={Instagram}
                  style={{ width: "2rem", marginBottom: 0, cursor: "pointer" }}
                />
              </IconDiv>
            </LinksContainerDiv>
          </MainDiv>
        )}
      />
    </>
  )
}

export default Header
