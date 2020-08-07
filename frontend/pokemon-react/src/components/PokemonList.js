import React from 'react';

import Card from '../UIElements/Card';
import Button from '../UIElements/Button';
import './PokemonList.css';

const PokemonList = props => {
  console.log(props.myPokemon);
  return (
    <ul className="goal-list">
      {props.myPokemon.map(pokemon => {
        return (<li className="pokemon-item">
        <Card className="pokemon-item__content">
          <div className="pokemon-item__info">
            <h2>{pokemon.name}</h2>
            <img class="center" alt="" src={pokemon.imageUrl} width="300" height="333"/>
          </div>
          <Button>
              DELETE
          </Button>
        </Card>
      </li>);
      })}
    </ul>
  );
};

export default PokemonList;
