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
    width: 1.319vw;
  }
`;

export const ReloadButton = styled(CardButton)`
  background: var(--backgroundBlock);
`;
