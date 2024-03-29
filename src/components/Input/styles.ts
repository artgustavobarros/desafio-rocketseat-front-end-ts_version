import styled from "styled-components";

export const Container = styled.input`
  width: 100%;//OLHAR COMO FICOU O HOME
  height: 56px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.background_2};
  outline: none;
  border: none;
  padding: 19px 0 19px 24px;
  color: ${({theme}) => theme.colors.text_gray_1}; 

  &::placeholder{
    color: ${({theme}) => theme.colors.text_gray_1}; 
  }
`
