const express = require('express');
const { check } = require('express-validator');

const pokemonControllers = require('../controllers/pokemon-controllers');

const router = express.Router();

router.get('/', pokemonControllers.getAllPokemon);

router.delete('/deleteAll', pokemonControllers.deleteAll);

router.post('/backup', pokemonControllers.backup);

module.exports = router;