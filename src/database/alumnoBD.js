const mysql =require('mysql');

const connection = mysql.createConnection({
    host:process.env.HOST_BD,
    user:process.env.USER_BD,
    password:process.env.PASSWOR_BD,
    database:process.env.NAME_BD
});

connection.connect(error =>{
    if (error)
        throw error;
    console.log('La conexión con MySQL es exitosa');
});

const getAllAlumnos = async () =>{
    return new Promise (function(resolve, reject){
        const sql = 'select * from alumnos';
        connection.query(sql, (error, results) =>{

            if(error){
                return reject(error);
            }
            resolve(results);
        });
    });
};

const getOneAlumno = async(Idalumno) =>{
    return new Promise(function(resolve, reject){
        const sql = 'SELECT * FROM alumnos WHERE idAlumnos = ' + Idalumno;
        connection.query(sql,(error, results) =>{

            if(error){
                return reject(error);
            }
            resolve(results);
        });
    });
};

const createNewAlumno = async(nombre, apellido, telefono, direccion) =>{
    return new Promise(function(resolve, reject){
        const sql = "INSERT INTO alumnos (nombre, apellido, telefono, direccion) VALUES ('"+ nombre +"', '"+ apellido +"', '"+ telefono +"', '"+ direccion +"')";
        connection.query(sql, (error, results)=>{

            if(error){
                return reject (error);
            }
            resolve("Alumno Agregado");
        });
    });
};

const updateOneAlumno = async(nombre, apellido, telefono, direccion, Idalumno) =>{
    return new Promise(function(resolve, reject){
        //const sql = "UPDATE alumnos SET nombre = '"+ nombre +"', apellido = '"+ apellido +"', telefono = '"+ telefono +"', direccion = '"+ direccion +"' WHERE idAlumnos = '"+ Idalumno
        const sql = "UPDATE alumnos SET nombre = '"+ nombre +"', apellido = '"+ apellido +"', telefono = '"+ telefono +"', direccion = '"+ direccion +"' WHERE idAlumnos = '"+ Idalumno + "'";
        connection.query(sql, (error, results)=>{

            if(error){
                return reject (error);
            }
            resolve ("Alumno Actualizado");
        });
    });
};

const deleteOneAlumno = async (Idalumno) =>{
    return new Promise(function(resolve, reject){
        const sql = 'DELETE FROM alumnos WHERE idAlumnos = '+ Idalumno;
        connection.query(sql,(error, results)=>{

            if (error){
                return reject (error);
            }
            resolve ("Alumno Eliminado");
        });
    });
};

module.exports={
    getAllAlumnos,
    getOneAlumno,
    createNewAlumno,
    updateOneAlumno,
    deleteOneAlumno,
}