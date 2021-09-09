const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting...");
connect();
let x = connect();
setupInput(x);

module.exports = x;