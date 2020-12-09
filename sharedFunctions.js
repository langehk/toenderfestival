const toggleVisibility = function(element){ //toggle synlighed på HTML element
    if (element.className == 'hidden') {

        element.setAttribute("class", "visible");
    }
    else {

        element.setAttribute("class", "hidden");
        
    }
};

export {toggleVisibility};