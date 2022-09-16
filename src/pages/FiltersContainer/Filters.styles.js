import styled from "styled-components";

export const GalleryFiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.389vw;
  background: var(--background);
  border-radius: 20px;
  width: 100%;
  height: 14vw;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    color: #8c8c8c;
  }
  @media (max-width: 425px) {
    height: auto;
    padding: 1rem;
    flex-direction: column;
    width: 100%;
  }
`;

export const FilterWrapperChild = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 425px) {
    width: 100%;

    flex-direction: column;
  }
`;

export const FilterReloadBox = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  justify-content: space-between;

  @media (max-width: 425px) {
    flex-wrap: wrap;
    gap: 1rem;
  }
`;
