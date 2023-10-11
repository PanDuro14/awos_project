const ipProceso = require('../procesos/ipProceso'); 

const getIp = async(req, res) =>{
    const ip = await ipProceso.getIp(); 
    res.send(ip); 
}; 

module.exports ={
    getIp,
};