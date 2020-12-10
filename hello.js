'use strict';
/*
 * https://stackoverflow.com/questions/6542169/execute-php-scripts-within-node-js-web-server
 */

var express = require('express');
var sphp = require('sphp');

var app = express();
var server = app.listen(8080);

app.use(sphp.express('./'));
app.use(express.static('./'));

console.log("Server listening!"); 


/*var express = require("express");
var app = express();
var cors = require("cors");


app.use(cors({ credentials: true, origin: true }));
app.options("*", cors()); // Allow all origin *

app.set("port", process.env.PORT || 8081);
app.use(express.static(__dirname + "/"));

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(app.get("port"), function () {
  console.log("Node app is running at localhost:" + app.get("port"));
});*/