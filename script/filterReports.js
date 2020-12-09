'use strict';

import { captureRejectionSymbol } from 'events';
import {reports} from './overview-reports.js';
import {toggleVisibility} from './sharedFunctions.js';

let locationSearch = document.getElementById('locationSearch');
let statusSearch = document.getElementsByClassName('checkbox');

let filterButton = document.getElementById('filter-button');
let divFilter = document.getElementById('filterContainer');

let statusButton = document.getElementById('statusButton');
let statusFilter = document.getElementById('statusFilter');

let searchInput = document.getElementById('reports-search'); 



// Test
function searchTest(arr, s){
    debugger;
    var matches = [], i, key;
    
    for( i = arr.length; i--; )
        for( key in arr[i] )
            if( arr[i].hasOwnProperty(key) && arr[i][key].indexOf(s) > -1 )
                matches.push( arr[i] );  // <-- This can be changed to anything

    return matches;
};

var result = searchTest(reports, 'Telt');

console.log(result);


/*
const searchReports = function (arr) {

//Constructor: name, phone, subject, description, status, date, time, notes, location

    let results = [];

    let toSearch = "telt";

    for(var i=0; i<reports.length; i++) {
        for(let key in reports[i]) {
            if(reports[i][key].indexOf(toSearch)!=-1) {
                results.push(reports[i]);
            }
        }
    }

    console.log(results);
}
*/

/*
    for (let i = 0; i < arr.length; i++){
        let divShow = document.getElementById(arr[i].id);
        let n = arr[i].subject.search(searchValue); //hvis n er -1 findes det IKKE, hvis n er 0 findes det
        n = arr[i].text.search(searchValue);
        console.log(n);
    }
}*/

const filterQueryLocation = function (arr) {

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

const filterQueryStatus = function(arr){

    //let filterStatus = document.getElementsByClassName('items').value;
    //console.log(filterStatus);

    var inputElements = document.getElementsByClassName('checkbox');
    debugger;
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


locationSearch.addEventListener('change', function(){ //eventlistener på lokation - kalder søgefunktionen
    filterQueryLocation(reports);
});



for (let i = 0; i < statusSearch.length; i++) { //eventlistener på alle checkboxes

    statusSearch[i].addEventListener('click', function(){
        filterQueryStatus(reports);
    });
    
};

const toggleFilter = function(){ //toggle synlighed på filter 

    if (divFilter.className == 'hidden') {

        divFilter.setAttribute("class", "visible");
        filterButton.setAttribute("class", "showX"); //viser krydset
    }
    else {

        divFilter.setAttribute("class", "hidden");
        filterButton.setAttribute("class", "hideX"); //skjuler krydset
        
    }

};

filterButton.addEventListener('click', toggleFilter); //eventlistener på filter-knappen

locationSearch.addEventListener('click', function(){
    hideElement(statusFilter); //Vi skjuler status baren, når man klikker på lokationen - man kan kun søge i en ting af gangen
});

statusButton.addEventListener('click', function(){
    toggleVisibility(statusFilter);
});

searchInput.addEventListener('search', function() {
    searchReports(reports);
});







