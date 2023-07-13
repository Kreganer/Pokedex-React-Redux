import styled from 'styled-components';
import { colorsForTypes } from '../../helpers/constants';
import { theme } from '../../style';

export const GradientBackground = styled.div`
  background: ${theme.light.pokemonListBackgroundSecond};
`;

export const PokemonsWrapper = styled.div`
  height: 100vh;
  background: ${theme.light.pokemonListBackground};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PokemonListWrapper = styled.div`
  width: 40%;
  height: 83%;
  position: absolute;
  top: 90px;
  right: 30px;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: end;
  box-sizing: border-box;

  @media screen and (max-width: 375px) {
    width: 90%;
    top: 130px;
    right: 20px;
  }

  @media screen and (min-width: 376px) and (max-width: 425px) {
    width: 90%;
    top: 115px;
    right: 20px;
  }

  @media screen and (min-width: 426px) and (max-width: 768px) {
    width: 90%;
  }
`;

export const PokemonBox = styled.div`
  width: 80%;
  height: 80px;
  margin: 0px 10px 20px 0px;
  display: flex;
  align-items: center;
  background: ${theme.light.pokemonBackground};
  border-radius: 20px;
  transform: translateX(150%);
  transition: all 0.2s ease-in;

  :last-child {
    margin-bottom: 0;
  }

  :hover {
    box-shadow: 0px 5px 7px ${theme.light.greyGlass};
    transform: translateX(-50px);
  }

  @media screen and (max-width: 425px) {
    width: 95%;
    border: 1px solid ${theme.light.backgroundBlack};
    display: flex;
    :hover {
      box-shadow: 0px 0px 0px ${theme.light.greyGlass};
      transform: translateX(0px);
    }
  }

  @media screen and (min-width: 426px) and (max-width: 768px) {
    width: 98%;
    border: 1px solid ${theme.light.backgroundBlack};
    :hover {
      box-shadow: 0px 0px 0px ${theme.light.greyGlass};
      transform: translateX(0px);
    }
  }
`;

export const PokemonImage = styled.img`
  width: 80px;
  height: 80px;
  padding: 5px;
`;

export const PokemonInfo = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const PokemonTypes = styled.div`
  width: 40%;
  height: 30%;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${theme.light.textColorWhite};
`;

export const Type = styled.div`
  width: 100%;
  height: 100%;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: 2px solid
    ${({ color }) =>
      colorsForTypes.find(function (item) {
        return item.name === color;
      })?.background};
`;

export const NotFound = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
