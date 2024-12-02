const pool = require("./pool");

const addMessage = async (mess, author, date) => {
  await pool.query(
    "INSERT INTO messages (message, author, date) VALUES ($1, $2, $3)",
    [mess, author, date]
  );
};

module.exports = {
  addMessage,
};
