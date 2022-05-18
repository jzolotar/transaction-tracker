import { StyledTransactionsList } from './TransactionsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTransaction } from '../../store';
import { IoMdClose } from 'react-icons/io';

const TransactionsList = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions);
  return (
    <StyledTransactionsList>
      <h2>Transaction List</h2>
      {transactions.length === 0 ? (
        <p>Add Transaction to see this section</p>
      ) : (
        <ul>
          {transactions.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <div>
                <p>{(+item.amountPLN).toFixed(2)} PLN</p>
                <button onClick={() => dispatch(deleteTransaction(item))}>
                  <IoMdClose size={20} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </StyledTransactionsList>
  );
};

export default TransactionsList;
