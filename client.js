const net = require("net");

// establishes a connection with the game server
const connect = function () {
 
  // connection command
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: "50541",
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
    conn.write("Name: VGB");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };