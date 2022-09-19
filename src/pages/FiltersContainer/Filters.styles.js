import styled from "styled-components";
import Select from "react-select";

export const GalleryFiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.389vw;
  background: ${({ theme }) => theme.bg};
  border-radius: 2rem;
  width: 100%;
  padding: 2rem 0rem;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    color: #8c8c8c;
  }
  @media (max-width: 37.5em) {
    height: auto;
    padding: 1rem;
    flex-direction: column;
    width: 100%;
  }
  @media (min-width: 37.5em) and (max-width: 75em) {
    padding: 2rem;
  }
`;

export const FilterWrapperChild = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 37.5em) {
    width: 100%;

    flex-direction: column;
  }
`;

export const FilterReloadBox = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  justify-content: space-between;

  @media (max-width: 37.5em) {
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;

export const FilterBreedStyles = styled(Select)`
  & .Select__control {
    background: ${({ theme }) => theme.bg};
  }
`;

export const FilterLimitStyles = styled(Select)``;
