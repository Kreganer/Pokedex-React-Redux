import { theme } from '../../style';
import styled from 'styled-components';

export const TopBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  padding: 0px 350px 0 30px;
  top: 30px;
  width: 100%;
  height: 50px;
  background: ${theme.light.topBackground};
`;

export const LeftSideWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`;

export const TopBarTitle = styled.p`
  font-size: 28px;
  font-weight: 700;
`;

export const PokemonsCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.light.backgroundGrey};
  border-radius: 10px;
  margin-left: 20px;
  padding: 5px 20px;
  color: ${theme.light.textColorWhite};
`;

export const RightSideWrapper = styled.div`
  display: flex;
  justify-content: end;
  color: ${theme.light.textColorWhite};
`;
