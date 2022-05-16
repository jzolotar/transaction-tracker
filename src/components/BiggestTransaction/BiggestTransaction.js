import { StyledBiggestTransaction } from './BiggestTransaction.styled';

const BiggestTransaction = () => {
  return (
    <StyledBiggestTransaction>
      <h2>Biggest Transaction</h2>
      <article>
        <h3>Name</h3>
        <div>
          <p>360PLN</p>
          <p>360EUR</p>
        </div>
      </article>
    </StyledBiggestTransaction>
  );
};

export default BiggestTransaction;
