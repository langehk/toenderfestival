import {toggleVisibility} from './sharedFunctions.js';

let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Æ", "Ø", "Å"];

class azguide{
    constructor( description, text) {
        this.description = description;
        this.text = text;
    };
}

let container = document.getElementById('guideContainer'); 

let guideArray = [
    ["A",
        new azguide( "Apparat fejl", "Kaffemaskine går amok"), 
        new azguide( "A-noget andet", "Lorem ipsum"), 
        new azguide( "Andre frivillige", "Skal også arbejde her")
    ],
    ["B",
        new azguide( "Boverskrift", "Lorem ipsum"), 
        new azguide( "Bøøøh", "Lorem ipsum"), 
        new azguide( "Bonusordning", "Lorem ipsum"),
        new azguide( "Bander", "De skyder dig")  
    ],
    ["C",
        new azguide("Cool", "Lorem ipsum"), 
        new azguide("Can", "Lorem ipsum"), 
        new azguide("Cisco", "Lorem ipsum"),
        new azguide("Cat in sæk", "The julekalender"), 
        new azguide("Casino", "Brug alle dine penge") 
    ],
    ["D",
        new azguide("Danse", "Lorem ipsum"), 
        new azguide("Danskvand", "Lorem ipsum"), 
        new azguide("Disko-dasko", "Lorem ipsum") 
    ],
    ["E",
        new azguide("Elefanter", "Lorem ipsum"), 
        new azguide("Ellers", "Lorem ipsum"), 
        new azguide("Enden", "Lorem ipsum") 
    ]

];

console.log(guideArray.length); 
console.log(guideArray[0].length);


const buildGuide = function(){

    for (let i = 0; i < guideArray.length; i++) {

        let divLetter = document.createElement('div'); 
        divLetter.setAttribute('class', 'divLetter');
        let letter = document.createElement('h2'); 
        letter.innerHTML = guideArray[i][0]; 
        divLetter.appendChild(letter);

        let divGuide = document.createElement('div');
        divGuide.setAttribute('class', 'hidden');

        letter.addEventListener('click', function(){
            toggleVisibility(divGuide);
        });
        
        for (let y = 1; y < guideArray[i].length; y++) {

            let headline = document.createElement('h3');
            headline.innerHTML = guideArray[i][y].description;
            let text = document.createElement('p');
            text.innerHTML = guideArray[i][y].text;

            divGuide.appendChild(headline);
            divGuide.appendChild(text);

            divGuide.appendChild(document.createElement('hr'));

        }
        
        divLetter.appendChild(divGuide);
        container.appendChild(divLetter);
        
    }
}

buildGuide();


 