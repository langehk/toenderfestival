'use strict';

import {reports} from './overview-reports.js';

let locationSearch = document.getElementById('locationSearch');
let statusSearch = document.getElementsByClassName('checkbox');

let filterButton = document.getElementById('filter-button');
let divFilter = document.getElementById('filterContainer');

let statusButton = document.getElementById('statusButton');
let statusFilter = document.getElementById('statusFilter');


//let filterX = document.querySelector((`#filter-button`), ':before');


let filterX = window.getComputedStyle(document.querySelector(`#filter-button`), ':before').getPropertyValue('display');
console.log(filterX);



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

locationSearch.addEventListener('change', function(){
    filterQueryLocation(reports);
});

for (let i = 0; i < statusSearch.length; i++) { //eventlistener på alle checkboxes

    statusSearch[i].addEventListener('click', function(){
        filterQueryStatus(reports);
    });
    
}


const toggleStatus = function(){
    if (statusFilter.className == 'hidden') {

        statusFilter.setAttribute("class", "visible");
    }
    else {

        statusFilter.setAttribute("class", "hidden");
        
    }
}

const toggleFilter = function(){

    if (divFilter.className == 'hidden') {

        divFilter.setAttribute("class", "visible");
        filterButton.setAttribute("class", "showX");
    }
    else {

        divFilter.setAttribute("class", "hidden");
        filterButton.setAttribute("class", "hideX");
        
    }

}

filterButton.addEventListener('click', toggleFilter); //eventlistener på filter-knappen

statusButton.addEventListener('click', toggleStatus);









