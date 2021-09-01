const IP = 'localhost';
const PORT = 50541;
const playerName = "KAN";
const keyCommands = {
  w: "Move: up",
  s: "Move: down",
  a: "Move: left",
  d: "Move: right",
  b: "Say: You\'re going down!'", 
  n: "Say: Nicely done!",
  m: "Say: I played myself..."
}

module.exports = {
  IP,
  PORT,
  playerName,
  keyCommands
}