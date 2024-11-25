const { Router } = require("express");
const { getMessages } = require("../controllers/indexController.js");
const { addMessage, getForm } = require("../controllers/formController.js");

const indexRouter = Router();

indexRouter.get("/", getMessages);
indexRouter.get("/new", getForm);
indexRouter.post("/new", addMessage);
module.exports = indexRouter;
