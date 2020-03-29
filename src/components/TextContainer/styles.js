import styled from "styled-components"

export const MainDiv = styled.div`
  width: 100%;
  height: 50rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 3rem;
  padding-bottom: 3rem;
  justify-content: right;
`

export const TextDiv = styled.div`
  padding: 5rem;
  padding-right: 8rem;
  h1 {
    font-family: "ArconRoundedR";
    color: #977867;
    text-transform: uppercase;
  }
  p {
    text-align: justify;
    font-family: "QuicksandR";
  }
  ul {
    list-style: none;
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
