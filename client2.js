const net = require ("net");


const connect = () => {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log('Your snake is in the game!');
    conn.write("Name: KEV");
    setTimeout(() => {
      conn.write("Move: up");
    }, 100);
    setInterval(() => {
      conn.write("Move: up");
    }, 500);

  })
  return conn;
};

module.exports = { connect };