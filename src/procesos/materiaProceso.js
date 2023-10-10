const materiaService = require("../services/materiaService");

const getAllMaterias = async () =>{
    const materias = await materiaService.getAllMaterias();
    return materias;
};

const getOneMateria = async (Idmateria) =>{
    const materias = await materiaService.getOneMateria(Idmateria);
    return materias;
};

const createNewMateria = async (nombre) =>{
    const materias = await materiaService.createNewMateria(nombre);
    return materias;
};

const updateOneMateria = async(nombre, Idmateria) =>{
    const materias = await materiaService.updateOneMateria(nombre, Idmateria);
    return materias;
};

const deleteOneMateria = async(Idmateria) =>{
    const materias = await materiaService.deleteOneMateria(Idmateria);
    return materias;
};



module.exports = {
    getAllMaterias, 
    getOneMateria,
    createNewMateria,
    updateOneMateria,
    deleteOneMateria,
};