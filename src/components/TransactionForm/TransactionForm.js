import { StyledTransactionForm } from './TranscationFrom.styled';

const TransactionFrom = () => {
  return (
    <StyledTransactionForm>
      <h2>Add new transaction</h2>

      <form>
        <div>
          <label>Title</label>
          <input type='text' placeholder='Enter title' />
        </div>

        <div>
          <label>Amount</label>
          <input
            type='number'
            placeholder='price in EUR
        '
          />
        </div>
        <button type='submit'>Add transaction</button>
      </form>
    </StyledTransactionForm>
  );
};

export default TransactionFrom;
