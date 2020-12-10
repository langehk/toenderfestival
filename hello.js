'use strict';

var express = require("express");
var app = express();
var cors = require("cors");
var sphp = require('sphp');


app.use(cors({ credentials: true, origin: true }));
app.options("*", cors()); // Allow all origin *

app.set("port", process.env.PORT || 8081);
app.use(sphp.express('./'));
app.use(express.static('./'));

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(app.get("port"), function () {
  console.log("Node app is running at localhost:" + app.get("port"));
});