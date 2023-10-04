const getPeliculas = async() =>{
    const response = fetch('https://developer.themoviedb.org/docs'); 
    const peliculas = (await response).json(); 
    return peliculas; 
}; 

module.exports = {
    getPeliculas, 
}; 