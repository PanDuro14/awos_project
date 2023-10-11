require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const req = require("express/lib/request");

const v1alumnoRouter = require("./v1/routers/alumnoRoutes");
const v1RickAndMorty = require("./v1/routers/rickandmortyRouter");
const v1Pokemon = require("./v1/routers/pokemonroutes");
const v1profesorRouter = require("./v1/routers/profesorRoutes");
const v1materiaRouter = require("./v1/routers/materiaRoutes");
const v1Peliculas = require("./v1/routers/peliculasRoutes"); 
const v1Ip = require("./v1/routers/ipRouter");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/v1/alumno", v1alumnoRouter);
app.use("/api/v1/rickandmorty", v1RickAndMorty);
app.use("/api/v1/pokemon", v1Pokemon);
app.use("/api/v1/profesor", v1profesorRouter);
app.use("/api/v1/materia", v1materiaRouter);
app.use("/api/v1/peliculas", v1Peliculas); 
app.use("/api/v1/ip/", v1Ip);


app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT} :b`);
});
