'use strict';

import {reports} from './overview-reports.js';
import {toggleVisibility} from './sharedFunctions.js';

let locationSearch = document.getElementById('locationSearch');
let statusSearch = document.getElementsByClassName('checkbox');

let filterButton = document.getElementById('filter-button');
let divFilter = document.getElementById('filterContainer');

let statusButton = document.getElementById('statusButton');
let statusFilter = document.getElementById('statusFilter');

let searchInput = document.getElementById('reports-search'); 

function searchReportFunc(arr){ //Søgefunktion der leder i alt indhold i objekterne. arr = array med objekter

    let searchValue = document.getElementById('reports-search').value; //søgeord
    let matches = [], i, key; //key = variabelnavnet i hvert object. Fx id eller subject 

    for( i = 0; i < arr.length; i++ ){ //loop igennem vores array med objekter

        let divHide = document.getElementById(arr[i].id); 
        divHide.style.display = "none"; //skjuler alle elementer 

        for( key in arr[i] ){ //for hver objekt property
            
            if(arr[i][key] != null) //Så den ikke dør, hvis der er et felt, der er undefined
            {
                if(arr[i].hasOwnProperty(key) && arr[i][key].includes(searchValue) == true ) //hvis objektet har property og søgeordet er i den property
            
                matches.push( arr[i] );  //Skubber matches ind i et nyt array, vi viser bagefter
            }
        }
    }

    for (let r = 0; r < matches.length; r++) { //loop til at vise vores matches
        let divShow = document.getElementById(matches[r].id);
        divShow.style.display = ""; //viser vores matches             
    }
    console.log(matches);
}

const filterQueryLocation = function (arr) { //Filter-funktion til lokation (dropdown)

    let filterLocation = document.getElementById('locationSearch').value;

    for (let i = 0; i < arr.length; i++) {

        let divShow = document.getElementById(arr[i].id);
        if(arr[i].location!= filterLocation){ //Hvis det ikke er den søgte lokation
            divShow.style.display = "none";  //Display none - vis ikke
        }
        else{
            divShow.style.display = ""; //Ellers sættes display til "", så man kan få dem at se igen, hvis man ændrer filtrering
        }
    }
}

const filterQueryStatus = function(arr){ //filter-funktion til status (checkboxes)

    var inputElements = document.getElementsByClassName('checkbox');
    let chosenReports = [];

    for (let i = 0; i < inputElements.length; i++) { //For-loop gennem checkboxes

        if(inputElements[i].checked){
            for (let y = 0; y < arr.length; y++) { // For-loop gennem reports
               
                let divHide = document.getElementById(arr[y].id);
                divHide.style.display = "none";

                if(inputElements[i].value == arr[y].status){
                    
                    chosenReports.push(arr[y]);
                }
            }
        }

        for (let r = 0; r < chosenReports.length; r++) {
            let divShow = document.getElementById(chosenReports[r].id);
            divShow.style.display = "";             
        }
    }
}

let hideElement = function(element) { //funktion til at sætte class hidden på et element
    element.setAttribute("class", "hidden");
}

const toggleFilter = function(){ //toggle synlighed på filter 

    if (divFilter.className == 'hidden') {

        divFilter.setAttribute("class", "visible");
        filterButton.setAttribute("class", "showX"); //viser krydset
        searchInput.value = ""; //Søgefeltet bliver tomt igen - søgefunktionerne virker ikke sammen
        for (let r = 0; r < reports.length; r++) { //Vi nulstiller og viser alle reports, når man klikke på filter - fordi søgefunktionerne ikke virker sammen
            let divShow = document.getElementById(reports[r].id); 
            divShow.style.display = "";             
        }
    }
    else {

        divFilter.setAttribute("class", "hidden");
        filterButton.setAttribute("class", "hideX"); //skjuler krydset
        
    }

};


//EVENTLISTENERS

locationSearch.addEventListener('change', function(){ //eventlistener på lokation - kalder søgefunktionen
    filterQueryLocation(reports);
});

for (let i = 0; i < statusSearch.length; i++) { //eventlistener på alle checkboxes

    statusSearch[i].addEventListener('click', function(){
        filterQueryStatus(reports);
    });
    
};

filterButton.addEventListener('click', toggleFilter); //eventlistener på filter-knappen

locationSearch.addEventListener('click', function(){
    hideElement(statusFilter); //Vi skjuler status baren, når man klikker på lokationen - man kan kun søge i en ting af gangen
});

statusButton.addEventListener('click', function(){
    toggleVisibility(statusFilter);
});

searchInput.addEventListener('search', function() {
    searchReportFunc(reports);
});







