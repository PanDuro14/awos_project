const pokemonProceso = require('../procesos/pokemonProceso');
const getPokemon = async(req, res) => {
    const pokemon = await pokemonProceso.getPokemon();
    res.send(pokemon);
};

module.exports ={
    getPokemon,
}