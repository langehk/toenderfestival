let container = document.getElementById('reports-container');



class Report {
    constructor(name, phone, subject, description, status, date, time, notes, location) {
        this.id = 0;
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

    counter(){
        this.id++;
    }
}

let reports = [
    new Report("Morten", "22358794", "Telt revnet", "Stor revne i bunden af teltet", "done", "25-08-2019", "13:48", "", "Telt 5"),
    new Report("Nadia", "45207831", "Højtaler spiller ikke", "Det ser ikke ud til, der er strøm", "ongoing", "24-08-2019", "17:48", "Elektriker kommer kl 11", "Plads 105")
];

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

reports[0].counter(); 
reports[1].counter(); 

console.log(reports[0].id + reports[1].id);
/*
const createReports = function(arr){
    for (let i = 0; i < arr.length; i++) {
                
    }
}*/

