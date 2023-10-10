const getPeliculas = async() =>{
    const response = fetch('https://api.themoviedb.org/3/configuration'); 
    const peliculas = (await response).json(); 
    return peliculas; 
}; 

module.exports = {
    getPeliculas, 
}; 