'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reports = void 0;

var _report = require("./report.js");

var container = document.getElementById('reports-container');
var reports = [new _report.Report("Morten", "22358794", "Telt revnet", "Stor revne i bunden af teltet", "Færdiggjort", "25-08-2019", "13:48", "", "Plads 1"), new _report.Report("Nadia", "45207831", "Højtaler spiller ikke", "Det ser ikke ud til, der er strøm", "Igangværende", "24-08-2019", "17:48", "Elektriker kommer kl 11", "Plads 105")];
exports.reports = reports;

var createReports = function createReports(arr) {
  for (var i = 0; i < arr.length; i++) {
    var reportDiv = document.createElement("div"); //div element for every report

    reportDiv.id = arr[i].id;
    var subject = document.createElement("p"); //create p element

    subject.innerHTML = arr[i].subject; //subject value from object

    reportDiv.appendChild(subject); //append to div element

    var date = document.createElement("p");
    date.innerHTML = arr[i].date;
    reportDiv.appendChild(date);
    var time = document.createElement("p");
    time.innerHTML = arr[i].time;
    reportDiv.appendChild(time);
    var headlineDescription = document.createElement("h3"); //we need a headline 

    headlineDescription.innerHTML = _report.headlines.description; //get headline from our headline-array

    reportDiv.appendChild(headlineDescription);
    var description = document.createElement("p");
    description.innerHTML = arr[i].description;
    reportDiv.appendChild(description);
    var headlineStatus = document.createElement("h3");
    headlineStatus.innerHTML = _report.headlines.status;
    reportDiv.appendChild(headlineStatus);
    var status = document.createElement("p");
    status.innerHTML = arr[i].status;
    reportDiv.appendChild(status);
    var headlineNotes = document.createElement("h3");
    headlineNotes.innerHTML = _report.headlines.notes;
    reportDiv.appendChild(headlineNotes);
    var notes = document.createElement("p");
    notes.innerHTML = arr[i].notes;
    reportDiv.appendChild(notes);
    var headlineName = document.createElement("h3");
    headlineName.innerHTML = _report.headlines.name;
    reportDiv.appendChild(headlineName);
    var name = document.createElement("p");
    name.innerHTML = arr[i].name;
    reportDiv.appendChild(name);
    var headlinePhone = document.createElement("h3");
    headlinePhone.innerHTML = _report.headlines.phone;
    reportDiv.appendChild(headlinePhone);
    var phone = document.createElement("p");
    phone.innerHTML = arr[i].phone;
    reportDiv.appendChild(phone);
    var headlineLocation = document.createElement("h3");
    headlineLocation.innerHTML = _report.headlines.location;
    reportDiv.appendChild(headlineLocation);
    var location = document.createElement("p");
    location.innerHTML = arr[i].location;
    reportDiv.appendChild(location);
    reportDiv.appendChild(document.createElement("hr"));
    container.appendChild(reportDiv);
  }
};

createReports(reports); //create all reports