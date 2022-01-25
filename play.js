//require connetion and client input functions

const { connect } = require('./client');
const { setupInput } = require('./input');

//display message showing that connection is attempted
console.log("Connecting...");

//connect to the server
connect();
let x = connect();

//initialize input and output protocol
setupInput(x);

module.exports = x;