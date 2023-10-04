const alumnoDB = require("../database/alumnoDB");

const getAllAlumnos = async() =>{
    const alumnos = await alumnoDB.getAllAlumnos(); 
    return alumnos; 
}

const getOneAlumnos = async (Idalumno) => {
    const alumnos = await alumnoDB.getOneAlumnos(Idalumno); 
    return alumnos; 
};

const deleteOneAlumnos = async (Idalumno) => {
    const alumnos = await alumnoDB.deleteOneAlumnos(Idalumno); 
    return alumnos; 
};

const createNewAlumno = async(nombre, apellido, telefono, direccion) => {
    const alumnos = await alumnoDB.createNewAlumno(nombre, apellido, telefono, direccion); 
    return alumnos; 
};

const updateOneAlumno = async(nombre, apellido, telefono, direccion) => {
    const alumnos = await alumnoDB.updateOneAlumno(nombre, apellido, telefono, direccion); 
    return alumnos; 
};

module.exports = {
    getAllAlumnos,
    getOneAlumnos, 
    createNewAlumno,
    updateOneAlumno, 
    deleteOneAlumnos, 
};
