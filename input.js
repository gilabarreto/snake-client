let connection;

const setupInput = (conn) => {

  connection = conn;

  // setup command
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // keyboard event handler
  const handleUserInput = function (key) {
    // exit key (Ctrl + C)
    if (key === '\u0003') {
      process.exit();
    } else if (key === 'w') {
      // direction keys
      conn.write("Move: up")
    } else if (key === 'a') {
      conn.write("Move: left");
    } else if (key === 's') {
      conn.write("Move: down");
    } else if (key === 'd') {
      conn.write("Move: right");
    } else if (key === '1') {
      // implement some special keys that send canned messages to the server, for everyone to see. 
      conn.write("Say: One is ok.");
    } else if (key === '2') {
      conn.write("Say: Two is fine");
    } else if (key === '3') {
      conn.write("Say: Three is enough!");
    }
  }

  // player nickname
  conn.on("connect", () => {
    conn.write("Say: VGB");
  });

  stdin.on("data", handleUserInput);

  return stdin;

};

module.exports = { setupInput };