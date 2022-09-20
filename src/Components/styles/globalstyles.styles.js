import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const fontSizes = [1, 1.2, 1.6, 2, 3.6, 4.4];
const fontWeights = [400, 500];
const lineHeights = [1.6, 1.8, 2.4, 2.9, 3, 5.2, 5.8];
const radius = [1, 2];
const paddings = [3.7, 1, 3, 1.2, 1, 5, 2.5];

export const FontXXS = fontSizes[0];
export const FontXS = fontSizes[1];
export const FontS = fontSizes[2];
export const FontM = fontSizes[3];
export const FontL = fontSizes[4];
export const FontXL = fontSizes[5];

export const GlobalStyles = createGlobalStyle`
* {
  font-family: "Jost", sans-serif;
  margin: 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

html {
  font-size: 62.5%;
  @media (max-width:75em) {
    font-size: 45.5%;
  }
  @media (min-width:75em) and (max-width:90.5em) {
    font-size: 55.5%;
  }
  @media (min-width:90.5em) and (max-width:110.5em) {
    font-size: 68.5%;
  }
  @media (min-width:110.5em) and (max-width:142.5em) {
    font-size: 85.5%;
  }
  @media (min-width:142.5em) {
    font-size: 105.5%;
  }
}



a {
  color: inherit;
 
  text-decoration: none;
}

body {
  background: ${({ theme }) => theme.bg};
    
  box-sizing: border-box;
  @media (max-width: 37.5em) {
      padding: 7rem 2rem;
   }
}

h1 {
  font-size: ${fontSizes[5]}rem;
  font-weight: ${fontWeights[1]};
  font-style: normal;
  line-height: ${lineHeights[6]}rem;
  color: ${({ theme }) => theme.textMain};
}

p {
  font-style: normal;
  font-weight: ${fontWeights[0]};
  font-size: ${fontSizes[3]}rem;
  line-height: ${lineHeights[3]}rem;
  color: ${({ theme }) => theme.textMain};
  b {
    font-weight:500;
  }
}
h2 {
  font-size: ${fontSizes[4]}rem;
  font-weight: ${fontWeights[1]};
  font-style: normal;
  line-height: ${lineHeights[5]}rem;
  color: ${({ theme }) => theme.textMain};
}



:root {
  --swiper-theme-color: ${({ theme }) => theme.main};
  --swiper-pagination-bullet-inactive-color: ${({ theme }) => theme.main};
}
.swiper-pagination-bullets.swiper-pagination-horizontal {
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.backgroundBlock} !important;
  position: absolute !important;
  left: 42% !important;
  bottom: 3% !important;
  border-radius: 2rem;
  width: fit-content !important;
}

.swiper-pagination-bullet {
  width: 0.8rem;
  height: 0.8rem;
}

@media (max-width: 20.5em)  {

  .swiper-pagination-bullets.swiper-pagination-horizontal {
    padding: 1.6rem;
    background-color: ${({ theme }) => theme.backgroundBlock} !important;
    position: absolute !important;
    left: 33% !important;
    bottom: -2% !important;
    border-radius: 20px;
    width: fit-content !important;
  }
  .swiper-pagination-bullet {
    width: 1rem;
    height: 1rem;
  }

}
@media (max-width: 25.5em)  {

  .swiper-pagination-bullets.swiper-pagination-horizontal {
    padding: 1.6rem;
    background-color: ${({ theme }) => theme.backgroundBlock} !important;
    position: absolute !important;
    left: 35% !important;
    bottom: -2% !important;
    border-radius: 20px;
    width: fit-content !important;
  }
  .swiper-pagination-bullet {
    width: 1rem;
    height: 1rem;
  }

}

@media (min-width: 25.5em) and (max-width: 37.5em)  {

  .swiper-pagination-bullets.swiper-pagination-horizontal {
    padding: 1.6rem;
    background-color: ${({ theme }) => theme.backgroundBlock} !important;
    position: absolute !important;
    left: 38% !important;
    bottom: -2% !important;
    border-radius: 20px;
    width: fit-content !important;
  }
  .swiper-pagination-bullet {
    width: 1rem;
    height: 1rem;
  }

}

@media (min-width: 37.5em) and  (max-width: 75em) {

  .swiper-pagination-bullets.swiper-pagination-horizontal {
    padding: 1.6rem;
    background-color: ${({ theme }) => theme.backgroundBlock} !important;
    position: absolute !important;
    left: 41% !important;
    bottom: -2% !important;
    border-radius: 2rem;
    width: fit-content !important;
  }

}

`;

export const MainContentContainer = styled.div`
  padding: 1.7rem;

  flex: 1;
  background: ${({ theme }) => theme.backgroundBlock};
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 2rem;
`;
