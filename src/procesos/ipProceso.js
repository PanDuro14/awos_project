const ipService = require('../services/ipService');

const getIp = async () =>{
    const ip = await ipService.getIp();
    return ip;
};

module.exports = {
    getIp
};