const nodemon = require("nodemon");
const profesorService = require("../services/profesorService");

const getAllProfesores = async () => {
    const profesores = await profesorService.getAllProfesores();
    return profesores;
};

const getOneProfesor = async (Idprofesor) => {
    const profesores = await profesorService.getOneProfesor(Idprofesor);
    return profesores;
};

const createNewProfesor = async (nombre, apellido, telefono, direccion, rfc) =>{
    const profesores = await profesorService.createNewProfesor(nombre, apellido, telefono, direccion, rfc);
    return profesores;
};

const updateOneProfesor = async (nombre, apellido, telefono, direccion, rfc, Idprofesor) => {
    const profesores = await profesorService.updateOneProfesor(nombre, apellido, telefono, direccion, rfc, Idprofesor);
    return profesores;
};

const deleteOneProfesor = async (Idprofesor) => {
    const profesores = await profesorService.deleteOneProfesor (Idprofesor);
    return profesores;
};



module.exports = {
    getAllProfesores,
    getOneProfesor,
    createNewProfesor,
    updateOneProfesor,
    deleteOneProfesor,
}