import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  width: 100%;
  height: 35rem;

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
  width: 100%;
  align-items: baseline;
  h3, p{
    text-align: center;
    font-family: "QuicksandR";
    margin: 0;
  }
  h3{
    color: #977867;
  }
  p{
    color: black;
    margin: 0;
    margin-top: 0.2rem;
    width: 12rem;
    line-height: 22px;
  }
`

export const ValuesBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

