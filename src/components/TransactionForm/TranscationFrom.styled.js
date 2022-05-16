import styled from 'styled-components';

export const StyledTransactionForm = styled.section`
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
      }
      input {
        width: 100%;
      }
    }

    button {
      margin-top: 0.25rem;
      border-radius: 0.3125rem;
      border: transparent;
      padding: 0.45rem 1rem;
      background-color: #c4ddff;
    }
  }
`;
