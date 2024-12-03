const db = require("../db/queries");

const getMessages = async (req, res) => {
  const messages = await db.getMessages();
  console.log(messages);
  res.render("index", { messages });
};

const addMessage = async (req, res) => {
  const { messageAuthor, messageText } = req.body;
  const date = new Date();

  await db.addMessage(messageAuthor, messageText, date);

  res.redirect("/");
};

const getForm = (req, res) => {
  res.render("form");
};

module.exports = { addMessage, getForm, getMessages };
