import styled from "styled-components";

export const MainDiv = styled.nav`
  width: 100%;
  height: 3rem;
  padding-bottom: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #5a8a17;
  position: inherit;
  font-family: "MontserratL";
  color: white;
  padding-top: 5rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

export const ImageDiv = styled.div`
  width: 20rem;
  display: flex;
  justify-content: center;

  h1{
    margin-top: 0px;
    letter-spacing: 9px;
  }

  @media (max-width: 768px) {
    width: 10rem;
  }
`;

export const DivOptions = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LinkDiv = styled.div`
  font-size: 15px;
  color: #ffffff;
  font-family: "MontserratL";
  font-weight: 300;
  text-align: center;
  cursor: pointer;
  flex-direction: row;
  margin: 3rem;
  
  a {
    text-decoration: none!important;
    color: white!important;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    color: #f3b52a;
    font-family: MonteserratR;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;

    a {
      text-decoration: none;
      color: #f3b52a;
    }
  }
`;

export const LinkImg = styled.div`
  text-align: center;
  cursor: pointer;
  flex-direction: row;
  margin: 3rem;
  margin-right: 0rem;
  margin-top: 2.5rem;
  @media (max-width: 768px) {
    margin: 0px!important;
    margin-right: 0px!important;
    margin-top: 0px!important;
  }
`;

export const IconDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 5rem;
`;
