const mysql = require ('mysql'); 

const connection = mysql.createConnection({
    host:process.env.HOST_DB,
    user:process.env.USER_DB, 
    password:process.env.PASSWORD_DB, 
    database:process.env.NAME_DB
}); 

connection.connect(error =>{
    if (error)
        throw error; 
    console.log('La conexion de la db con mysql es correcta :D'); 
}); 

const getAllAlumnos = async() =>{
    return new Promise(function(resolve, reject){
        const sql = 'select * from alumnos'; 
        connection.query(sql, (error, results) =>{
            if (error){
                return reject(error); 
            }
            resolve (results);
        });
    });
}; 

const getOneAlumno = async (Idalumno) => {
    return new Promise (function(resolve, reject){
        const sql = ('SELECT * FROM aws_project.alumnos where idAlumnos =' + Idalumno); 
        connection.query(sql,(error, results) =>{
            if (error){
                return reject(error); 
            }
            resolve(results); 
        }); 
    }); 
}; 

const createNewAlumno= async (nombre, apellido, telefono, direccion) => {
    return new Promise (function(resolve, reject){
        const sql = ("insert into aws_project.alumnos (nommbre, apellido, telefono, direccion) values ('"+ nombre +"', '" + apellido + "', '" + telefono +"', '" + direccion +"',)");
        connection.query(sql, (error, results) =>{
            if (error){
                return reject(error); 
            }
            resolve(results); 
        });  
    }); 
}; 


const updateOneAlumno = async (Idalumno) =>{
    return new Promise (function(resolve, reject){
        const sql = ("update aws_project.alumnos set nombre = '"+ nombre +"', apellido = '"+ apellido + "', telefono = '"+ telefono + "', direccion = '" + direccion +"' where idAlumnos = " + Idalumno); 
        connection.query(sql, (error, results) =>{
            if (error){
                return reject(error); 
            }
            resolve(results); 
        });  
    }); 
}; 


const deleteOneAlumno = async(Idalumno) =>{
    return new Promise (function(resolve, reject){
        const sql = ('delete from aws_project.alumnos where idAlumno =' +Idalumno); 
        connection.query(sql, (error, results) =>{
            if (error){
                return reject(error); 
            }
            resolve("Alumno eliminado"); 
        });  
    }); 
}; 

module.exports = {
    getAllAlumnos, 
    getOneAlumno, 
    createNewAlumno,
    updateOneAlumno, 
    deleteOneAlumno,
    
}; 