const person = {
    numele : "Roman",
    virsta : 21,
    oras: "Chisianu",
}

console.log(person);

console.log(`Numele persoanei este ${person.numele} si virsta este ${person.virsta}`)



person.job="CRM";

console.log(person);


delete person.job;

person.virsta=undefined;


/////methods

const car = {
    marca: "ford",
    modul : "focus",
    an: 2020,
    coloare: 'rosu',
   /* pornesteMotorul: function() {
        console.log('Start');
            } */
}

car.pornesteMotorul = function() { console.log('Stop')};
console.log(car);



console.log(car.pornesteMotorul());

