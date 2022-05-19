import styled from 'styled-components';

export const StyledBiggestTransaction = styled.section`
  grid-area: biggest-transaction;
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

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    p {
      width: 100%;
      color: #5534a5;
    }

    h3 {
      margin-top: 0.6rem;
    }
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    position: relative;

    p {
      width: unset;
      text-align: center;
      border: 1px solid #333;
      border-radius: 5px;
      padding: 0.5rem 2rem;
      background: #6fdfdf;
      font-weight: 600;
    }
  }
`;
