'use strict';

import {reports} from './overview-reports.js';

let locationSearch = document.getElementById('locationSearch');
let statusSearch = document.getElementsByClassName('checkbox');

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

    var checkedValue = null; 
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

/*

const filterQueryStatus = function(arr){

    //let filterStatus = document.getElementsByClassName('items').value;
    //console.log(filterStatus);

    var checkedValue = null; 
    var inputElements = document.getElementsByClassName('checkbox');
    debugger;

    for (let i = 0; i < inputElements.length; i++) { //For-loop gennem checkboxes

        if(inputElements[i].checked){
            for (let y = 0; y < arr.length; y++) { // For-loop gennem reports
                debugger;
                let divShow = document.getElementById(arr[y].id);

                if(inputElements[i].value != arr[y].status){
                    divShow.style.display = "none"; 
                }
                else{
                    divShow.style.display = ""; 
                }
            }
        }

        
    }
*/
   
/*
    for(var i=0; inputElements[i]; ++i){
          if(inputElements[i].checked){   
              for (let y = 0; y < arr.length; y++) {
            
                let divShow = document.getElementById(arr[y].id);
                if(inputElements[i].value = arr[y].status){
                    divShow.style.display = "";  
                }
                 
              }            
          }

          else{

            
        }
    }*/

}

locationSearch.addEventListener('change', function(){
    filterQueryLocation(reports);
});

for (let i = 0; i < statusSearch.length; i++) { //eventlisterner på alle checkboxes

    statusSearch[i].addEventListener('click', function(){
        filterQueryStatus(reports);
    });
    
}





