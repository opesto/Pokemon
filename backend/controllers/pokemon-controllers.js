const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
const getPokemonSet = require('../util/pokemonApi');
const Pokemon = require('../models/pokemon');

const getAllPokemon = async (req, res, next) => {
    let returnedPokemon;
    try {
        returnedPokemon = await Pokemon.find();
    } catch (err) {
        const error = new HttpError(
          'Could not find all.',
          500
        );
        return next(error);
      }

      res.json({
        pokemon : returnedPokemon.map(poke =>
          poke.toObject({ getters: true })
        )
      });
}

const deleteAll = async (req, res, next) => {
    try {
        await Pokemon.deleteMany();
    } catch (err) {
        const error = new HttpError(
          'Could not delete all.',
          500
        );
        return next(error);
      }
    
      res.status(200).json({ message: 'Deleted all pokemon.' });
}

const backup = async (req, res, next) => {
    console.log(1);
    let response;
    try {
      response = await getPokemonSet();
    } catch (error) {
      return next(error);
    }

    try {
        await Pokemon.insertMany(response);
    } catch (err) {
        console.log(err);
        const error = new HttpError(
          'Could not save deck.',
          500
        );
        return next(error);
      }
    
    res.status(200).json({ message: 'Saved all pokemon.' });
}

exports.deleteAll = deleteAll;
exports.getAllPokemon = getAllPokemon;
exports.backup = backup;