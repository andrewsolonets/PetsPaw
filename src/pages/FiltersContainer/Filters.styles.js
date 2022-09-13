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
`;

export const FilterWrapperChild = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const FilterReloadBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
