const { connect } = require('./client2');
const { setupInput } = require('./input2');


console.log("Connecting ...");

let connectionObject = connect();
setupInput(connectionObject);
