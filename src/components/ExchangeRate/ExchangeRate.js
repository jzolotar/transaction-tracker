import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ExchangeRate = () => {
  const exchangeRate = useSelector((state) => state.converter);
  return (
    <StyledExchangeRate>
      <h2>Current exchange rate</h2>
      <h4>1EUR = {exchangeRate.toFixed(2)}PLN</h4>
    </StyledExchangeRate>
  );
};

const StyledExchangeRate = styled.section`
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
`;

export default ExchangeRate;
