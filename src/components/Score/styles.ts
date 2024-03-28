import styled, { css } from "styled-components";
import { ScoreStyledProps } from "./types";

export const Container = styled.div<ScoreStyledProps>`
  ${({$preview: preview}) => preview && css`
    transform: scale(2);
    grid-area: score;
    align-self: center;
    display: flex;
    gap: 5px;
    margin-left: 70px;
  `}
`