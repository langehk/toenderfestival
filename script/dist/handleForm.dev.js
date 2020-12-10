'use strict';

var _getLocation = require("./getLocation.js");

var manipulateForm = function manipulateForm(e) {
  e.preventDefault(); // læs m ajax

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function () {
    var hentet = [];
    if (this.responseText.length > 0) hentet = JSON.parse(this.responseText); // get and objectify
    // udvid array m indtastet

    var n = $('name').value;
    var p = $('phone').value;
    var t = ("0" + new Date().getHours()).slice(-2) + ":" + ("0" + new Date().getMinutes()).slice(-2); //$('timestamp').value;

    var d = ("0" + new Date().getDate()).slice(-2) + "-" + ("0" + new Date().getMonth()).slice(-2) + "-" + new Date().getFullYear();
    var s = $('subject').value;
    var l = $('location').value;
    var m = $('malfunction').value;
    var o = {
      name: n,
      phone: p,
      timestamp: t,
      datestamp: d,
      subject: s,
      location: l,
      malfunction: m
    };
    hentet.push(o); // add new

    $('json').value = JSON.stringify(hentet); // stringify

    document.forms['reportForm'].submit(); // send
  });
  oReq.open("GET", "http://www.dkexit.eu/tf/getIncidents.php");
  oReq.send();
};

var doThis = function doThis() {
  headAndShoulders('ExamProject Dec 2020');
  $('formSubmit').addEventListener('click', manipulateForm);
  feet(2020);
};

window.addEventListener('load', doThis);
var upload = document.getElementById("files"); // When files are uploaded, we select the uploaded files, and append the images.

upload.onchange = function (event) {
  var preview = document.getElementById('preview');

  for (var i = 0; i < event.target.files.length; i++) {
    var newImage = document.createElement("img");
    newImage.id = "upload-image" + i;
    newImage.src = URL.createObjectURL(event.target.files[i]);
    preview.appendChild(newImage);
  }
};