'use strict';

import {Report, headlines} from './report.js';

let container = document.getElementById('reports-container');

let reports = [
    new Report("Morten", "22358794", "Telt revnet", "Stor revne i bunden af teltet", "Færdiggjort", "25-08-2019", "13:48", "", "Plads 1"),
    new Report("Nadia", "45207831", "Højtaler spiller ikke", "Det ser ikke ud til, der er strøm", "Igangværende", "24-08-2019", "17:48", "Elektriker kommer kl 11", "Plads 105")
];

const createReports = function (arr) {
    for (let i = 0; i < arr.length; i++) {

        let reportDiv = document.createElement("div"); //div element for every report
        reportDiv.id = arr[i].id;
        let subject = document.createElement("p"); //create p element
        subject.innerHTML = arr[i].subject; //subject value from object
        reportDiv.appendChild(subject); //append to div element

        let date = document.createElement("p");
        date.innerHTML = arr[i].date;
        reportDiv.appendChild(date);

        let time = document.createElement("p");
        time.innerHTML = arr[i].time;
        reportDiv.appendChild(time);

        let headlineDescription = document.createElement("h3"); //we need a headline 
        headlineDescription.innerHTML = headlines.description; //get headline from our headline-array
        reportDiv.appendChild(headlineDescription);

        let description = document.createElement("p");
        description.innerHTML = arr[i].description;
        reportDiv.appendChild(description);

        let headlineStatus = document.createElement("h3");
        headlineStatus.innerHTML = headlines.status;
        reportDiv.appendChild(headlineStatus);

        let status = document.createElement("p");
        status.innerHTML = arr[i].status;
        reportDiv.appendChild(status);

        let headlineNotes = document.createElement("h3");
        headlineNotes.innerHTML = headlines.notes;
        reportDiv.appendChild(headlineNotes);

        let notes = document.createElement("p");
        notes.innerHTML = arr[i].notes;
        reportDiv.appendChild(notes);

        let headlineName = document.createElement("h3");
        headlineName.innerHTML = headlines.name;
        reportDiv.appendChild(headlineName);

        let name = document.createElement("p");
        name.innerHTML = arr[i].name;
        reportDiv.appendChild(name);

        let headlinePhone = document.createElement("h3");
        headlinePhone.innerHTML = headlines.phone;
        reportDiv.appendChild(headlinePhone);

        let phone = document.createElement("p");
        phone.innerHTML = arr[i].phone;
        reportDiv.appendChild(phone);

        let headlineLocation = document.createElement("h3");
        headlineLocation.innerHTML = headlines.location;
        reportDiv.appendChild(headlineLocation);

        let location = document.createElement("p");
        location.innerHTML = arr[i].location;
        reportDiv.appendChild(location);

        reportDiv.appendChild(document.createElement("hr"));

        container.appendChild(reportDiv);
    }
}

createReports(reports); //create all reports

export {reports};