const { KEY_PRESSES } = require("./constants");

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
    }
    else if (KEY_PRESSES[key]) {
      // direction keys
      conn.write(KEY_PRESSES[key])
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