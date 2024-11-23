const { Router } = require("express");
const { getMessages } = require("../controllers/indexController.js");

const indexRouter = Router();

indexRouter.get("/", getMessages);

module.exports = indexRouter;
