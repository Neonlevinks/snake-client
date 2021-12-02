const { connect } = require('./client2');
const setUpInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoiding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);


  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
}

console.log("Connecting ...");

connect();