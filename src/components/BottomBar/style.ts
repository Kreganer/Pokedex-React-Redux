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
  justify-content: end;
  grid-template: 30px;
  padding-right: 30px;
`;

export const BottomButtonWrapper = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  grid-template: 15px;
  color: ${theme.light.textColorWhite};
  cursor: pointer;
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
  background: ${theme.light.backgroundBlack};
  color: ${theme.light.textColorWhite};
`;