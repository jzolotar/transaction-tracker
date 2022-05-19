import { StyledBiggestTransaction } from './BiggestTransaction.styled';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

const BiggestTransaction = () => {
  const transactions = useSelector((state) => state.transactions);

  let max = null;
  let sign = '';
  if (transactions.length !== 0) {
    //find object with biggest transaction
    max = transactions.reduce((prev, current) =>
      prev.amountPLN > current.amountPLN ? prev : current
    );
    sign = max.amountPLN > 0 ? '+' : '-';
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
              <p>
                <span>{sign}</span>
                {Math.abs(max.amountPLN).toFixed(2)}PLN
              </p>
              <p>
                <span>{sign}</span>
                {Math.abs(max.amountEUR).toFixed(2)}EUR
              </p>
            </div>
          </Fragment>
        )}
      </article>
    </StyledBiggestTransaction>
  );
};

export default BiggestTransaction;
