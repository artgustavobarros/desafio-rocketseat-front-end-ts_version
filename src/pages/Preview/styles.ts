import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
  "header"
  "content";

  font-family: "Roboto Slab";//SERIA INTERESSANTE COLOCAR COMO FONT-FAMILY NO GLOBAL?
`

export const Content = styled.div`
  grid-area: content;
  display: grid;
  place-content: center;

  > main {
    margin-block: 16px;
    width: 1137px;
    height: 581px;
    overflow-y: auto;

    text-align: left;
    &::-webkit-scrollbar {
      width: 8px;      
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-button{
      background-color: transparent;
      height: 0px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({theme}) => theme.colors.text_pink_1};
      border-radius: 8px;
    }

    section:nth-child(3){
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 8px;
    }
  }
`

export const Headline = styled.section`
  display: grid;
  grid-template-rows: 47px 19px;
  grid-template-areas: 
  "title score"
  "by date";
  width:368px;
  gap: 24px 0;
  margin-bottom: 40px;
  > h1 {
    grid-area: title;
    color: ${({theme}) => theme.colors.text_white_1};
    font-weight: 500;
    font-size: 36px;
    /* margin-right: 80px; */
  }

  p {
    font-family: 'Roboto';
    font-size: 16px;
    color: ${({theme}) => theme.colors.text_white_1};
  }
`

export const By = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5px;
  grid-area: by;
  > img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.colors.background_5};
  }
`

export const Date = styled.div`
  grid-area: date;
  display: flex;
  align-items: center;
  gap: 1.5px;
`

export const Description = styled.div`
  margin-top: 40px;
  >p{
    font-size: 16px;
    color: ${({theme}) => theme.colors.text_white_1};
    text-align: justify;
  }
`