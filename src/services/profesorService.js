const profesorBD = require('../database/profesorBD');

const getAllProfesores  = async() => {
    const profesores = await profesorBD.getAllProfesores();
    return profesores
};

const getOneProfesor = async(Idprofesor) => {
    const profesores = await profesorBD.getOneProfesor(Idprofesor);
    return profesores;
};

const createNewProfesor = async (nombre, apellido, telefono, direccion, rfc) => {
    const profesores = await profesorBD.createNewProfesor(nombre, apellido, telefono, direccion, rfc);
    return profesores;
};

const updateOneProfesor = async (nombre, apellido, telefono, direccion, rfc, Idprofesor) => {
    const profesores = await profesorBD.updateOneProfesor(nombre, apellido, telefono, direccion, rfc, Idprofesor);
    return profesores;
};

const deleteOneProfesor = async (Idprofesor) => {
    const profesores = await profesorBD.deleteOneProfesor(Idprofesor);
    return profesores;
};

module.exports = {
    getAllProfesores,
    getOneProfesor,
    createNewProfesor,
    updateOneProfesor,
    deleteOneProfesor,
};

