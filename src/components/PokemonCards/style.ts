import styled, { keyframes } from 'styled-components';
import { colorsForTypes } from '../../helpers/constants';
import { theme } from '../../style';

const showPokemonSprite = keyframes`
  100% {clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)}
  85% {clip-path: polygon(0% 0%, 70% 0%, 85% 100%, 0% 100%)}
  15% {clip-path: polygon(0% 0%, 20% 0%, 35% 100%, 0% 100%)}
  0% {clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)}
`;

const hidePokemonSprite = keyframes`
  100% {clip-path: polygon(0% 0%, 100% 0%, 1000% 100%, 0% 100%)}
  85% {clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 35% 100%)}
  15% {clip-path: polygon(70% 0%, 100% 0%, 100% 100%, 85% 100%)}
  0% {clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)}
`;

const showShinyPokemonSprite = keyframes`
  0% {clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)}
  15% {clip-path: polygon(0% 0%, 70% 0%, 85% 100%, 0% 100%)}
  85% {clip-path: polygon(0% 0%, 20% 0%, 35% 100%, 0% 100%)}
  100% {clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)}
`;

const hideShinyPokemonSprite = keyframes`
  0% {clip-path: polygon(0% 0%, 100% 0%, 1000% 100%, 0% 100%)}
  15% {clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 35% 100%)}
  85% {clip-path: polygon(70% 0%, 100% 0%, 100% 100%, 85% 100%)}
  100% {clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)}
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
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  :hover :last-child {
    animation: ${showShinyPokemonSprite} 1s forwards ease-in;
  }
  :hover :first-child {
    animation: ${hidePokemonSprite} 1s forwards ease-in;
  }
`;

export const PokemonCardImage = styled.img`
  position: absolute;
  height: 100%;
  object-fit: cover;
  object-position: 0 0;
  animation: ${showPokemonSprite} 1s forwards ease-in;
`;

export const PokemonCardImageShiny = styled.img`
  position: absolute;
  height: 100%;
  animation: ${hideShinyPokemonSprite} 1s forwards ease-in;
`;

export const StyledSpan = styled.span`
  padding: 5px;
  border-radius: 0px 0px 15px 15px;
  justify-self: end;
  background: ${theme.light.greyGlass};
  color: ${theme.light.textColorWhite};
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
