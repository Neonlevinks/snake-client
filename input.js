const { keyCommands } = require('./constants');

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    } else if (`${key}` in keyCommands) {
      connection.write(`${keyCommands[key]}`)
    }
  })

  return stdin;
};

module.exports = { setupInput };