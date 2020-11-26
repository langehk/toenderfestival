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



  $(document).ready(function(){

    $('#submitPhoto').click(function(){
    
       var form_data = new FormData();
    
       // Read selected files
       var totalfiles = document.getElementById('files').files.length;
       for (var index = 0; index < totalfiles; index++) {
          form_data.append("files[]", document.getElementById('files').files[index]);
       }
    
       // AJAX request
       $.ajax({
         url: 'http://x15.dk/hitme.php', 
         type: 'post',
         data: form_data,
         dataType: 'json',
         contentType: false,
         processData: false,
         success: function (response) {
    
           for(var index = 0; index < response.length; index++) {
             var src = response[index];
    
             // Add img element in <div id='preview'>
             $('#preview').append('<img src="'+src+'" width="200px;" height="200px">');
           }
         }
       });
    });
    });