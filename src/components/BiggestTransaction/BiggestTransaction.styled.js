import styled from 'styled-components';

export const StyledBiggestTransaction = styled.section`
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

    h3 {
      margin-top: 0.6rem;
    }
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    p {
      text-align: center;
      border: 1px solid #333;
      border-radius: 5px;
      padding: 0.5rem 2rem;
    }
    /* &::after {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      height: 100%;
      border: 1px solid red;
    } */
  }
`;
