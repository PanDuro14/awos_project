const alumnoService = require("../services/alumnoService");

const getAllAlumnos = async () => {
    const alumnos = await alumnoService.getAllAlumnos();
    return alumnos
};

const getOneAlumno = async (Idalumno) => {
    const alumnos = await alumnoService.getOneAlumno(Idalumno);
    return alumnos
};

const createNewAlumno = async(nombre, apellido, telefono, direccion) => {
    const alumnos = await alumnoService.createNewAlumno(nombre, apellido, telefono, direccion);
    return alumnos;
};

const updateOneAlumno = async (nombre, apellido, telefono, direccion, Idalumno) =>{
    const alumnos = await alumnoService.updateOneAlumno(nombre, apellido, telefono, direccion, Idalumno);
    return alumnos;
};

const deleteOneAlumno = async (Idalumno) =>{
    const alumnos = await alumnoService.deleteOneAlumno(Idalumno);
    return alumnos;
};

module.exports = {
    getAllAlumnos,
    getOneAlumno,
    createNewAlumno,
    updateOneAlumno,
    deleteOneAlumno,
}