import { StyledTransactionsList } from './TransactionsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTransaction } from '../../store';
import { IoMdClose } from 'react-icons/io';
import Transaction from '../Transaction/Transaction';

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
            <Transaction
              key={item.id}
              item={item}
              color={item.amountPLN > 0 ? '#6fdfdf' : '#df6f6f'}
            />
            // <li key={item.id}>
            //   <h3>{item.title}</h3>
            //   <div>
            //     <p>{(+item.amountPLN).toFixed(2)} PLN</p>
            //     <button onClick={() => dispatch(deleteTransaction(item))}>
            //       <IoMdClose size={20} />
            //     </button>
            //   </div>
            // </li>
          ))}
        </ul>
      )}
    </StyledTransactionsList>
  );
};

export default TransactionsList;
