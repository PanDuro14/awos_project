const alumnoBD = require('../database/alumnoBD');

const getAllAlumnos = async () =>{
    const alumnos = await alumnoBD.getAllAlumnos();
    return alumnos;
};

const getOneAlumno = async (Idalumno) =>{
    const alumnos = await alumnoBD.getOneAlumno(Idalumno);
    return alumnos;
};

const createNewAlumno = async (nombre, apellido, telefono, direccion) => {
    const alumnos = await alumnoBD.createNewAlumno(nombre, apellido, telefono, direccion);
    return alumnos;
};

const updateOneAlumno = async (nombre, apellido, telefono, direccion, Idalumno) =>{
    const alumnos = await alumnoBD.updateOneAlumno(nombre, apellido, telefono, direccion, Idalumno);
    return alumnos
};

const deleteOneAlumno = async (Idalumno) =>{
    const alumnos = await alumnoBD.deleteOneAlumno(Idalumno);
    return alumnos;
};


module.exports = {
    getAllAlumnos,
    getOneAlumno,
    createNewAlumno,
    updateOneAlumno,
    deleteOneAlumno,
};