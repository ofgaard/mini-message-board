const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", indexRouter);

app.listen(3002, () => {
  console.log("Server running on port 3002");
});
