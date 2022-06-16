const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {

  // connection command
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // connection stablished
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  // message from the server
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  // snake initials
  conn.on("connect", () => {
    conn.write(`Name: VGB`);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };