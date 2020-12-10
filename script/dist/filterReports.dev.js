'use strict';

var _overviewReports = require("./overview-reports.js");

var _sharedFunctions = require("./sharedFunctions.js");

var locationSearch = document.getElementById('locationSearch');
var statusSearch = document.getElementsByClassName('checkbox');
var filterButton = document.getElementById('filter-button');
var divFilter = document.getElementById('filterContainer');
var statusButton = document.getElementById('statusButton');
var statusFilter = document.getElementById('statusFilter');
var searchInput = document.getElementById('reports-search');

function searchReportFunc(arr) {
  //Søgefunktion der leder i alt indhold i objekterne. arr = array med objekter
  var searchValue = document.getElementById('reports-search').value; //søgeord

  var matches = [],
      i,
      key; //key = variabelnavnet i hvert object. Fx id eller subject 

  for (i = 0; i < arr.length; i++) {
    //loop igennem vores array med objekter
    var divHide = document.getElementById(arr[i].id);
    divHide.style.display = "none"; //skjuler alle elementer 

    for (key in arr[i]) {
      //for hver objekt property
      if (arr[i][key] != null) //Så den ikke dør, hvis der er et felt, der er undefined
        {
          if (arr[i].hasOwnProperty(key) && arr[i][key].includes(searchValue) == true) //hvis objektet har property og søgeordet er i den property
            matches.push(arr[i]); //Skubber matches ind i et nyt array, vi viser bagefter
        }
    }
  }

  for (var r = 0; r < matches.length; r++) {
    //loop til at vise vores matches
    var divShow = document.getElementById(matches[r].id);
    divShow.style.display = ""; //viser vores matches             
  }

  console.log(matches);
}

var filterQueryLocation = function filterQueryLocation(arr) {
  //Filter-funktion til lokation (dropdown)
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
  //filter-funktion til status (checkboxes)
  var inputElements = document.getElementsByClassName('checkbox');
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

var hideElement = function hideElement(element) {
  //funktion til at sætte class hidden på et element
  element.setAttribute("class", "hidden");
};

var toggleFilter = function toggleFilter() {
  //toggle synlighed på filter 
  if (divFilter.className == 'hidden') {
    divFilter.setAttribute("class", "visible");
    filterButton.setAttribute("class", "showX"); //viser krydset

    searchInput.value = ""; //Søgefeltet bliver tomt igen - søgefunktionerne virker ikke sammen

    for (var r = 0; r < _overviewReports.reports.length; r++) {
      //Vi nulstiller og viser alle reports, når man klikke på filter - fordi søgefunktionerne ikke virker sammen
      var divShow = document.getElementById(_overviewReports.reports[r].id);
      divShow.style.display = "";
    }
  } else {
    divFilter.setAttribute("class", "hidden");
    filterButton.setAttribute("class", "hideX"); //skjuler krydset
  }
}; //EVENTLISTENERS


locationSearch.addEventListener('change', function () {
  //eventlistener på lokation - kalder søgefunktionen
  filterQueryLocation(_overviewReports.reports);
});

for (var i = 0; i < statusSearch.length; i++) {
  //eventlistener på alle checkboxes
  statusSearch[i].addEventListener('click', function () {
    filterQueryStatus(_overviewReports.reports);
  });
}

;
filterButton.addEventListener('click', toggleFilter); //eventlistener på filter-knappen

locationSearch.addEventListener('click', function () {
  hideElement(statusFilter); //Vi skjuler status baren, når man klikker på lokationen - man kan kun søge i en ting af gangen
});
statusButton.addEventListener('click', function () {
  (0, _sharedFunctions.toggleVisibility)(statusFilter);
});
searchInput.addEventListener('search', function () {
  searchReportFunc(_overviewReports.reports);
});