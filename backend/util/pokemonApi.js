const pokemon = require('pokemontcgsdk');

async function getPokemonSet() {
    return pokemon.card.where({ supertype: 'Pokémon' });

}

module.exports = getPokemonSet;