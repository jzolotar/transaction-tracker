import styled from 'styled-components';

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.main`
  width: 100%;
  max-width: 21.875rem; //350px
  margin: 1.875rem auto;
`;

export default Container;
