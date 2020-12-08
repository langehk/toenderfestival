'use strict';

var _overviewReports = require("./overview-reports.js");

var locationSearch = document.getElementById('locationSearch');
var statusSearch = document.getElementsByClassName('checkbox');
var filterButton = document.getElementById('filter-button');
var divFilter = document.getElementById('filterContainer');
var statusButton = document.getElementById('statusButton');
var statusFilter = document.getElementById('statusFilter'); //let filterX = document.querySelector((`#filter-button`), ':before');

var filterX = window.getComputedStyle(document.querySelector("#filter-button"), ':before').getPropertyValue('display');
console.log(filterX);

var filterQueryLocation = function filterQueryLocation(arr) {
  var filterLocation = document.getElementById('locationSearch').value;

  for (var i = 0; i < arr.length; i++) {
    var divShow = document.getElementById(arr[i].id);

    if (arr[i].location != filterLocation) {
      //Hvis det ikke er den søgte lokation
      divShow.style.display = "none"; //Display none - vis ikke
    } else {
      divShow.style.display = ""; //Ellers sættes display til "", så man kan få dem at se igen, hvis man ændrer filtrering
    }
  }
};

var filterQueryStatus = function filterQueryStatus(arr) {
  //let filterStatus = document.getElementsByClassName('items').value;
  //console.log(filterStatus);
  var inputElements = document.getElementsByClassName('checkbox');
  debugger;
  var chosenReports = [];

  for (var i = 0; i < inputElements.length; i++) {
    //For-loop gennem checkboxes
    if (inputElements[i].checked) {
      for (var y = 0; y < arr.length; y++) {
        // For-loop gennem reports
        var divHide = document.getElementById(arr[y].id);
        divHide.style.display = "none";

        if (inputElements[i].value == arr[y].status) {
          chosenReports.push(arr[y]);
        }
      }
    }

    for (var r = 0; r < chosenReports.length; r++) {
      var divShow = document.getElementById(chosenReports[r].id);
      divShow.style.display = "";
    }
  }
};

locationSearch.addEventListener('change', function () {
  filterQueryLocation(_overviewReports.reports);
});

for (var i = 0; i < statusSearch.length; i++) {
  //eventlistener på alle checkboxes
  statusSearch[i].addEventListener('click', function () {
    filterQueryStatus(_overviewReports.reports);
  });
}

var toggleStatus = function toggleStatus() {
  if (statusFilter.className == 'hidden') {
    statusFilter.setAttribute("class", "visible");
  } else {
    statusFilter.setAttribute("class", "hidden");
  }
};

var toggleFilter = function toggleFilter() {
  if (divFilter.className == 'hidden') {
    divFilter.setAttribute("class", "visible");
    filterButton.setAttribute("class", "showX");
  } else {
    divFilter.setAttribute("class", "hidden");
    filterButton.setAttribute("class", "hideX");
  }
};

filterButton.addEventListener('click', toggleFilter); //eventlistener på filter-knappen

statusButton.addEventListener('click', toggleStatus);