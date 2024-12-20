const pool = require("./pool");

const addMessage = async (mess, author, date) => {
  console.log("Inserting message:", mess, author, date);
  await pool.query(
    "INSERT INTO messages (message, author, date) VALUES ($1, $2, $3)",
    [mess, author, date]
  );
};

const getMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");

  return rows;
};

const deleteAllMessages = async () => {
  await pool.query("DELETE FROM messages");
};

module.exports = {
  addMessage,
  getMessages,
  deleteAllMessages,
};
