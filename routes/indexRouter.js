const { Router } = require("express");
const {
  addMessage,
  getForm,
  getMessages,
  deleteMessages,
} = require("../controllers/formController.js");

const indexRouter = Router();

indexRouter.get("/", getMessages);
indexRouter.get("/new", getForm);
indexRouter.post("/new", addMessage);
indexRouter.get("/delete", deleteMessages);

module.exports = indexRouter;
