'use strict'

import {getLocation} from './getLocation.js';


function prettyBody(formElements){

    let text = ""; 

    for (let i = 1; i < formElements.length; i++) {
        //insert headline
        text += formElements[i].value;
        //text += document.write('<br>');
    }
    return text; 
}


// Gets the elements (input (form)), and gets the values from each element.
// Then resurns the desired values. as an object.
const formToJSON = elements => [].reduce.call(elements, (data, element) => {

  data[element.name] = element.value;

  return data;
}, {});


const handleFormSubmit = event => {
  event.preventDefault();

  const data = formToJSON(form.elements); // Converts values to json object.

  /*
fs.writeFile('report.json', data, (err) => {
  if(err){
    throw err;
  }
  console.log("json data saved!");
});
*/
  const dataContainer = document.getElementsByClassName('results_display')[0]; // Container to display our values. 

  dataContainer.textContent = JSON.stringify(data, null, " ");

}

// Event listener on submit.
let submitButton = document.getElementById('submit'); 
const form = document.getElementsByClassName('report_Form')[0]; // Henter alle "inputs" fra vores form.
submitButton.addEventListener("click", handleFormSubmit);



// Validation - and get values from form.
function validateForm(){
    let form = document.getElementById('reportForm').elements;
    let body = prettyBody(form);
    let subject = form["subject"].value;
    console.log(body);
    getLocation();
    window.open(`mailto:mort120c@basyd.dk?subject=${subject}&body=${body}`);
}

// Dropdown function. Shows the selected item.
$(".dropdown-menu li a").click(function(){
    $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  });


 var upload = document.getElementById("files");

 
// When files are uploaded, we select the uploaded files, and append the images.
upload.onchange = (event) => {
  var preview = document.getElementById('preview');

  for (let i = 0; i < event.target.files.length; i++) {
    var newImage = document.createElement("img");
    newImage.id = "upload-image" + i;
    newImage.src = URL.createObjectURL(event.target.files[i]);
    preview.appendChild(newImage);
  }
}
