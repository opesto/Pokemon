import React, { useState } from 'react';

import './SearchPokemon.css';

const SearchPokemon = props => {
  
  const searchSubmitHandler = async event => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/myPokemon', {
        method: 'GET'
      });

      const responseData = await response.json();
      console.log(responseData);
      props.onAddSearchedPokemon(responseData.pokemon);
    } catch (err) {
      console.log(err);
    }

    setEnteredText('');


  };
  
  const [enteredText, setEnteredText] = useState('');

  const textChangeHandler = event => {
    setEnteredText(event.target.value);
  };

  return (
    <form className="new-pokemon" onSubmit={searchSubmitHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button class="buttons" type="submit">Search Pokemon</button>
    </form>
  );
};

export default SearchPokemon;
