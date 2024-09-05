// - - - - - - - - - - F O R   L O O P - - - - - - - - - //
//1. Afișați toate numerele de la 1 la 10 folosind for loop.\
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//2. Afișați numerele impare până la 100.
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
} 

//3. Afișați tabla înmulțirii la 7.
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

//4. Calculati și afișați suma numerelor de la 1 la 10 (folosind metoda .reduce()).
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
//Explicație:
//reduce() iterează prin array și acumulează o valoare.
//accumulator este valoarea acumulată până în acel moment (inițializată cu 0).
//currentValue este valoarea curentă a elementului.
//La fiecare iterație, se adaugă currentValue la accumulator și rezultatul este stocat în accumulator.

//5. Calculati și afișați suma numerelor pare între 10 și 30 (folosind metoda .reduce()).
let evens = [];
for (let i = 10; i <= 30; i += 2) {
    evens.push(i);
    //console.log(evens);
}
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let sumExtra = evens.reduce(reducer);
//console.log(sumExtra); --- output: 220

// - - - ANALOGIC
/*
const numberss = Array.from({ length: 21 }, (_, i) => i + 10); // Creăm un array de la 10 la 30
const evenSum = numberss.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr, 0);
console.log(evenSum);
//Explicație:
//Mai întâi, creăm un array cu numerele de la 10 la 30.
//Folosim filter() pentru a obține doar numerele pare.
//Apoi, folosim reduce() pentru a calcula suma numerelor pare.

// - - - ANALOGIC 2
let total1 = 0
for (let i = 10; i <= 30; i = i + 2) {
    total1 = total1 + i
    console.log(total1)
}
*/

//6. Calculati și afișați media tuturor numerelor dintr-un array (folosind metoda .reduce()).
const numbers2 = [1, 2, 3, 4, 5];
const sum2 = numbers2.reduce((acc, curr) => acc + curr, 0);
const average = sum2 / numbers2.length;
console.log(average);


// - - - - - - - - - - W H I L E   L O O P - - - - - - - - - //
// Ex.1 Generarea unui șir Fibonacci. Scrieți un program care generează șirul Fibonacci până când cel mai mare număr nu depășește 1000. Utilizați un ciclu while pentru această sarcină.
function fibonacci(limit) {
    let a = 0;
    let b = 1;
    let c;
    const sequence = [a, b];

    while (b <= limit) {
        c = a + b;
        sequence.push(c);
        a = b;
        b = c;
    }

    return sequence;
}

const result = fibonacci(1000);
console.log(result);

// Ex.2 Verificarea parității. Creați un program care cere utilizatorului să introducă numere întregi până când acesta introduce "stop". Programul ar trebui să utilizeze un ciclu while pentru a verifica dacă fiecare număr introdus este par sau impar și să afișeze un mesaj corespunzător.
let number;

while (true) {
    number = prompt("Introdu un număr întreg (sau 'stop' pentru a ieși):");

    if (number === "stop") {
        break;
    }

    const num = parseInt(number);

    if (isNaN(num)) {
        console.log("Te rog, introdu un număr valid.");
    } else if (num % 2 === 0) {
        console.log(num + " este par.");
        break;
    } else {
        console.log(num + " este impar.");
    }
}

/*Explicație:
Inițializare: Variabila number este inițializată fără o valoare inițială, deoarece va fi reasignată la fiecare iterație a buclei.
Ciclu while: Loop-ul while (true) va continua să se execute la infinit, până când întâlnim o condiție de oprire.
Citirea intrării: La fiecare iterație, utilizatorul este invitat să introducă un număr.
Condiția de oprire: Dacă utilizatorul introduce "stop", loop-ul se întrerupe folosind instrucțiunea break.
Conversia la număr: Valoarea introdusă de utilizator este convertită într-un număr întreg folosind parseInt().
Verificarea parității:
Dacă conversia nu a reușit (isNaN(num) este adevărat), se afișează un mesaj de eroare.
Dacă numărul este par (restul împărțirii la 2 este 0), se afișează mesajul corespunzător.
Altfel, numărul este impar.*/

// Ex.3 Căutarea unui element într-un array. Creați un program care caută un element într-un array folosind un ciclu while. Programul ar trebui să afișeze poziția la care a fost găsit elementul sau un mesaj care spune că elementul nu a fost găsit.
const array = [2, 4, 6, 8, 10];
const elementCautat = Number(prompt('Ce număr vrei să cauţi?'));
let gasit = false;
let i = 0;

while (i < array.length && !gasit) {
    if (array[i] === elementCautat) {
        console.log(`Elementul ${elementCautat} a fost gasit la pozitia ${i}`);
        gasit = true;
    }
    i++;
}

if (!gasit) {
    console.log('Elementul nu a fost gasit');
}

// SAU
const myArray = [10, 20, 30, 40, 50];
const elementToFind = Number(prompt('Ce număr vrei să cauţi?'));
let found = false;
let index = 0;

while (index < myArray.length && !found) {
  if (myArray[index] === elementToFind) {
    found = true;
  } else {
    index++;
  }
}

if (found) {
  console.log("Elementul", elementToFind, "a fost găsit la indexul", index);
} else {
  console.log("Elementul", elementToFind, "nu a fost găsit.");
}