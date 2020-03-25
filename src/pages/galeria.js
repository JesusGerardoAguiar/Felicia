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
  console.log(data.allMdx.edges)
  const galleryPics = data.allMdx.edges

  const renderGallery = galleryPics => {
    return galleryPics.map(image => (
      <ImageDiv  backgroundImg={image.node.frontmatter.Image} />
    ))
  }

  return (
    <Layout location={props.location} title={siteTitle}>
      <GlobalStyles />
      <GalleryDiv>{renderGallery(galleryPics)}</GalleryDiv>
    </Layout>
  )
}

const GalleryDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const ImageDiv = styled.div`
    width: 15rem;
    height: 15rem;
    border: 1px solid black;
    cursor: pointer;
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
export default Gallery;


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            Image
          }
        }
      }
    }
  }
`
