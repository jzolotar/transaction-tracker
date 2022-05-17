import styled from 'styled-components';
import { useSelector } from 'react-redux';

const TransactionSum = () => {
  const balance = useSelector((state) => state.balance);
  return (
    <StyledTransactionSum>
      <h4>Current Sum:</h4>
      <h1>{+balance.toFixed(2)} PLN</h1>
    </StyledTransactionSum>
  );
};

const StyledTransactionSum = styled.section`
  grid-area: current-sum;
  text-align: left;
  background: #a85cf9;
  color: #fff;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  grid-area: current-sum;

  h1 {
    letter-spacing: 1px;
    font-weight: 700;
    font-size: 1.9rem;
    color: #6fdfdf;
  }

  h4 {
    color: #000;
    font-weight: 600;
  }
`;

export default TransactionSum;
