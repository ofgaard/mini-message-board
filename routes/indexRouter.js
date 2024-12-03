const { Router } = require("express");
const {
  addMessage,
  getForm,
  getMessages,
} = require("../controllers/formController.js");

const indexRouter = Router();

indexRouter.get("/", getMessages);
indexRouter.get("/new", getForm);
indexRouter.post("/new", addMessage);

module.exports = indexRouter;
