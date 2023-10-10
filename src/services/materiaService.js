const materiaBD = require('../database/materiaBD');

const getAllMaterias = async () =>{
    const materias = await materiaBD.getAllMaterias();
    return materias;
};

const getOneMateria = async (Idmateria) =>{
    const materias = await materiaBD.getOneMateria(Idmateria);
    return materias;
};

const createNewMateria = async (nombre) =>{
    const materias = await materiaBD.createNewMateria(nombre);
    return materias;
};

const updateOneMateria = async(nombre, Idmateria) =>{
    const materias = await materiaBD.updateOneMateria(nombre, Idmateria);
    return materias;
};

const deleteOneMateria = async(Idmateria) =>{
    const materias = await materiaBD.deleteOneMateria(Idmateria);
    return materias;
};

module.exports = {
    getAllMaterias, 
    getOneMateria,
    createNewMateria,
    updateOneMateria,
    deleteOneMateria,
};