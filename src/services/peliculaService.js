const getPeliculas = async () => {
    const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTA5NWQwZDgxNzBjMWFlNGJhN2QzYjhjNjE3YjliZiIsInN1YiI6IjY1Mjg5YjdmODEzODMxMDExYjQ5OGI4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9wWV-5dZ5pQ_tiwc17sUZJt6Zr3l7IVUzBRmhNPrbZI';
  
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
  
    if (!response.ok) {
      throw new Error(`Error al obtener datos: ${response.statusText}`);
    }
  
    const peliculas = await response.json();
    return peliculas;
  };
  
  module.exports = {
    getPeliculas,
  };
  