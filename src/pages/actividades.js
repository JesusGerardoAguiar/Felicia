import React from "react"
import { Link, graphql } from "gatsby"
import Carousel from "../components/Carousel"
import { CarouselProvider, Slide, Slider } from "pure-react-carousel"

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

const Actividades = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const activities = data.allMdx.nodes

  const renderActivities = activities => {
    return activities.map(activity => {
      console.log(activity)
      if (activity.frontmatter.activityTitle !== null) {
        console.log(activity.frontmatter.activityImages)
        return (
          <ActivityContainer>
            <ImageDiv>
              <Carousel
                totalSlides={activity.frontmatter.activityImages.length}
                StyledCarousel={StyledCarousel}
                StyledSlider={StyledSlider}
                StyledSlide={StyledSlide}
              >
                {activity.frontmatter.activityImages.map(image => {
                  return (
                    <ImageDiv
                      backgroundImg={image}
                      style={{
                        border: "none",
                        width: "18.2rem",
                        height: "18.2rem",
                        marginLeft: "1.4rem",
                        marginRight: "0px",
                      }}
                    />
                  )
                })}
              </Carousel>
            </ImageDiv>
            <BoxText>
              <h2>{activity.frontmatter.activityTitle}</h2>
              <p>{activity.frontmatter.activityDescription}</p>
            </BoxText>
          </ActivityContainer>
        )
      }
      return <></>
    })
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
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 2rem;
  padding-right: 2rem;
`

const ActivityContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50rem;
  align-items: center;
`

const ImageDiv = styled.div`
  border-radius: 211px;
  width: 20rem;
  height: 20rem;
  z-index: 2;
  border: 15px solid #a1aa79;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.backgroundImg});
  @media (max-width: 768px) {
    height: 18rem;
  }
`

const BoxText = styled.div`
  border-radius: 7px;
  border: 5px solid #f4e1c1;
  width: 100%;
  margin-left: -68px;
  height: 15rem;
  text-align: start;
  border-left: none;
  display: flex;
  flex-direction: column;
  flex-direction: start;
  overflow-x: auto;
  scrollbar-color: #f4e1c1;
  h2 {
    font-family: ArconRoundedR;
    color: #977867;
    margin-top: 20px !important;
    padding-left: 5rem;
    text-transform: uppercase;
  }
  p {
    margin: 0px !important;
    font-family: "QuicksandR" !important;
    padding-left: 5rem;
    text-align: justify;
    padding-right: 2rem;
  }
`

export const Title = styled.h1`
  font-family: ArconRoundedR;
  text-align: center;
  color: #977867;
  padding: 1rem;
`

export const StyledCarousel = styled(CarouselProvider)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .slideInner___2mfX9 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
  }

  @media (max-width: 768px) {
    width: 100vw;
  }
`

export const StyledSlider = styled(Slider)`
  width: 21rem;
  height: 21rem;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100vw;
  }
`

export const StyledSlide = styled(Slide)`
  .carousel__slide-focus-ring {
    display: none;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
