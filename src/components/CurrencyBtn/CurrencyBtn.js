import { useState } from 'react';
import styled from 'styled-components';

const CurrencyBtn = () => {
  const [data, setData] = useState('PLN');

  const onClickHandler = () => {
    setData('');
  };
  return (
    <StyledButton onClick={onClickHandler}>
      {data === 'PLN' ? 'PLN' : 'EUR'}
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

  &:hover {
    background-color: #6fdfdf;
    color: #f4f4f4;
  }
`;
