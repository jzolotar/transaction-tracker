import styled from 'styled-components';

export const StyledTransactionForm = styled.section`
  grid-area: form;
  background: #a85cf9;
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

  form {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;

    div {
      label {
        color: #fff;
        font-weight: 400;
        letter-spacing: 1px;
      }
      input {
        width: 100%;
        border-radius: 0.3125rem;
        border: 3px solid
          ${({ valid }) => (!valid ? '#CF3333;' : 'transparent')};
        padding: 0.2rem 0;
        padding-left: 0.5rem;

        ::placeholder {
          color: ${({ valid }) => (!valid ? '#df6f6f;' : '#333')};
        }
      }
    }

    button {
      margin-top: 0.25rem;
      border-radius: 0.3125rem;
      border: 3px solid transparent;
      padding: 0.45rem 1rem;
      letter-spacing: 0.8px;
      background-color: #c4ddff;
      font-weight: 600;
      background-color: #5534a5;
      color: #6fdfdf;
      font-size: 0.95rem;
      transition: 0.5s;
      &:hover {
        border: 3px solid #f4f4f4f4;
        background-color: #6fdfdf;
        color: #f4f4f4f4;
      }
    }
  }
`;
