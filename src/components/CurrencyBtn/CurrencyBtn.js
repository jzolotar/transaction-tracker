import { useDispatch, useSelector } from 'react-redux';
import { setCurrency } from '../../store';

import styled from 'styled-components';

const CurrencyBtn = () => {
  const currency = useSelector((state) => state.currency);
  const dispatch = useDispatch();

  return (
    <StyledButton
      onClick={() => dispatch(setCurrency(currency === 'PLN' ? 'EUR' : 'PLN'))}
    >
      {currency === 'PLN' ? 'PLN' : 'EUR'}
    </StyledButton>
  );
};

export default CurrencyBtn;

const StyledButton = styled.button`
  border: transparent;
  padding: 0 0.5rem;
  border-radius: 5px;
  background-color: #f4f4f4;
  color: #a85cf9;
  font-weight: 700;
  font-size: 1.7rem;
  transition: 0.5s;

  &:hover {
    background-color: #6fdfdf;
    color: #f4f4f4;
  }
`;
