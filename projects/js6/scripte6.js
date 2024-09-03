/*
Creează un array numit listaCumparaturi și adaugă câteva produse pe care vrei să le cumperi.
Scrie o funcție numită sorteazaAlfabetic care sortează lista de cumpărături în ordine alfabetică și o afișează.
Scrie o funcție numită cautaProdus care primește un produs ca argument și returnează indicele acestuia în listă sau un mesaj dacă nu este găsit.
Scrie o funcție numită adaugaProdus care primește un produs ca argument și dacă acesta nu este deja în listă îl adaugă la lista de cumpărături.
Scrie o funcție numită eliminaProdus care primește un produs ca argument și îl elimină din lista de cumpărături.
Afișați atât lista inițială și numărul de produse din ea cât și lista finală și numărul de produse din ea.
*/

//ex 1

let listaCumparaturi = ['ceapa', 'morcov', 'banane', 'conserve', 'peste', 'salata'];


console.log('Lista initiala de cumparaturi:', listaCumparaturi);
console.log('Numar de produse in lista initiala:', listaCumparaturi.length);


function sorteazaAlfabetic() {
    listaCumparaturi.sort();
    console.log('Lista de cumparaturi sortata:', listaCumparaturi);
}

function cautaProdus(produs) {
    const index = listaCumparaturi.indexOf(produs);
    if (index !== -1) {
        return `Produsul ${produs} se afla la indicele ${index}.`;
    } else {
        return `Produsul ${produs} nu a fost gasit în lista de cumparaturi.`;
    }
}


function adaugaProdus(produs) {
    if (listaCumparaturi.indexOf(produs) === -1) {
        listaCumparaturi.push(produs);
        console.log(`Produsul ${produs} a fost adaugat la lista de cumparaturi.`);
    } else {
        console.log(`Produsul ${produs} este deja in lista de cumparaturi.`);
    }
}


function eliminaProdus(produs) {
    const index = listaCumparaturi.indexOf(produs);
    if (index !== -1) {
        listaCumparaturi.splice(index, 1);
        console.log(`Produsul ${produs} a fost eliminat din lista de cumparaturi.`);
    } else {
        console.log(`Produsul ${produs} nu a fost gasit in lista de cumparaturi.`);
    }
}


function meniulCumparaturi(actiune, produs = '') {
    switch (actiune) {
        case 'sorteaza':
            sorteazaAlfabetic();
            break;
        case 'cauta':
            console.log(cautaProdus(produs));
            break;
        case 'adauga':
            adaugaProdus(produs);
            break;
        case 'elimina':
            eliminaProdus(produs);
            break;
        default:
            console.log('Alege una din obtiunele disponible.');
    }
}


meniulCumparaturi('sorteaza');  
meniulCumparaturi('cauta', 'peste'); 
meniulCumparaturi('adauga', 'lapte'); 
meniulCumparaturi('elimina', 'ceapa'); 


console.log('Lista finala de cumparaturi:', listaCumparaturi);
console.log('Numar de produse in lista finala:', listaCumparaturi.length);
