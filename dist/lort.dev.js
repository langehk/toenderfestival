"use strict";

var _overviewReports = require("./overview-reports.js");

var _report = require("./report.js");

var readIncidents = function readIncidents() {
  // læs m ajax
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function () {
    var incidents = [];
    if (this.responseText.length > 0) incidents = JSON.parse(this.responseText); // get and objectify

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = incidents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var incident = _step.value;
        // TODO
        console.log("".concat(incident.name));

        _overviewReports.reports.push(new _report.Report("".concat(incident.name, ", ").concat(incident.phone, ", ").concat(incident.subject, ", ").concat(incident.malfunction, ", \"Ikke p\xE5begyndt\", \"25-08-2019\", \"13:48\", \"\", ").concat(incident.location, "}"))); // reports.push(new Report("Morten", "22358794", "Telt revnet", "Stor revne i bunden af teltet", "Færdiggjort", "25-08-2019", "13:48", "", "Plads 1"));

      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
  oReq.open("GET", "http://www.dkexit.eu/tf/getIncidents.php");
  oReq.send();
};

var doThis = function doThis() {
  headAndShoulders('ExamProject Dec 2020');
  //feet(2020);
  readIncidents();
};

doThis();