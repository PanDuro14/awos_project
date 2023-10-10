const materiaProceso = require('../procesos/materiaProceso');

const getAllMaterias = async (req, res) =>{
    const materias = await materiaProceso.getAllMaterias();
    res.send(materias);
};

const getOneMateria = async(req, res) =>{
    const materias = await materiaProceso.getOneMateria(req.params.materiaId);
    res.send(materias);
};

const createNewMateria = async(req, res) =>{
    const materias = await materiaProceso.createNewMateria(req.body.nombre);
    res.send(materias);
};

const updateOneMateria = async(req, res) =>{
    const materias = await materiaProceso.updateOneMateria(req.body.nombre, req.params.materiaId);
    res.send(materias);
};

const deleteOneMateria = async(req, res) =>{
    const materias = await materiaProceso.deleteOneMateria(req.params.materiaId);
    res.send(materias);
};

module.exports = {
    getAllMaterias, 
    getOneMateria,
    createNewMateria,
    updateOneMateria,
    deleteOneMateria,
};