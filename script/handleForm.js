'use strict'

import {getLocation} from './getLocation.js';


const manipulateForm = function (e) {
  e.preventDefault();
  // læs m ajax
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function () {
      let hentet = [];
      if (this.responseText.length > 0)
          hentet = JSON.parse(this.responseText); // get and objectify
      // udvid array m indtastet
      debugger;
      let n = $('name').value;
      let p = $('phone').value;
      let t = ("0" + new Date().getHours()).slice(-2) + ":" + ("0" + new Date().getMinutes()).slice(-2); //$('timestamp').value;
      let d = ("0" + new Date().getDate()).slice(-2) + "-" + ("0" + new Date().getMonth()).slice(-2) + "-" + new Date().getFullYear();
      let s = $('subject').value;
      let l = $('location').value;
      let m = $('malfunction').value;

      let o = {
          name: n,
          phone: p,
          timestamp: t,
          datestamp: d,
          subject: s, 
          location: l,
          malfunction: m

      };
      hentet.push(o);                             // add new
      $('json').value = JSON.stringify(hentet);   // stringify
      document.forms['reportForm'].submit();      // send

  });
  oReq.open("GET", "http://www.dkexit.eu/tf/getIncidents.php");
  oReq.send();
};
const doThis = function () {
  headAndShoulders('ExamProject Dec 2020');
  $('formSubmit').addEventListener('click', manipulateForm)
  feet(2020);
};
window.addEventListener('load', doThis);

 let upload = document.getElementById("files");

// When files are uploaded, we select the uploaded files, and append the images.
upload.onchange = (event) => {
  let preview = document.getElementById('preview');

  for (let i = 0; i < event.target.files.length; i++) {
    var newImage = document.createElement("img");
    newImage.id = "upload-image" + i;
    newImage.src = URL.createObjectURL(event.target.files[i]);
    preview.appendChild(newImage);
  }
}
