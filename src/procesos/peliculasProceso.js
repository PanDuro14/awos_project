const peliculasService = require ('../services/peliculaService'); 

const getPeliculas = async() =>{
    const peliculas = await peliculasService.getPeliculas(); 
    return peliculas;
}; 

module.exports = {
    getPeliculas,
}; 