const profesorProceso = require("../procesos/profesorProceso");

const getAllProfesores = async (req, res) => {
    const profesores = await profesorProceso.getAllProfesores();
    res.send(profesores);
};

const getOneProfesor = async(req, res) => {
    const profesores = await profesorProceso.getOneProfesor(req.params.profesorId);
    res.send(profesores);
};

const createNewProfesor = async(req, res) =>{
    const profesores = await profesorProceso.createNewProfesor (req.body.nombre, req.body.apellido, req.body.telefono, req.body.direccion, req.body.rfc);
    res.send(profesores);
};

const updateOneProfesor = async(req, res) =>{
    const profesores = await profesorProceso.updateOneProfesor (req.body.nombre, req.body.apellido, req.body.telefono, req.body.direccion, req.body.rfc, req.params.profesorId);
    res.send(profesores);
};

const deleteOneProfesor = async (req, res) => {
    const profesores = await profesorProceso.deleteOneProfesor (req.params.profesorId)
    res.send(profesores);
};



module.exports = {
    getAllProfesores,
    getOneProfesor,
    createNewProfesor,
    updateOneProfesor,
    deleteOneProfesor,

};
