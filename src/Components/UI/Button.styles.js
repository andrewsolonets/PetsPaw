import styled from "styled-components";

export const ButtonRegular = styled.button`
  background: var(--backgroundBlock);
  border-radius: 1rem;
  border: none;
  color: var(--main);
  padding: 1rem 3rem;
  font-size: 1.6rem;

  &:hover {
    background: var(--btnColor);
  }
`;

export const CardButton = styled.div`
  background: var(--btnColor);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  padding: 1.2rem;

  &:hover {
    background: var(--main);
  }

  &:hover svg path {
    fill: white;
  }

  &:hover img {
    filter: brightness(100);
  }
`;

export const UploadButton = styled(CardButton)`
  color: var(--main);
  padding: 1rem 3rem;
  font-size: 1.4rem;
  letter-spacing: 2px;
  gap: 1rem;
  &:hover {
    color: white;
  }

  @media (max-width: 37.5em) {
    width: 100%;
  }
`;

export const SortingButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background);
  border-radius: 1rem;
  padding-left: 0.9rem;
  padding-right: 0.9rem;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid var(--btnColor);
    svg path {
      fill: var(--main);
    }
  }

  svg {
    width: 1.85rem;
    height: 2.2rem;
  }
`;

export const ReloadButton = styled(CardButton)`
  background: var(--backgroundBlock);
`;

export const ButtonPagination = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  gap: 1vw;
  color: var(--main);
  font-weight: 500;
  font-size: 1.6rem;
  letter-spacing: 2px;
  background: var(--btnColor);
  border-radius: 1rem;
  padding: 1.2rem 3rem;
  border: none;

  &:first-child svg {
    transform: rotate(-180deg);
  }

  &:hover {
    background: var(--main);
    color: white;

    svg path {
      fill: white;
    }
  }

  &:disabled {
    background: var(--background);
    cursor: default;
    color: #8c8c8c;
  }

  &:disabled svg path {
    fill: #8c8c8c;
  }
  &:disabled:hover {
    background: var(--background);
    color: #8c8c8c;
  }
`;

export const BurgerMenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3.2rem;
  height: 3.2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
`;

export const BurgerCrossButton = styled.div`
  display: flex;
  align-self: end;
  justify-content: center;
  width: fit-content;
  padding: 1.7rem;
  background-color: white;
  border-radius: 1rem;
`;

export const UploadImageButton = styled.button`
  background: var(--main);
  border-radius: 1rem;
  padding: 1.2rem 3rem;
  cursor: pointer;
  font-size: 1.6rem;
  border: none;
  color: white;

  &:hover {
    background: var(--btnColor);
    color: var(--main);
  }

  @media (max-width: 37.5em) {
    width: 96%;
    margin-top: 2.5rem;
  }
`;

export const UploadBtn = styled(UploadImageButton)`
  align-items: center;
  justify-content: center;
  padding-left: 2rem;
  display: flex;
`;
