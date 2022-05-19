import { StyledBiggestTransaction } from './BiggestTransaction.styled';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import NumberFormat from 'react-number-format';

const BiggestTransaction = () => {
  const transactions = useSelector((state) => state.transactions);
  const currency = useSelector((state) => state.currency);

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
              <NumberFormat
                value={Math.abs(max.amountPLN).toFixed(2)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={''}
                renderText={(value) => (
                  <p>
                    <span>{sign}</span>
                    {value} PLN
                  </p>
                )}
              />
              <NumberFormat
                value={Math.abs(max.amountEUR).toFixed(2)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={''}
                renderText={(value) => (
                  <p>
                    <span>{sign}</span>
                    {value} EUR
                  </p>
                )}
              />
            </div>
          </Fragment>
        )}
      </article>
    </StyledBiggestTransaction>
  );
};

export default BiggestTransaction;
