import styled from 'styled-components';

const Header = () => {
  return <StyledHeader>Transaction Tracker</StyledHeader>;
};

const StyledHeader = styled.h1`
  text-align: center;
  grid-area: title;
`;

export default Header;
