import styled, { keyframes } from 'styled-components';

const loadingImageRotate = keyframes`
  0% {
    transform:rotate(0deg);
  }
  100% {
    transform:rotate(360deg);
  }
`;

export const LoaderWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const LoadingImage = styled.img`
  height: 10%;
  animation: ${loadingImageRotate} 5s infinite linear;
`;
