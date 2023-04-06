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
  height: 85vh;
  position: absolute;
  top: 90px;
  right: 30px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: end;
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
  :hover {
    box-shadow: 0px 5px 7px ${theme.light.greyGlass};
    transform: translateX(-50px);
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
  background: ${({ color }) =>
    colorsForTypes.find(function (item) {
      return item.name === color;
    })?.background};
`;
