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
  }
  p{
    color: black;
    margin: 0;
    margin-left: 3rem;
    margin-top: 0.2rem;
    width: 25rem;
    line-height: 22px;
  }
`

export const ValuesBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  width: 30rem;


`

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
`



