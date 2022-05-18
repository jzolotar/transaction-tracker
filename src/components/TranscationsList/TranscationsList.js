import { StyledTransactionsList } from './TransactionsList.styled';
import { useSelector } from 'react-redux';

import Transaction from '../Transaction/Transaction';

const TransactionsList = () => {
  const transactions = useSelector((state) => state.transactions);
  return (
    <StyledTransactionsList>
      <h2>Transaction List</h2>
      {transactions.length === 0 ? (
        <p>Add Transaction to see this section</p>
      ) : (
        <ul>
          {transactions.map((item) => (
            <Transaction
              key={item.id}
              item={item}
              color={item.amountPLN > 0 ? '#6fdfdf' : '#df6f6f'}
            />
          ))}
        </ul>
      )}
    </StyledTransactionsList>
  );
};

export default TransactionsList;
