import { Pokemon, TypeEffectivity, TypesEffectivity } from 'src/models/models';
import { correctedPokemonNames } from './constants';

const correctPokemonName = (pokemon: Pokemon) => {
  if (pokemon.name.endsWith('-o')) {
    return pokemon.name.charAt(0).toLocaleUpperCase() + pokemon.name.slice(1);
  } else {
    const pokemonNameArr = pokemon.name.split('-').map((namesPart) => {
      const pokemonName = namesPart.charAt(0).toLocaleUpperCase() + namesPart.slice(1);

      return pokemonName;
    });

    if (
      correctedPokemonNames
        .map((item) => {
          return item.join.find(function (name) {
            return name.name === pokemon.name;
          })?.joinValue;
        })
        .toString()
    ) {
      return pokemonNameArr.join(
        correctedPokemonNames
          .map((item) => {
            return item.join.find(function (name) {
              return name.name === pokemon.name;
            })?.joinValue;
          })
          .toString()
      );
    } else if (
      correctedPokemonNames
        .map((item) => {
          return item.cut.find(function (name) {
            return pokemon.name.includes(name.name);
          })?.name;
        })
        .toString() !== ''
    ) {
      return pokemonNameArr[0];
    } else if (pokemon.name.endsWith('jr')) {
      return pokemonNameArr.join(' ') + '.';
    } else {
      return pokemonNameArr.join(' ');
    }
  }
};

const calculateEffectivity = (
  pokemonTypesEffectivity: Array<TypesEffectivity>,
  effectivenessAgainstPokemon: Array<TypeEffectivity>
  ) => {
  pokemonTypesEffectivity.forEach((effect) => {
    effect.damage_relations.double_damage_from?.forEach((element) => {
      effectivenessAgainstPokemon.forEach((type) => {
        if (type.name === element.name) {
          const effectValue = type.value;
          Object.defineProperty(type, 'value', {
            value: effectValue * 2,
            configurable: true,
            writable: false
          });
        }
        
        return;
      });
    });

    effect.damage_relations.half_damage_from?.forEach((element) => {
      effectivenessAgainstPokemon.forEach((type) => {
        if (type.name === element.name) {
          const effectValue = type.value;
          Object.defineProperty(type, 'value', {
            value: effectValue * 0.5,
            configurable: true,
            writable: false
          });
        }
        
        return;
      });
    });

    effect.damage_relations.no_damage_from?.forEach((element) => {
      effectivenessAgainstPokemon.forEach((type) => {
        if (type.name === element.name) {
          const effectValue = type.value;
          Object.defineProperty(type, 'value', {
            value: effectValue * 0,
            configurable: true,
            writable: false
          });
        }
        
        return;
      });
    });
  });

  return effectivenessAgainstPokemon;
};

export { correctPokemonName, calculateEffectivity };
