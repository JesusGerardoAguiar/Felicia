import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  width: 100%;

  h1 {
    font-family: "ArconRoundedR";
    color: #977867;
    text-transform: uppercase;
  }
`

export const ValuesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    justify-content: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 30rem;
  h3, p{
    text-align: start;
    font-family: "QuicksandR";
    margin: 0;
    margin-left: 3rem;
  }
  h3{
    color: #977867;
    @media (max-width: 768px) {
      margin-left: 0px;
      text-align: center;
      margin-top:0px;
    }
  }
  p{
    color: black;
    margin: 0;
    margin-left: 3rem;
    margin-top: 0.2rem;
    width: fit-content;
    line-height: 22px;

    @media (max-width: 768px) {
      padding: 2rem;
      width: fit-content;
      margin-left: 0px;
      text-align: center;
      font-size: 13px;
      
    }
  }
  @media (max-width: 768px) {
    margin-top: 0px;
  margin-bottom: 0px;
  }
`

export const ValuesBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  width: fit-content;
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 1rem;
  flex-wrap: wrap;

  }

`

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
`



