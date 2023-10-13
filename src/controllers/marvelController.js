const marvelProceso = require("../procesos/marvelProcesos");

const getPersonajes = async(req, res) =>{
    const personajes = await marvelProceso.getPersonajes(); 
    res.send(personajes); 
}

module.exports = {
    getPersonajes, 
}