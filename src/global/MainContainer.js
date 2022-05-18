import styled from 'styled-components';

const MainContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.main`
  background-color: #f7f7f7;
  width: 100%;
  max-width: 22.3rem;
  margin: 1.875rem auto;
  border-radius: 10px;
  padding: 2rem 1rem;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);

  @media (min-width: 35.5rem) {
    max-width: 30rem;
  }
  @media (min-width: 52.5rem) {
    max-width: 50rem;
  }
`;

export default MainContainer;
