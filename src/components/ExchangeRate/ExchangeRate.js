import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ExchangeRate = () => {
  const exchangeRate = useSelector((state) => state.converter);
  const loading = useSelector((state) => state.loading);

  return (
    <StyledExchangeRate>
      <h2>Current exchange rate</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <h4>1EUR = {exchangeRate.toFixed(2)}PLN</h4>
      )}
    </StyledExchangeRate>
  );
};

const StyledExchangeRate = styled.section`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);

  h2 {
    margin-bottom: 1rem;
    position: relative;
    font-weight: 400;
    letter-spacing: 1.5px;
    &::after {
      position: absolute;
      top: 28px;
      left: 0;
      width: 100%;
      content: '';
      border: 1px solid #000;
      opacity: 0.4;
    }
  }
  h4 {
    color: #5534a5;
  }

  p {
    color: #5534a5;
  }
`;

export default ExchangeRate;
