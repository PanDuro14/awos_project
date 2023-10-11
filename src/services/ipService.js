const getIp = async ()=>{
    const response = fetch('http://ipwho.is/');
    const ip = (await response).json();
    return ip;
};

module.exports = {
    getIp,
};