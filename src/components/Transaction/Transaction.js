import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransaction } from '../../store';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';

const Transaction = ({ item, color }) => {
  const dispatch = useDispatch();
  const currency = useSelector((store) => store.currency);

  // display if transaction is an income or outcome
  const sign = item.amountPLN > 0 ? '+' : '-';
  const transactionValue =
    currency === 'PLN'
      ? Math.abs(item.amountPLN).toFixed(2)
      : Math.abs(item.amountEUR).toFixed(2);

  return (
    <StyledTransaction color={color}>
      <h3>{item.title}</h3>
      <div>
        <NumberFormat
          value={transactionValue}
          displayType={'text'}
          thousandSeparator={true}
          prefix={''}
          renderText={(transactionValue) => (
            <p>
              <span>{sign}</span>
              {transactionValue} {currency}
            </p>
          )}
        />

        {/* {currency === 'PLN' && `${Math.abs(item.amountPLN).toFixed(2)} PLN`}
          {currency === 'EUR' && `${Math.abs(item.amountEUR).toFixed(2)} EUR`} */}

        <button onClick={() => dispatch(deleteTransaction(item))}>
          <IoMdClose size={20} />
        </button>
      </div>
    </StyledTransaction>
  );
};

export default Transaction;

const StyledTransaction = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-radius: 5px;
  background: #fff;
  background-color: #5534a5;
  position: relative;
  cursor: pointer;
  transition: transform 150ms ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06);
  }
  h3 {
    margin-left: 0.5rem;
    font-weight: 400;
    color: ${({ color }) => color};
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      margin-right: 0.5rem;
      font-weight: 700;
      color: ${({ color }) => color};
    }
    button {
      width: 25px;
      height: auto;
      border: none;
      background-color: transparent;
      color: #fff;

      &:hover {
        color: red;
      }
    }
  }
`;
