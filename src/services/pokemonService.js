const getPokemon = async() =>{
    const response = fetch('https://pokeapi.co/api/v2/pokemon');
    const pokemon = (await response).json();
    return pokemon;
};

module.exports = {
    getPokemon,
}