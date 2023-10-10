const pokemonService = require("../services/pokemonService");

const getPokemon = async() => {
    const pokemon = await pokemonService.getPokemon()
    return pokemon; 
};

module.exports = {
    getPokemon,
}