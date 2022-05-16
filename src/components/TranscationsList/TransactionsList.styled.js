import styled from 'styled-components';

export const StyledTransactionsList = styled.section`
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

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 0;
      border-radius: 5px;
      background: #fff;
      h3 {
        margin-left: 0.5rem;
        font-weight: 400;
      }

      p {
        margin-right: 0.5rem;
        font-weight: 700;
      }
    }
  }
`;
