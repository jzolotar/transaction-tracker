import { IoMdClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../../store';
import styled from 'styled-components';

const Transaction = ({ item, color }) => {
  const dispatch = useDispatch();

  const sign = item.amountPLN > 0 ? '+' : '-';
  return (
    <StyledTransaction color={color}>
      <h3>{item.title}</h3>
      <div>
        <p>
          <span>{sign}</span>
          {Math.abs(item.amountPLN).toFixed(2)} PLN
        </p>
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
