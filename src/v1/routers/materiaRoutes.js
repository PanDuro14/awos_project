const express = require('express');
const router =express.Router();
const materiaController = require("../../controllers/materiaController");

router
    .get('/', materiaController.getAllMaterias)
    .get("/:materiaId", materiaController.getOneMateria)
    .post("/:materiaId", materiaController.createNewMateria)
    .patch("/:materiaId", materiaController.updateOneMateria)
    .delete("/:materiaId", materiaController.deleteOneMateria);

module.exports = router; 