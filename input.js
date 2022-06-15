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

    if (key === '\u0003') {
      process.exit();
    } else if (key === 'w') {
      conn.write("Move: up")
    } else if (key === 'a') {
      conn.write("Move: left");
    } else if (key === 's') {
      conn.write("Move: down");
    } else if (key === 'd') {
      conn.write("Move: right");
    }
  }

  stdin.on("data", handleUserInput);

  return stdin;

};

module.exports = { setupInput };