import styled from 'styled-components';
import { colorsForTypes } from '../../helpers/constants';
import { theme } from '../../style';

export const GradientBackground = styled.div`
  height: 100vh;
  margin-bottom: auto;
  background: ${theme.light.pokemonListBackgroundSecond};
`;

export const PokemonsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${theme.light.pokemonListBackground};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PokemonListWrapper = styled.div`
  width: 40%;
  height: 84.5vh;
  position: absolute;
  top: 90px;
  right: 30px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: end;
  box-sizing: border-box;

  @media screen and (max-width: 375px) {
    width: 90%;
    top: 115px;
    right: 20px;
    height: 75vh;
  }

  @media screen and (min-width: 376px) and (max-width: 425px) {
    width: 90%;
    top: 115px;
    right: 20px;
    height: 80vh;
  }

  @media screen and (min-width: 426px) and (max-width: 768px) {
    width: 90%;
    height: 83vh;
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
  transition: all 0.2s ease-in-out;

  :last-child {
    margin-bottom: 0;
  }

  :hover {
    box-shadow: 0px 5px 7px ${theme.light.greyGlass};
    transform: translateX(-50px);
  }

  @media screen and (max-width: 425px) {
    width: 95%;
    height: 200px;
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
