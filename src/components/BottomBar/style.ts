import { theme } from '../../style';
import styled from 'styled-components';

export const BottomBarWrapper = styled.div`
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 100%;
  background: ${theme.light.backgroundBlack};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BottomButtonWrapper = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  color: ${theme.light.textColorWhite};

  @media screen and (max-width: 425px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-color: ${theme.light.backgroundWhite};
  border-radius: 50%;
  padding: 0 5px;
  margin-left: 10px;
  background: ${theme.light.backgroundBlack};
  color: ${theme.light.textColorWhite};
  :hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
  cursor: pointer;
`;
