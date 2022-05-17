import { StyledBiggestTransaction } from './BiggestTransaction.styled';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

const BiggestTransaction = () => {
  const transactions = useSelector((state) => state.transactions);

  let max = null;
  if (transactions.length !== 0) {
    //find object with biggest price for incomes
    max = transactions.reduce((prev, current) =>
      prev.amountPLN > current.amountPLN ? prev : current
    );
    console.log(max);
  }
  return (
    <StyledBiggestTransaction>
      <h2>Biggest Transaction</h2>
      <article>
        {!max ? (
          <p>Add Transaction to see this section</p>
        ) : (
          <Fragment>
            <h3>{max.title}</h3>
            <div>
              <p>{max.amountPLN.toFixed(2)}PLN</p>
              <p>{max.amountEUR.toFixed(2)}EUR</p>
            </div>
          </Fragment>
        )}
      </article>
    </StyledBiggestTransaction>
  );
};

export default BiggestTransaction;
