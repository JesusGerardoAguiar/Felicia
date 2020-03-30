import styled from "styled-components"

export const MainDiv = styled.div`
  width: 100%;
  height: 35rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 3rem;
  padding-bottom: 3rem;
  justify-content: right;

  @media (max-width: 768px) {
    height: fit-content;
    img {
      height: 25rem !important;
    }
  }
`

// @media (max-width: 768px) {
//   padding-right: 1rem;
//   padding-left: 1rem;
// }

export const TextDiv = styled.div`
  padding-top: 1rem !important;
  padding: 5rem;
  padding-right: 8rem;
  h1 {
    font-family: "ArconRoundedR";
    color: #977867;
    text-transform: uppercase;
    @media (max-width: 768px) {
      text-align: center;
      margin-top:0px;
    }
  }
  p {
    text-align: justify;
    font-family: "QuicksandR";
    @media (max-width: 768px) {
      text-align: center;
      font-size: 13px;
      margin-top:0px;
    }
  }
  ul {
    list-style: none;
    @media (max-width: 768px) {
      text-align: center;
      margin: 0;
      font-size: 13px;
      margin-top:0px;
    }
  }
  @media (max-width: 768px) {
    padding-bottom: 0px;
    padding: 0px;
    margin: 2rem;
  }
`

export const ListValue = styled.li`
  font-family: "QuicksandR";
  &::before {
    content: "•";
    color: #977867;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`
