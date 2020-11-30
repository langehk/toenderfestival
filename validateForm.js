'use strict'

import {getLocation} from './getLocation.js';

let submitButton = document.getElementById('submit'); 
submitButton.addEventListener("click", validateForm); 

function prettyBody(formElements){

    let text = ""; 

    for (let i = 1; i < formElements.length; i++) {
        //insert headline
        text += formElements[i].value;
        //text += document.write('<br>');
  
        //insert linebreak     
        
    }
    return text; 
}


// Validation
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
