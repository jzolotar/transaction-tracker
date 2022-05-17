import styled from 'styled-components';
import { useSelector } from 'react-redux';

const TransactionSum = () => {
  const balance = useSelector((state) => state.balance);
  return (
    <StyledTransactionSum>
      <h4>Current Sum:</h4>
      <h1>{+balance.toFixed(2)}</h1>
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
