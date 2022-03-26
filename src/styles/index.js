import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
  body {
    margin: 0 auto;
    padding: 0;
    padding-top: 10px;
    background-color: #f8f8f8;
    font-family: Times New Roman;
    color: #494949;
  }
  a {
    text-decoration: none;
    color: #494949;
  }
`
export const StyledNavigation = {
  display: 'flex',
  justifyContent: 'space-around',
}
export const WelcomePage = styled.h1 `
  text-align: center;
  margin-top: 250px;
`
export const StyledLogInOut = {
  display: 'grid',
  rowGap: '10px',
  border: '2px solid DimGrey',
  borderRadius: '50% 20% / 10% 40%',
  width: 'fit-content',
  padding: '50px',
  margin: '100px auto 0px',
  textAlign: 'center',
}
export const StyledInputs = {
  backgroundColor: 'transparent',
  border: '2px solid dimgray',
  borderRadius: '5px 10px',
  padding: '5px',
}
export const StyledButton = styled.button `
  background-color: transparent;
  border: 2px solid dimgray;
  font-family: Times New Roman;
  width: fit-content;
  border-radius: 10% 40% / 30% 50%;
  padding: 10px;
  cursor: pointer;
  color: #494949;
  justify-self: center;
  fontSize: '1rem',
  &:hover{
    background-color: #49494947;
  }
`
export const StyledSideButton = styled.button `
  left: -24px;
  top: 300px;
  border-radius: 10% 30% / 30% 50%;
  position: fixed;
  transform: rotate(90deg);
  background-color: transparent;
  border: 2px solid dimgray;
  font-family: Times New Roman;
  width: fit-content;
  padding: 10px 10px 20px;
  cursor: pointer;
  color: #494949;
  &:hover{
    background-color: #49494947;
  }
`
export const StyledLink = {
  backgroundColor: 'transparent',
  border: '2px solid dimgray',
  fontFamily: 'Times New Roman',
  width: 'fit-content',
  borderRadius: '10% 40% / 30% 50%',
  padding: '10px',
  cursor: 'pointer',
  color: '#494949',
  justifySelf: 'center',
  fontSize: '1rem',
  fontWeight: 'normal',
}
export const Footer = styled.div `
  display: flex;
  position: absolute;
  bottom:0;
  width: 100%;
  justify-content: space-evenly;
  border-top: 2px solid DimGrey;
`
export const StyledList = {
columnCount: 3,
listStyle: 'none',
marginTop: '50px',
}
export const StyledCivilizations = {
  textAlign: 'center',
}
export const StyledUniqueUnits = {
  textAlign: 'center',
  display:'grid',
  gridTemplateColumns: '390px 390px',
  justifyContent: 'center',
}
export const StyledListLi = {
  marginBottom: '1rem'
}
export const StyledShortList = {
  listStyle: 'none',
  marginBottom: '50px',
}
export const StyledUniqNavigation = {
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '20px',
}