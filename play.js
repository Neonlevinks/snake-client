const net = require('net');

//connects to game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  //incoming data is read as text
  conn.setEncoding('utf8');

  conn.on("connect", (client) => {
    console.log(`${client} has connected!`);
  });

  conn.on('data', (data) => {
    console.log(`${data}`);
  });
  /* format of using conn.on below
  
  conn.on('event name', () => {
    //this does something
  });

  */

  return conn;
};

console.log("Connecting...");
connect();