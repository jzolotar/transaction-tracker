import { StyledTransactionsList } from './TransactionsList.styled';

const TransactionsList = () => {
  return (
    <StyledTransactionsList>
      <h2>Transaction List</h2>
      <ul>
        <li>
          <h3>Name</h3>
          <p>150PLN</p>
        </li>
        <li>
          <h3>Name</h3>
          <p>150PLN</p>
        </li>
        <li>
          <h3>Name</h3>
          <p>150PLN</p>
        </li>
      </ul>
    </StyledTransactionsList>
  );
};

export default TransactionsList;
