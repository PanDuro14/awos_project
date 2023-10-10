const express = require('express');
const router = express.Router();
const profesorController = require("../../controllers/profesorController");

router
    .get('/', profesorController.getAllProfesores)
    .get("/:profesorId", profesorController.getOneProfesor)
    .post("/:profesorId", profesorController.createNewProfesor)
    .patch("/:profesorId", profesorController.updateOneProfesor)
    .delete("/:profesorId", profesorController.deleteOneProfesor);


module.exports = router;