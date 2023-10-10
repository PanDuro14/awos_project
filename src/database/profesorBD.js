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
});

const getAllProfesores = async () => {
    return new Promise(function(resolve, reject){
        const sql = 'SELECT * FROM profesores';
        connection.query(sql,(error, results) =>{

            if (error){
                return reject(error);
            }
            resolve(results);
        });
    });
};

const getOneProfesor = async (Idprofesor) => {
    return new Promise(function(resolve, reject){
        const sql = 'SELECT * FROM profesores WHERE idProfesores = ' + Idprofesor;
        connection.query(sql, (error, results) =>{

            if (error){
                return reject (error)
            }
            resolve (results);
        });
    });
};

const createNewProfesor = async (nombre, apellido, telefono, direccion, rfc) => {
    return new Promise(function(resolve, reject){
        const sql = "INSERT INTO profesores (nombre, apellido, telefono, direccion, RFC) VALUES ('"+ nombre +"', '"+ apellido +"', '"+ telefono +"', '"+ direccion +"', '"+ rfc +"')";
        connection.query(sql, (error, results) =>{

            if (error){
                return reject (error)
            }
            resolve ("Profesor Agregado");
        });
    });
};

const updateOneProfesor = async(nombre, apellido, telefono, direccion, rfc, Idprofesor) =>{
    return new Promise(function(resolve, reject){
        const sql = "UPDATE profesores SET nombre = '"+ nombre +"', apellido = '"+ apellido +"', telefono = '"+ telefono +"', direccion = '"+ direccion +"', RFC = '"+ rfc + "' WHERE idProfesores = '"+ Idprofesor + "'";
        connection.query(sql, (error, results)=>{

            if(error){
                return reject (error)
            }
            resolve ("Profesor Actualizado"); //NO SALE ESTE MENSAJE EN POSTMAN, RESOLVER
        });
    });
};

const deleteOneProfesor = async (Idprofesor) =>{
    return new Promise(function(resolve, reject){
        const sql = 'DELETE FROM profesores WHERE idProfesores = '+ Idprofesor;
        connection.query(sql,(error, results)=>{

            if (error){
                return reject (error);
            }
            resolve ("Profesor Eliminado");
        });
    });
};




module.exports = {
    getAllProfesores,
    getOneProfesor,
    createNewProfesor,
    updateOneProfesor,
    deleteOneProfesor,
}
