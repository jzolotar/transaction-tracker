import { StyledTransactionForm } from './TranscationFrom.styled';

const TransactionFrom = ({
  onChangeAmountHandler,
  onChangeNameHandler,
  onSubmitHandler,
  name,
  amount,
}) => {
  return (
    <StyledTransactionForm>
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
