import { useSelector } from 'react-redux';
import { StyledTransactionForm } from './TranscationFrom.styled';

const TransactionFrom = ({
  onChangeAmountHandler,
  onChangeNameHandler,
  onSubmitHandler,
  name,
  amount,
}) => {
  //check if form is valid, pass props to styled component to display errors
  const isFormValid = useSelector((state) => state.isFormValid);

  return (
    <StyledTransactionForm valid={isFormValid}>
      <h2>Add new transaction</h2>

      <form onSubmit={onSubmitHandler}>
        <div>
          <label>Title</label>
          <input
            type='text'
            placeholder='Enter title'
            value={name}
            onChange={(event) => onChangeNameHandler(event.target.value)}
          />
        </div>

        <div>
          <label>Amount</label>
          <input
            type='number'
            placeholder='price in EUR'
            value={amount}
            onChange={(event) => onChangeAmountHandler(event.target.value)}
          />
        </div>
        <button type='submit'>Add transaction</button>
      </form>
    </StyledTransactionForm>
  );
};

export default TransactionFrom;
