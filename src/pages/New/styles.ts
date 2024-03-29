import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";
`

export const Content = styled.div`
  grid-area: content;

  padding: 20px 123px;
  
  > main {
    overflow-y: scroll;
    height: 78vh;
    padding-right: 16px;
    
    h1{
      color: ${({theme}) => theme.colors.text_white_1};
      font-family: 'Roboto Slab';
      font-weight: 500;
      font-size: 36px;
      margin-bottom: 40px;
    }

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

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
`

export const Description = styled.textarea`
  font-family: 'Roboto';
  font-size: 16px;
  width: 100%;
  height: 274px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.background_2};
  outline: none;
  border: none;
  padding: 19px 0 19px 24px;
  color: ${({theme}) => theme.colors.text_gray_1}; 

  &::placeholder{
    color: ${({theme}) => theme.colors.text_gray_1}; 
  }

  resize: none;
`

export const Marker = styled.section`
  > p {
    font-family: 'Roboto';
    font-size: 20px;
    color: ${({theme}) => theme.colors.text_gray_2}; 
    margin-bottom: 24px;
  }

  > div {
    width: 100%;
    height: 83px;
    background-color: ${({theme}) => theme.colors.background_black};
    border-radius: 8px;
    display: flex;
    padding: 16px;
    gap: 24px;
  }

  margin-block: 40px;
`
