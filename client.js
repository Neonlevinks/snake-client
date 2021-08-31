const net = require('net');
//connects to game server

const conn = net.createConnection({
  host: 'localhost',
  port: 50541
});

const connEncode = conn.setEncoding('utf8');

const connConnect = conn.on("connect", (client) => {
  console.log(`${client} sucessfulyl connected to game server`);
  conn.write("Name: KAN");
 // conn.write("Move: up");
 // setInterval(() => {
 //   conn.write("Move: left");
//}, 500);


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

module.exports = connect;