const rickandmortyProceso = require("../procesos/rickandmortyProcesos");

const getPersonajes = async(req, res) =>{
    const personajes = await rickandmortyProceso.getPersonajes(); 
    res.send(personajes); 
}

module.exports = {
    getPersonajes, 
}