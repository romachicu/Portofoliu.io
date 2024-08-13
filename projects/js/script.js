//ex. 1
//teting let: -10,5,15,26
//status: OK

let temp = 25;

if (temp < 0) {
  console.log("Inghet");
} else if (temp <= 10 && temp > 0) {
  console.log("Frig");
} else if (temp > 10 && temp < 25) {
  console.log("Molderat");
} else if (temp >= 25) {
  console.log("cald");
}

//ex. 2
//testing let: 1,2,3,4,5,6,7,8
//status: OK

let day = 8;

if (day == 1) {
  console.log("luni");
} else if (day == 2) {
  clonsole.log("marti");
} else if (day == 3) {
  clonsole.log("miercuri");
} else if (day == 4) {
  clonsole.log("joi");
} else if (day == 5) {
  clonsole.log("vineri");
} else if (day == 6) {
  clonsole.log("sambata");
} else if (day == 7) {
  clonsole.log("duminica");
} else console.log("error: nu corespunde range 1 - 7");

//ex. 3
//testing let: 5,4, rrd
//status: OK

let number = "rrd";

if (typeof number == "number") {
  if (number % 2 == 0) {
    console.log(`Numarul ${number} este par;`);
  } else {
    console.log(`Numarul ${number} este impar;`);
  }
} else {
  console.log(`error:  tipul de date nu este numar;`);
}

//ex. 4
//testing purchaseAmount: 60, 100

const discount = 0.9;
const VAT = 1.05;
const purchaseAmount = 60;

// Format US
let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
if (purchaseAmount >= 100) {
  console.log(
    `Pretule pentru factura este de ${USDollar.format(purchaseAmount * discount * VAT)}\n Dicount 10%: ${USDollar.format(purchaseAmount * (1 - discount))}\n VAT 5%: ${USDollar.format(purchaseAmount * (1 - VAT))}`,
  );
} else {
  console.log(
    `Pretule pentru factura este de  ${USDollar.format(purchaseAmount * VAT)}\n VAT 5%: ${USDollar.format(purchaseAmount * (1 - VAT))}`,
  );
}
