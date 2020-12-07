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
    description: "Beskrivelse",
    status: "Status",
    notes: "Kommentar fra pladskontor",
    name: "Kontaktperson",
    phone: "Telefonnummer",
    location: "Lokation",
    picture: "Billeder"
}

// Creates a UUID - unic ID 
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export {Report, headlines}; 