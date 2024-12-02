const db = require("../db/queries");

const getMessages = async (req, res) => {
  const messages = await db.getMessages();
  console.log(messages);
  res.render("/", { messages });
};
module.exports = { getMessages };
