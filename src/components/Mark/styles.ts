import styled from "styled-components";
import { MarkStyledProps } from "./types";

// OBSERVAR A NECESSIDADE DE REFATORAR PARA CORRIGIR CSS DUPLICADOS


export const Container = styled.div<MarkStyledProps>`
  width: auto;
  height: 56px;
  padding: 16px;

  background-color: ${({theme, $isnew}) => $isnew? 'transparent' : theme.colors.background_6};
  color: ${({theme}) => theme.colors.text_white_3};

  border: ${({theme, $isnew}) => $isnew? `2px dashed ${theme.colors.text_gray_1}`: 'none'};
  border-radius: 8px;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  outline: none;

  > input {
    border: none;
    background: transparent;
    outline: none;
    color: ${({theme}) => theme.colors.text_gray_1};
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
  }

  > button {
    background: transparent;
    border: none;
    outline: none;
  }
`