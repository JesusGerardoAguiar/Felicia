import styled from "styled-components"

export const LinkDiv = styled.div`
  font-size: 15px;
  color: #A1AA79;
  font-family: "ArconRoundedR";
  font-weight: 300;
  text-align: center;
  cursor: pointer;
  flex-direction: row;
  width: 65rem;
  justify-content: space-evenly;
  display: flex;
  text-transform: uppercase;
  a {
    text-decoration: none !important;
    color: #A1AA79 !important;
    box-shadow: none;
    margin-right: 1rem;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    color: #A1AA79;
    font-family: MonteserratR;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;

    a {
      text-decoration: none;
      color: #A1AA79;
    }
  }
`
export const LogoDiv = styled.div`
width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const LinksContainerDiv = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 5px solid #F4E1C1;
  border-right: none;
  border-left: none;
  
  align-items: center;
`

export const MainDiv = styled.nav`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`

export const ImageDiv = styled.div`
  width: 20rem;
  display: flex;
  justify-content: center;

  h1 {
    margin-top: 0px;
    letter-spacing: 9px;
  }

  @media (max-width: 768px) {
    width: 10rem;
  }
`

export const DivOptions = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`


export const LinkImg = styled.div`
  text-align: center;
  cursor: pointer;
  flex-direction: row;
  margin: 3rem;
  margin-right: 0rem;
  margin-top: 2.5rem;
  @media (max-width: 768px) {
    margin: 0px !important;
    margin-right: 0px !important;
    margin-top: 0px !important;
  }
`

export const IconCircule = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 18px;
  border: 5px solid #F4E1C1;
  width: 2rem;
    height: 2rem;

`

export const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 5rem;
  justify-content: space-evenly;

`