import styled from "styled-components";

export const Container = styled.div`
  width: 1121px;
  height: 222.85px;
  background-color: ${({theme}) => theme.colors.background_3};
  font-family: 'Roboto Slab';
  padding: 32px;
  border-radius: 16px;
  margin-bottom: 24px;
  
  h1{
    color: ${({theme}) => theme.colors.text_white_1};
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  p{
    color: ${({theme}) => theme.colors.text_gray_2};
    font-size: 16px;
    text-align: justify;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-block: 15px;
  }

  section{
    width: 276px;
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
`