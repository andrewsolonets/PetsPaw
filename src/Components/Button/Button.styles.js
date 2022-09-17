import styled from "styled-components";

export const ButtonRegular = styled.button`
  background: ${({ theme }) => theme.backgroundBlock};
  border-radius: 1rem;
  border: none;
  color: ${({ theme }) => theme.main};
  padding: 1rem 3rem;
  font-size: 1.6rem;

  &:hover {
    background: ${({ theme }) => theme.btnColor};
  }
`;

export const CardButton = styled.div`
  background: ${({ theme }) => theme.btnColor};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  padding: 1.2rem;

  &:hover {
    background: ${({ theme }) => theme.main};
  }

  &:hover svg path {
    fill: white;
  }

  &:hover img {
    filter: brightness(100);
  }
`;

export const UploadButton = styled(CardButton)`
  color: ${({ theme }) => theme.main};
  padding: 1rem 3rem;
  font-size: 1.4rem;
  letter-spacing: 2px;
  gap: 1rem;
  svg {
    width: 1.6rem;
  }
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
  background: ${({ theme }) => theme.bg};
  border-radius: 1rem;
  padding-left: 0.9rem;
  padding-right: 0.9rem;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${({ theme }) => theme.btnColor};
    svg path {
      fill: ${({ theme }) => theme.main};
    }
  }

  svg {
    width: 1.85rem;
    height: 2.2rem;
  }
`;

export const ReloadButton = styled(CardButton)`
  background: ${({ theme }) => theme.backgroundBlock};
  @media (max-width: 75em) {
    width: 100%;
  }
  svg {
    width: 2rem;
  }
`;

export const ButtonPagination = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  gap: 1vw;
  color: ${({ theme }) => theme.main};
  font-weight: 500;
  font-size: 1.6rem;
  letter-spacing: 2px;
  background: ${({ theme }) => theme.btnColor};
  border-radius: 1rem;
  padding: 1.2rem 3rem;
  border: none;

  svg {
    width: 0.7rem;
    height: 1.2rem;
  }

  &:first-child svg {
    transform: rotate(-180deg);
  }

  &:hover {
    background: ${({ theme }) => theme.main};
    color: white;

    svg path {
      fill: white;
    }
  }

  &:disabled {
    background: ${({ theme }) => theme.bg};
    cursor: default;
    color: #8c8c8c;
  }

  &:disabled svg path {
    fill: #8c8c8c;
  }
  &:disabled:hover {
    background: ${({ theme }) => theme.bg};
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
  padding: 1.3rem;
  background-color: white;
  border-radius: 1rem;

  svg {
    width: 2.6rem;
  }
`;

export const UploadImageButton = styled.button`
  background: ${({ theme }) => theme.main};
  border-radius: 1rem;
  padding: 1.2rem 3rem;
  cursor: pointer;
  font-size: 1.6rem;
  border: none;
  color: white;

  &:hover {
    background: ${({ theme }) => theme.btnColor};
    color: ${({ theme }) => theme.main};
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
