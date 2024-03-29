import styled from "styled-components";

export const Container = styled.div`
  > header{
    height: 144px;
    background-color: ${({theme}) => theme.colors.background_3};
    display: flex;
    align-items: center;
    padding-left: 144px;
  }

  width: 100%;
`

export const Content = styled.div`
  width: 340px;
  margin: 157px auto 0;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  div:nth-child(odd) {
    margin-bottom: 16px;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -250px auto 32px;
  width: 186px;
  height: 186px;

  > img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }

  > label {
    width: 48px;
    height: 48px;
    background-color: ${({theme}) => theme.colors.text_pink_1};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({theme}) => theme.colors.background_4};
    }
  }
`