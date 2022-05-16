import styled from 'styled-components';

const TransactionSum = () => {
  return (
    <StyledTransactionSum>
      <h4>Current Sum:</h4>
      <h1>360PLN</h1>
    </StyledTransactionSum>
  );
};

const StyledTransactionSum = styled.section`
  text-align: left;

  h1 {
    letter-spacing: 1px;
    font-weight: 700;
    font-size: 1.9rem;
  }

  h4 {
    color: #333;
    font-weight: 400;
  }
`;

export default TransactionSum;
