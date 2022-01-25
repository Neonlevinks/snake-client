//require the net module and client constants
const net = require('net');
const { IP, PORT, playerName } = require('./constants');

//connects to game server

const conn = net.createConnection({
  host: IP,
  port: PORT
});

//read all characters
const connEncode = conn.setEncoding('utf8');

//display a message on connection
const connConnect = conn.on("connect", () => {
  console.log(`${playerName} sucessfully connected to game server`);
  conn.write(`Name: ${playerName}`);

});

//show last keypress on client side
const connData = conn.on('data', (data) => {
  console.log(`${data}`);
});

//launch server
const connect = function() {
  conn;
  connEncode;
  connConnect;
  connData;

  return conn;
};

module.exports = { connect };