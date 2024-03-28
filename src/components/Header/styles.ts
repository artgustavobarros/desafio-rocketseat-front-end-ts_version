import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 116px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;
  padding: 24px 123px;
  background-color: ${({theme}) => theme.colors.background_1};

  font-family: "Roboto Slab";
  font-size: 14px;
  border-bottom: 3px solid ${({theme}) => theme.colors.background_2};
`

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text_pink_1};
`

export const Search = styled.input`
  width: 630px;
  height: 56px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.background_2};
  outline: none;
  border: none;
  padding: 19px 0 19px 24px;

  &::placeholder{
    color: ${({theme}) => theme.colors.text_gray_1}; 
  }

`

export const Profile = styled.section`
  display: flex;
  align-items: center;
  gap: 9px;

  div:first-child{
    display: flex;
    flex-direction: column;
    align-items: end;

  }

  strong {
    font-weight: bold;
    color: ${({theme}) => theme.colors.text_white_1}; 
  }

  button{
    color: ${({theme}) => theme.colors.text_gray_1};
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  img{
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`