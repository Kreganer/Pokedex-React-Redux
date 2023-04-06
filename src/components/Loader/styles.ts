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
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingImage = styled.img`
  height: 10%;
  animation: ${loadingImageRotate} 5s infinite linear;
`;
