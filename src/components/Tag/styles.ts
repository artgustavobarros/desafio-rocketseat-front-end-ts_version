import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: 14px;
  font-family: 'Roboto';
  font-size: 12px;
  color: ${({theme}) => theme.colors.text_white_2};
  background-color:${({theme}) => theme.colors.background_4};
  border-radius: 8px;
  padding: 10px 16px;
  display: grid;
  place-content: center;
`