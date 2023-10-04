require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser'); 

const v1alumnoRouter = require("./v1/routers/alumnoRoutes");
const v1RickAndMorty = require("./v1/routers/rickandmortyRoutes"); 
const v1Peliculas = require("./v1/routers/peliculasRoutes"); 

const req = require("express/lib/request");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json()); 
app.use("/api/v1/alumno", v1alumnoRouter);
app.use("/api/v1/rickandmorty", v1RickAndMorty); 
app.use("/api/v1/peliculas", v1Peliculas); 

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
