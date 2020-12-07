var express = require("express");
var app = express();
var cors = require("cors");
const php = require('php');

app.use(cors({ credentials: true, origin: true }));
app.options("*", cors()); // Allow all origin *

app.set("port", process.env.PORT || 8081);
app.use(express.static(__dirname + "/"));
app.set('view engine', 'php');
app.engine('php', php.__express);

app.get("/", function (request, response) {
  response.send("Hello World!");
});

app.listen(app.get("port"), function () {
  console.log("Node app is running at localhost:" + app.get("port"));
});