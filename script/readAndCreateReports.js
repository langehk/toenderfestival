        import {reports, createReports} from './overview-reports.js';
        import {Report} from './report.js';


        const readIncidents = function () {

            // læs m ajax
            let oReq = new XMLHttpRequest();
            oReq.addEventListener("load", function () {
                let incidents = [];
                if (this.responseText.length > 0)
                    incidents = JSON.parse(this.responseText); // get and objectify
                for (let incident of incidents) {
                   reports.push(new Report(incident.name, incident.phone, incident.subject, incident.malfunction, "Ikke påbegyndt", incident.datestamp, incident.timestamp, "", incident.location));
                }
                createReports(reports); //create all reports
            });
            oReq.open("GET", "./getIncidents.php");
            oReq.send();
        };
        const doThis = function () {
            headAndShoulders('ExamProject Dec 2020');
            //feet(2020);
            readIncidents();
        };
        doThis();
      