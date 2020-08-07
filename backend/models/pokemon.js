const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
    id: { type: String},
    name: { type: String},
    nationalPokedexNumber: { type: Number},
    imageUrl: { type: String},
    subtype: { type: String },
    supertype: { type: String },
    ability: { type: Object },
    ancientTrait: { type: Object },
    hp: { type: String },
    number: { type: String },
    artist: { type: String},
    rarity: { type: String},
    series: { type: String },
    set: { type: String },
    setCode: { type: String },
    retreatCost: [{ type: String }],
    text: [{ type: String }],
    types: [{ type: String }],
    attacks: [{ type: Object }],
    weaknesses: [{ type: Object }],
    resistances: [{ type: Object}],
    convertedRetreatCost: { type: Number}

    
});

pokemonSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Pokemon', pokemonSchema);