const messages = require("../models/Message");

const getMessages = (req, res) => {
  res.render("index", { messages });
};

module.exports = { getMessages };
