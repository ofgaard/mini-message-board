const db = require("../db/queries");

const addMessage = async (req, res) => {
  const { messageAuthor, messageText } = req.body;
  const date = new Date();

  await db.addMessage(messageAuthor, messageText, date);

  res.redirect("/");
};

const getForm = (req, res) => {
  res.render("form");
};

module.exports = { addMessage, getForm };
