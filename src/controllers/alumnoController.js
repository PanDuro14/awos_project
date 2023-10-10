const alumnoProceso =require('../procesos/alumnoProceso');

const getAllAlumnos = async(req, res) =>{
    const alumnos = await alumnoProceso.getAllAlumnos();
    res.send(alumnos);
};

const getOneAlumno = async(req,res) =>{
    const alumnos = await alumnoProceso.getOneAlumno(req.params.alumnoId);
    res.send(alumnos);
};

const createNewAlumno = async(req,res) =>{
    const alumnos = await alumnoProceso.createNewAlumno(req.body.nombre, req.body.apellido, req.body.telefono, req.body.direccion);
    res.send(alumnos);
};

const updateOneAlumno =async(req, res) =>{
    const alumnos = await alumnoProceso.updateOneAlumno(req.body.nombre, req.body.apellido, req.body.telefono, req.body.direccion, req.params.alumnoId);
    res.send(alumnos);
};

const deleteOneAlumno = async(req, res) =>{
    const alumnos = await alumnoProceso.deleteOneAlumno(req.params.alumnoId);
    res.send(alumnos);
};

module.exports={
    getAllAlumnos,
    getOneAlumno,
    createNewAlumno,
    updateOneAlumno,
    deleteOneAlumno,
};