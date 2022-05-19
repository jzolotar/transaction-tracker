import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CurrencyBtn from '../CurrencyBtn/CurrencyBtn';

const TransactionSum = () => {
  const balance = useSelector((state) => state.balance);
  return (
    <StyledTransactionSum>
      <h4>Current Sum:</h4>
      <div>
        <CurrencyBtn />
        <h1>{+balance.toFixed(2)}</h1>
      </div>
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

  h4 {
    /* display: inline-block; */
    color: #000;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 3fr;

    h1 {
      letter-spacing: 1px;
      font-weight: 700;
      font-size: 1.9rem;
      color: #6fdfdf;
      /* min-width: auto;
      max-width: 100%; */
      padding-left: 0.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      position: relative;
    }
  }
`;

export default TransactionSum;
