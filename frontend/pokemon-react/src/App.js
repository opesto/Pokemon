import React, { useState } from 'react';

import PokemonList from './components/PokemonList';
import SearchPokemon from './components/SearchPokemon';
import './App.css';
import MainHeader from './UIElements/MainHeader';

const App = () => {
  const [myPokemon, setMyPokemon] = useState([
  ]);

  const deleteHandler = async event => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/myPokemon/deleteAll', {
        method: 'Delete'
      });

      const responseData = await response.json();
      console.log(responseData);
      setMyPokemon([]);
    } catch (err) {
      console.log(err);
    }
  };

  const backupHandler = async event => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/myPokemon/backup', {
        method: 'Post'
      });

      const responseData = await response.json();
      console.log(responseData);
      setMyPokemon(myPokemon);
    } catch (err) {
      console.log(err);
    }
  };

  const searchPokemonHandler = myNewPokemon => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setMyPokemon(prevPokemon => prevPokemon.concat(myNewPokemon));
  };

  return (
    <React.Fragment>
      <MainHeader>
      <button class="buttons" onClick={deleteHandler}>
        Delete
      </button>
      <h1 className="main-navigation__title">
        My Pokemon
      </h1>
      <button class="buttons" onClick={backupHandler}>
        Backup
      </button>
    </MainHeader>
      <div className="search">
        <h2>search</h2>
        <SearchPokemon onAddSearchedPokemon={searchPokemonHandler} />
        <PokemonList myPokemon={myPokemon} />
      </div>
    </React.Fragment>
  );
};

export default App;
