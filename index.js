const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(3002, () => {
  console.log("Server running on port 3002");
});
