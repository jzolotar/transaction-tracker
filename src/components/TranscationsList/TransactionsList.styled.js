import styled from 'styled-components';

export const StyledTransactionsList = styled.section`
  grid-area: transaction-list;
  background: #a85cf9;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  background: #a85cf9;
  @media (min-width: 52.5rem) {
    overflow: hidden;
    overflow-y: auto;
  }

  h2 {
    margin-bottom: 1rem;
    position: relative;
    font-weight: 400;
    letter-spacing: 1.5px;
    &::after {
      position: absolute;
      top: 28px;
      left: 0;
      width: 100%;
      content: '';
      border: 1px solid #000;
      opacity: 0.4;
    }
  }

  p {
    color: #f4f4f4;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }
`;
