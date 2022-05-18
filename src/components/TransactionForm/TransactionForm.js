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
            autoFocus
            type='text'
            maxLength='10'
            placeholder='Enter title'
            value={name}
            onChange={(event) => onChangeNameHandler(event.target.value)}
          />
        </div>

        <div>
          <label>Amount</label>
          <input
            type='number'
            min='-1000000'
            max='1000000'
            step='0.01'
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
