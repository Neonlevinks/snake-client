const { keyCommands } = require('./constants2')

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);


  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (`${key}` in keyCommands) {
    connection.write(`${keyCommands[key]}`);
  }
};

module.exports  = { setupInput }