import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: MontserratL;
    src: url(${require("../../content/assets/fonts/Montserrat-Light.ttf")});
  }
  @font-face {
    font-family: MonteserratR;
    src: url(${require("../../content/assets/fonts/Montserrat-Regular.otf")});
  }
  @font-face {
    font-family: MonteserratB;
    src: url(${require("../../content/assets/fonts/Montserrat-Bold.otf")});
  }
  @font-face {
    font-family: QuicksandR;
    src: url(${require("../../content/assets/fonts/Quicksand-Regular.ttf")});
  }
  @font-face {
    font-family: ArconRoundedR;
    src: url(${require("../../content/assets/fonts/Arcon-Rounded-Regular.otf")});
  }
`

class Blog extends React.Component {
  render() {
    return (
      <Layout>
        <GlobalStyles />
      </Layout>
    )
  }
}

export default Blog