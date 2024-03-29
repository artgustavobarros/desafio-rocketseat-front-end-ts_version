import styled from "styled-components";

export const Container = styled.div`

    width: 100%;//OLHAR COMO FICOU O HOME
    height: 56px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.background_2};
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 19px 0 19px 24px;

  > input{
    
    outline: none;
    width: 100%;
    height: 100%;
    border: none;
    color: ${({theme}) => theme.colors.text_gray_1}; 
    background-color: transparent;
    font-size: 16px;

    &::placeholder{
      color: ${({theme}) => theme.colors.text_gray_1};
      font-size: 16px;
    }
  }

  >svg{
    margin-top: -2px;
    margin-left: 12px;
    color: ${({theme}) => theme.colors.text_gray_1};
  }

`
