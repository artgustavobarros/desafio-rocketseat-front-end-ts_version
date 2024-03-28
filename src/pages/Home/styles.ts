import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";
  font-family: "Roboto Slab";
`

export const Content = styled.div`
  grid-area: content;
  display: grid;
  place-content: center;

  > section {
    height: 470px;
    overflow-y: scroll;
    margin-top: 40.5px;
    padding-right: 16px;

    &::-webkit-scrollbar {
      width: 8px;      
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-button{
      background-color: transparent;
      height: 0px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({theme}) => theme.colors.text_pink_1};
      border-radius: 8px;
    }
  }
`

export const Headline = styled.div`

  display: grid;
  grid-template-columns: auto auto;
  grid-template-areas: "title button";
  gap: 746px;
  align-items: center;
  margin-top: 25px;
  
  > h1 {
      grid-area: title;
      font-size: 32px;
      color: ${({theme}) => theme.colors.text_white_3};
      font-weight: 400;
    }

  > button{
    grid-area: button;
  }
`