

let container = document.getElementById('reports-container');



class Report {
    constructor(name, phone, subject, description, status, date, time, notes, location) {
        this.id = uuidv4();
        this.name = name; 
        this.phone = phone; 
        this.subject = subject; 
        this.description = description; 
        this.status = status; 
        this.date = date; 
        this.time = time; 
        this.notes = notes; 
        this.location = location; 
    }

}

//Literal obejct - headlines
let headlines = {
    description : "Beskrivelse",
    status : "Status",
    notes : "Kommentar fra pladskontor",
    name : "Kontaktperson",
    phone : "Telefonnummer",
    location : "Lokation",
    picture : "Billeder"
}


let reports = [
    new Report("Morten", "22358794", "Telt revnet", "Stor revne i bunden af teltet", "Færdiggjort", "25-08-2019", "13:48", "", "Telt 5"),
    new Report("Nadia", "45207831", "Højtaler spiller ikke", "Det ser ikke ud til, der er strøm", "Igangværende", "24-08-2019", "17:48", "Elektriker kommer kl 11", "Plads 105")
];

// Creates a UUID - unic ID 
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

console.log(uuidv4());


const createReports = function(arr){
    for (let i = 0; i < arr.length; i++) {
        
        let reportDiv = document.createElement("div"); //div element for every report
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

        
        /* for (let y = 0; y < arr[i].length; y++) { //Iteration through object
            
            let text = document.createElement("p"); 
            text.innerHTML = arr[i][y]; 
            reportDiv.appendChild(text);
        } */
            


        /*
            let headDesc = document.createElement("h3");
            headDesc.innerHTML = headlines.description;
            reportDiv.appendChild(headDesc);*/

        container.appendChild(reportDiv);
    }


}


createReports(reports);

