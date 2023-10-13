const mysql =require('mysql');

const connection = mysql.createConnection({
    host:process.env.HOST_DB,
    user:process.env.USER_DB,
    password:process.env.PASSWOR_DB,
    database:process.env.NAME_DB
});

connection.connect(error =>{
    if (error)
        throw error;
});

const getAllMaterias = async () =>{
    return new Promise(function(resolve, reject){
        const sql = 'SELECT * FROM materias';
        connection.query(sql,(error, results) =>{
            if (error){
                return reject(error);
            }
            resolve (results);
        });
    });
};

const getOneMateria = async (Idmateria) =>{
    return new Promise(function(resolve, reject){
        const sql = 'SELECT * FROM materias  WHERE idMaterias = ' + Idmateria;
        connection.query(sql,(error, results) =>{
            if (error){
                return reject(error);
            }
            resolve(results);
        });
    });
};

const createNewMateria = async (nombre)=>{
    return new Promise(function(resolve, reject){
        const  sql = "INSERT INTO materias (nombre) VALUES ('"+ nombre+"')";
        connection.query(sql,(error, results) =>{
            if(error){
                return reject(error)
            }
            resolve ("Materia Agregada");
        });
    });
};

const updateOneMateria = async (nombre, Idmateria) =>{ //NO JALA, CORREGIR
    return new Promise(function(resolve, reject){
        const sql = "UPDATE db_uta.materias SET nombre = '"+ nombre +"', WHERE idMaterias  = '" + Idmateria + "'";
        connection.query(sql,(error, results) =>{
            if (error){
                return reject(error);
            }
            resolve ("Materia Actualizada");
        });
    });
};

const deleteOneMateria = async(Idmateria) =>{
    return new Promise(function(resolve, reject){
        const sql = 'DELETE FROM materias WHERE idMaterias = '+ Idmateria;
        connection.query(sql, (error, reject) =>{
            if (error){
                return reject(error)
            }
            resolve ("Materia Eliminada");
        });
    });
};



module.exports = {
    getAllMaterias,
    getOneMateria,
    createNewMateria,
    updateOneMateria,
    deleteOneMateria,
};