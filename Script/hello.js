var express = require("express");
var app = express();
var cors = require("cors");

app.use(cors({ credentials: true, origin: true }));
app.options("*", cors()); // Allow all origin *

app.set("port", process.env.PORT || 8081);
app.use(express.static(__dirname + "/"));

app.get("/", function (request, response) {
  response.send("Hello World!");
});

app.listen(app.get("port"), function () {
  console.log("Node app is running at localhost:" + app.get("port"));
});