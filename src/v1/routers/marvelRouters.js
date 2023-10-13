const express = require('express'); 
const router = express.Router(); 
const marvelController = require("../../controllers/marvelController"); 

router
    .get('/', marvelController.getPersonajes); 
    
module.exports = router;