const getPersonajes = async () =>{
    const response = fetch('http://gateway.marvel.com/v1/public/characters?nameStartsWith=spiderman&ts=1000&apikey=254f56c30bd112a4c6ce88312131201e&hash=eb6cb5a15e9259dba85a156de37128ce'); 
    const personajes = (await response).json(); 
    return personajes; 
};

module.exports = {
    getPersonajes,
};