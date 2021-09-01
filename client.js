const net = require('net');
const { IP, PORT, playerName } = require('./constants');
//connects to game server

const conn = net.createConnection({
  host: IP,
  port: PORT
});

const connEncode = conn.setEncoding('utf8');

const connConnect = conn.on("connect", (client) => {
  console.log(`${client} sucessfulyl connected to game server`);
  conn.write(`Name: ${playerName}`);

});

const connData = conn.on('data', (data) => {
  console.log(`${data}`);
});



const connect = function () {
  conn; 
  connEncode; 
  connConnect;
  connData;

  return conn;
};

module.exports = { connect };