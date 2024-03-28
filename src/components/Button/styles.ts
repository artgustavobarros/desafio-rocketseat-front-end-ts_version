import styled from "styled-components";
import { ButtonStyledProps } from "./types";

export const Container = styled.button<ButtonStyledProps>`
  width: auto;//OBSERVAR SE VAI MUDAR NO HOME
  height: 48px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  background-color: ${({theme, $transparent: transparent}) => transparent? theme.colors.text_pink_1: 'transparent'};
  color: ${({theme, $transparent: transparent}) => transparent? theme.colors.background_1: theme.colors.text_pink_1};
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`