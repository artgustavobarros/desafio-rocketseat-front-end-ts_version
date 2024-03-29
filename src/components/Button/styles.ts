import styled from "styled-components";
import { ButtonStyledProps } from "./types";

export const Container = styled.button<ButtonStyledProps>`
  width: ${({$transparent}) => $transparent? 'auto': '100%'};//OBSERVAR SE VAI MUDAR NO HOME
  height: 48px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  font-family: 'Roboto Slab';
  font-size: 16px;

  background-color: ${({theme, $transparent, $inversed}) => {
    if ($transparent){
      return 'transparent'
    }

    if ($inversed){
      return theme.colors.background_black
    }

    return theme.colors.text_pink_1
  }};

  color: ${({theme, $transparent, $inversed}) => {
    if ($transparent){
      return theme.colors.text_pink_1
    }

    if ($inversed){
      return theme.colors.text_pink_1
    }

    return theme.colors.background_1
  }};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`