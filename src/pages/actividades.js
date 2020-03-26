import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
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

const Actividades = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const activities = data.allMdx.nodes;

  const renderActivities = activities => {
    return activities.map(activity => (
      <div>
        <h1>{activity.frontmatter.activityTitle}</h1>
        <h2>{activity.frontmatter.activityDescription}</h2>

      </div>
      // <ImageDiv backgroundImg={image.frontmatter.Image} />
    ))
  }

  return (
    <Layout location={props.location} title={siteTitle}>
      <GlobalStyles />
      <Title>Actividades</Title>
      <ActivitiesDiv>{renderActivities(activities)}</ActivitiesDiv>
    </Layout>
  )
}

const ActivitiesDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10rem;
  flex-wrap: wrap;
  padding-left: 2rem;
  padding-right: 2rem;
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

export default Actividades

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
          activityDescription
          activityTitle
          activityImages
        }
      }
    }
  }
`
