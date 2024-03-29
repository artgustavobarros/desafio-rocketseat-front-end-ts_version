import styled from "styled-components";
import imgBackground from '../../assets/imgs/background.png';

export const Container = styled.div`
  font-family: 'Roboto Slab';
  display: grid;
  grid-template-columns: auto 803px;
  grid-template-areas: "img form";
 
`

export const Background = styled.div`
    grid-area: img;
    height: 100vh;
    background-image: url(${imgBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center cen;
`

export const Content = styled.main`
  grid-area: form;
  display: grid;
  place-content: center;
`

export const Brand = styled.h1`
  font-weight: bold;
  font-size: 48px;
  color: ${({theme}) => theme.colors.text_pink_1};
`
