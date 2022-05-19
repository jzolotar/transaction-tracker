import styled from 'styled-components';

export const Loader = styled.div`
  margin: 0 auto;
  border: 16px solid #3f3f3f;
  border-top: 16px solid #5534a5;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
