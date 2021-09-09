const { keyCommands } = require('./constants');
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);

  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (`${key}` in keyCommands) {
    connection.write(`${keyCommands[key]}`);
  }
};

module.exports = { setupInput };