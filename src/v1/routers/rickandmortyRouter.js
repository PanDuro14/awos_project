const express = require('express');
const router = express.Router();
const rickController = require("../../controllers/rickandmortyController");

router
    .get('/', rickController.getPersonajes);

module.exports = router;