        import {reports, createReports} from './overview-reports.js';
        import {Report} from './report.js';


        const readIncidents = function () {
            debugger;
            // læs m ajax
            let oReq = new XMLHttpRequest();
            oReq.addEventListener("load", function () {
                let incidents = [];
                if (this.responseText.length > 0)
                    incidents = JSON.parse(this.responseText); // get and objectify
                for (let incident of incidents) {
                    // TODO
                    console.log(`${incident.name}`);
                    debugger;
                   reports.push(new Report(incident.name, incident.phone, incident.subject, incident.malfunction, "Ikke påbegyndt", "25-08-2019", "13:48", "", incident.location));
                   // reports.push(new Report("Morten", "22358794", "Telt revnet", "Stor revne i bunden af teltet", "Færdiggjort", "25-08-2019", "13:48", "", "Plads 1"));
                   console.log(reports);
                }
                createReports(reports); //create all reports
            });
            oReq.open("GET", "http://www.dkexit.eu/tf/getIncidents.php");
            oReq.send();
        };
        const doThis = function () {
            headAndShoulders('ExamProject Dec 2020');
            feet(2020);
            readIncidents();
        };
        doThis();
      