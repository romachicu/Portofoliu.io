//////////////////////
///////HOMEWORK///////
//////////////////////

// Ana vrea să construiască un calculator de bacșiș (tips) foarte simplu pentru ori de câte ori merge să mănânce într-un restaurant. În țara ei, este obișnuit să dai bacșiș 15% dacă valoarea facturii este între 50 și 300. Dacă valoarea este diferită, bacșișul este de 20%.
// 1. Sarcina ta este de a calcula bacșișul, în funcție de valoarea facturii. Creați o variabilă numită „tip” pentru aceasta. Nu este permis să folosiți o instrucțiune if/else 😅 (Dacă vă este mai ușor, puteți începe cu o instrucțiune if/else, apoi încercați să o convertiți într-un operator ternar!)

//testing: 40, 55, 350

let valoare = 40;
let tip = valoare >= 50 && valoare <= 300 ? "15%" : "20%";
console.log(tip);

// 2. Imprimați pe consolă care conține valoarea facturii, bacșișul și valoarea finală (factura + bacșiș). Exemplu: „Nota a fost 275, bacșișul a fost 41,25 și valoarea totală 316,25”
// DATE DE TEST: Testați pentru valorile facturii 275, 40 și 430
// SUGESTIE: Pentru a calcula 20% dintr-o valoare, pur și simplu înmulțiți-o cu 20/100 = 0,2
// SUCCES 😀

//testing: 40, 55, 350

let valoare1 = 55;
let tip1 = valoare1 >= 50 && valoare1 <= 300 ? "1.15" : "1.2";
let amount = valoare1 * tip1;
let bacsis = amount - valoare1;
let amountToFixeTwo = parseFloat(amount.toFixed(2));
let bacsisToFixeTwo = parseFloat(bacsis.toFixed(2));

console.log(
  `Nota a fost de ${valoare1}, bacșișul a fost ${bacsisToFixeTwo} și valoarea totală ${amountToFixeTwo}`,
);