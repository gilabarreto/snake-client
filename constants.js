// DESCRIPTION: constants file to export all the constants used in the app.

// player IP
const IP = "localhost";

// player PORT
const PORT = "50541";

// keyboard event handler
const w = "Move: up";
const s = "Move: down";
const a = "Move: left";
const d = "Move: right";
const e = "Say: eh?";
const q = "Say: what's up?";
const KEY_PRESSES = { w, s, a, d, e, q };

module.exports = {
  IP,
  PORT,
  KEY_PRESSES,
};