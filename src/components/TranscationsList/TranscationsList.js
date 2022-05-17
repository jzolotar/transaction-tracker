import { StyledTransactionsList } from './TransactionsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTransaction } from '../../store';

const TransactionsList = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions);
  return (
    <StyledTransactionsList>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{(+item.amountPLN).toFixed(2)}</p>
            <button onClick={() => dispatch(deleteTransaction(item))}>X</button>
          </li>
        ))}
      </ul>
    </StyledTransactionsList>
  );
};

export default TransactionsList;
