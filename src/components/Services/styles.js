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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  align-items: baseline;
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
    }
  }
  p{
    color: black;
    margin: 0;
    margin-left: 3rem;
    margin-top: 0.2rem;
    width: 25rem;
    line-height: 22px;

    @media (max-width: 768px) {
      width: fit-content;
      margin-left: 0px;
      text-align: center;
    }
  }
`

export const ValuesBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  width: 30rem;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 1rem;
  }

`

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
`



