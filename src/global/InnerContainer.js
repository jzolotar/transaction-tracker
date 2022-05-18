import styled from 'styled-components';

const InnerContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  margin-top: 1rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 52.5rem) {
    max-width: 50rem;

    display: grid;
    grid-template-columns: repeat(2, 352);
    grid-template-rows: 90px 220px 220px;
    grid-template-areas:
      'current-sum current-rate'
      'biggest-transaction transaction-list'
      'form transaction-list';
  }
`;

export default InnerContainer;
