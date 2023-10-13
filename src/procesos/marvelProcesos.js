const marvelService = require("../services/marvelService"); 

const getPersonajes = async() => {
    const personajes = await marvelService.getPersonajes(); 
    return personajes; 
};

module.exports = {
    getPersonajes, 
}