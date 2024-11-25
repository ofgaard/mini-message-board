const messages = require("../models/Message");

const addMessage = (req, res) => {
  const { messageAuthor, messageText } = req.body;

  messages.push({
    text: messageText,
    user: messageAuthor,
    added: new Date(),
  });

  res.redirect("/");
};

const getForm = (req, res) => {
  res.render("form");
};

module.exports = { addMessage, getForm };
