const peliculasProceso = require('../procesos/peliculasProceso'); 

const getPeliculas = async(req, res) =>{
    const peliculas = await peliculasProceso.getPeliculas(); 
    res.send(peliculas); 
}; 

module.exports ={
    getPeliculas,
};