
///////////////////////
///////HOMEWORK////////
///////////////////////

/*Scrieți o funcție de traducere numită helloWorld care:
acceptă 1 argument, un cod de limbă (ex. „es”, „de”, „en”)
returnează „Hello, World!” pentru limba dată, pentru cel puțin 3 limbi. Ar trebui să returneze implicit limba engleză.
Apelați acea funcție pentru fiecare dintre limbile acceptate și înregistrați rezultatul pentru a vă asigura că funcționează.
*/

//ex: 1
//testing: es, de, en, it



function helloWorld(language){
  if(language === "es") {
    return "Hola, Mundo!";
  }
  else if (language === "de") {
    return "Hallo, Welt!";
  }
  else if (language === "en") {
    return "Hello, World!";
  }
  else { return  "Hello, World!";}
}

console.log(helloWorld("es"));
console.log(helloWorld("de"));
console.log(helloWorld("en"));
console.log(helloWorld("it"));



/*Scrieți o funcție cu numele plural care să:
Accepte 2 argumente: un substantiv și un număr.
Întoarcă o propoziție ce conține numărul și substantivul la plural (dacă e cazul), ex: “I have 5 cats” sau “I have 1 dog”. 
Chemați funcția cu datele: “6 pig”, “0 hamster”, “1 parrot”.
Bonus: includem şi exceptiile "sheep" (“I have 1 sheep”, “I have 4 sheep”) şi "geese" (“I have 1 goose”, “I have 9 geese”) */

//ex: 2
//testing: 6 pig, 0 hamster, 1 parrot, 1 sheep, 

function plural(numar, substantiv) {

  const exceptions = {
      "sheep": "sheep",
      "goose": "geese"
  };


  if (exceptions[substantiv]) {
      return `I have ${numar} ${numar === 1 ? substantiv : exceptions[substantiv]}`;
  }


  if (numar === 1) {
      return `I have ${numar} ${substantiv}`;
  } else if(numar >1) {
      return `I have ${numar} ${substantiv}s`;
  } else {
       return `I dont have ${substantiv}s`;
  }
}


console.log(plural(6, "pig"));      
console.log(plural(0, "hamster"));  
console.log(plural(1, "parrot"));  
console.log(plural(1, "sheep"));    
console.log(plural(4, "sheep"));    
console.log(plural(1, "goose"));    
console.log(plural(9, "goose"));  


/*
Creați o programă care întoarce prețul biletului la Grădina Botanică, în funcție de vârstă: copiii până la 12 ani plătesc 5 lei, după 12 - 10 lei, adulții - 20 lei, iar pensionarii (peste 65) - 15.
Chemați numai 1 funcție, numai cu anul nașterii. (ar trebui să aveți 2 funcții)
Datele: 2015, 1985, 1960, 2018
*/

//ex: 3
//testing: 2015, 1985, 1960, 2018

function ticketPrice(year) {
  const currentYear= new Date().getFullYear();
  const age = currentYear -year;

  if(age<12) {
    return 5;}
  else if (age>=12 && age<18){
    return 10;
  }
    else if (age>=18 && age<65){
      return 10;
    }
  else if (age>=65){
    return 15;
  }
  else {
    return "error: please enter a valid year";
  }
}

console.log(ticketPrice(2015));
console.log(ticketPrice(1985));
console.log(ticketPrice(1960));
console.log(ticketPrice(2018));


/*
Creați o programă care are definite 3 variabile numele, anulNasterii şi isF (boolean).
Creați o funcție care calculează vârsta persoanei.
Creați o funcţie care acceptă o valoare booleană isF și întoarce vârsta de pensionare (folosiți ternaryOperator  - 67 bărbați, 64 femei);
Creați o funcție care află dacă persoana este deja la pensie, peste câți ani se va pensiona, şi dacă nu este minoră.
Afișați în consolă numele și mesajul de pensionare după exemplu: “Vasile mai are 26 de ani până la pensionare”. Chemați numai o funcție cu datele.
Date: Sergiu, 1979. Anastasia, 1963. Andreea, 2010.
*/

//ex: 4
//testing : Sergiu, 1979. Anastasia, 1963. Andreea, 2010.


let nume = "Sergiu";          
let anulNasterii = 1979;       
let isF = false;               


function calculeazaVarsta(anulNasterii) {
    const anulCurent = new Date().getFullYear();
    return anulCurent - anulNasterii;
}


function varstaPensionare(isF) {
    return isF ? 64 : 67;
}

function verificaPensionare(nume, anulNasterii, isF) {
    const varsta = calculeazaVarsta(anulNasterii);
    const varstaDePensionare = varstaPensionare(isF);

    if (varsta >= varstaDePensionare) {
        console.log(`${nume} este deja la pensie.`);
    } else if (varsta < 18) {
        console.log(`${nume} este minor.`);
    } else {
        const aniPanaLaPensionare = varstaDePensionare - varsta;
        console.log(`${nume} mai are ${aniPanaLaPensionare} ani până la pensionare.`);
    }
}


verificaPensionare("Sergiu", 1979, false);    
verificaPensionare("Anastasia", 1963, true); 
verificaPensionare("Andreea", 2010, true);    


//https://docs.google.com/document/d/1jHzTsSmDI10oE4pTfUFwv5V31pkOTfCE/edit
//ex: 5

function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();

  if (userInput === 'piatra' || userInput === 'foarfeca' || userInput === 'hartie' || userInput === 'bomba') {
      return userInput;
  } else {
      console.log('Alegere invalida! Alege intre piatra, foarfeca, hartie.');
  }
}


console.log(getUserChoice('Piatra'));   
console.log(getUserChoice('bomba'));    
console.log(getUserChoice('scissors'));


function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
      case 0:
          return 'piatra';
      case 1:
          return 'foarfeca';
      case 2:
          return 'hartie';
  }
}


console.log(getComputerChoice());


function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomba') {
      return 'Utilizatorul castiga intotdeauna cu codul secret!';
  }

  if (userChoice === computerChoice) {
      return 'Este egalitate!';
  }

  if (userChoice === 'piatra') {
      if (computerChoice === 'foarfeca') {
          return 'Utilizatorul castiga!';
      } else {
          return 'Computerul castiga!';
      }
  }

  if (userChoice === 'hartie') {
      if (computerChoice === 'piatra') {
          return 'Utilizatorul castiga!';
      } else {
          return 'Computerul castiga!';
      }
  }

  if (userChoice === 'foarfeca') {
      if (computerChoice === 'hartie') {
          return 'Utilizatorul castiga!';
      } else {
          return 'Computerul castiga!';
      }
  }
}


console.log(determineWinner('piatra', 'foarfeca'));
console.log(determineWinner('hartie', 'piatra'));  
console.log(determineWinner('foarfeca', 'piatra'));
console.log(determineWinner('bomba', 'piatra'));  


function playGame() {
  const userChoice = getUserChoice('piatra'); 
  const computerChoice = getComputerChoice();

  console.log(`Utilizatorul a ales: ${userChoice}`);
  console.log(`Computerul a ales: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
}


 
playGame();
