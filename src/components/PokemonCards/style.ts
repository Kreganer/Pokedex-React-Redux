import styled, { keyframes } from 'styled-components';
import { colorsForTypes } from '../../helpers/constants';
import { theme } from '../../style';

const hidePokemonSprite = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const showPokemonSprite = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const PokemonCard = styled.div`
  width: 50%;
  height: 80%;
  margin: 3%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const PokemonCardUp = styled.div`
  width: 80%;
  height: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${theme.light.greyGlass};
`;

export const CurrentPokemonInfo = styled.div`
  width: 100%;
  height: 20%;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${theme.light.pokemonBackground};
  color: ${theme.light.textColorWhite};
`;

export const PokemonImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PokemonCardImage = styled.img`
  width: 250px;
  height: 250px;
  margin-left: -250px;
  object-fit: cover;
  object-position: 0 0;
  animation: ${showPokemonSprite} 1s forwards normal;
  :hover {
    animation: ${hidePokemonSprite} 1s forwards normal;
  }
  background: rgba(204, 204, 204, 1);
`;

export const PokemonCardImageShiny = styled.img`
  width: 250px;
  height: 250px;
`;

export const PokemonCardBottom = styled.div`
  width: 80%;
  height: 100%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${theme.light.greyGlass};
`;

export const StatsWrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  align-items: center;
  justify-content: space-between;
  background: ${theme.light.pokemonStats};
`;

export const PokemonCardTypesWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${theme.light.textColorWhite};
`;

export const BaseStats = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.light.pokemonStats};
`;

export const StatsContainer = styled.div`
  width: 50%;
  height: 100%;
  color: ${theme.light.textColorWhite};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
