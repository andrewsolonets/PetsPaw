import styled from "styled-components";

export const DefaultMessageWrapper = styled.div`
  width: 94%;
  border-radius: 1rem;
  padding: 2rem;
  font-size: 1.6rem;
  color: #8c8c8c;
  background: ${({ theme }) => theme.bg};
  margin-bottom: 60vh;
`;
