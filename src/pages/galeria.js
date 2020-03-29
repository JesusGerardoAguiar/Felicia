import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled, { createGlobalStyle } from "styled-components"

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
`

const Gallery = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  console.log(data)
  const galleryPics = data.allMdx.nodes

  const renderGallery = galleryPics => {
    return galleryPics.map(image => (
      <ImageDiv backgroundImg={image.frontmatter.Image} />
    ))
  }

  return (
    <Layout location={props.location} title={siteTitle}>
      <GlobalStyles />
      <Title>Galeria</Title>
      <GalleryDiv>{renderGallery(galleryPics)}</GalleryDiv>
    </Layout>
  )
}

const GalleryDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3rem;
`

const ImageDiv = styled.div`
  width: 20rem;
  height: 15rem;
  border: 1px solid black;
  cursor: pointer;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  background-image: url(${props => props.backgroundImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  :hover {
    opacity: 0.5;
    background-color: #f3b52a;
    transition: 1s;
  }
`


export const Title = styled.h1`
    font-family: MonteserratB;
    text-align: center;
    padding: 1rem;
`

export default Gallery

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
      nodes {
        frontmatter {
          Image
          description
          title
        }
      }
    }
  }
`
