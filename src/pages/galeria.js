import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: QuicksandR;
    src: url(${require("../../content/assets/fonts/Quicksand-Regular.ttf")});
  }
  @font-face {
    font-family: ArconRoundedR;
    src: url(${require("../../content/assets/fonts/Arcon-Rounded-Regular.otf")});
  }
`

const Gallery = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const galleryPics = data.allMdx.nodes

  const renderGallery = galleryPics => {
    return galleryPics.map(image => {
      console.log(image.frontmatter.Image)
      if(image.frontmatter.Image !== null){
        return (<ImageDiv backgroundImg={image.frontmatter.Image} />)
      }
      return <></>
    })
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
  padding: 2rem;
  justify-content: space-around;
`

const ImageDiv = styled.div`
  border-radius: 168px;
  width: 21rem;
  height: 20rem;
  border: 15px solid #a1aa79;
  cursor: pointer;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.backgroundImg});
  :hover {
    opacity: 0.5;
    background-color: #f3b52a;
    transition: 1s;
  }

  @media (max-width: 768px) {
    height: 18rem;
   }
`

export const Title = styled.h1`
  font-family: ArconRoundedR;
  text-align: center;
  color: #977867;
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
