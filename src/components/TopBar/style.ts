import { theme } from '../../style';
import styled from 'styled-components';

export const TopBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  padding: 0px 100px 0 30px;
  top: 30px;
  width: 100%;
  height: 50px;
  background: ${theme.light.topBackground};

  @media screen and (max-width: 425px) {
    padding: 0px 25px 0 30px;
    top: 10px;
    height: max-content;
    flex-direction: column;
  }

  @media screen and (min-width: 426px) and (max-width: 768px) {
    padding: 0px 25px 0 25px;
  }
`;

export const LeftSideWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 425px) {
    width: 100%;
  }
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
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${theme.light.textColorWhite};

  @media screen and (max-width: 425px) {
    width: 100%;
  }

  @media screen and (min-width: 426px) and (max-width: 768px) {
    width: 40%;
  }
`;
