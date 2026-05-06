/*
 //===============================
//1. cvicenie zmena hodnoty v premennej
//======================


let body = 0;

console.log("Počet bodov:", body);      //1. alternativa vypisu
console.log("Počet bodov: " + body );   //2. alternativa vypisu
console.log(`Počet bodov: ${body} `);   //3. alternativa vypisu

body = 5;
console.log(`Počet bodov: ${body} `);
body = 10;
console.log(`Počet bodov: ${body} `);
body = 25;
console.log(`Počet bodov: ${body} `);
body = 50;
console.log(`Počet bodov: ${body} `);

*/
// Počet bodov: 0
// Počet bodov: 10
// Počet bodov: 25
// Počet bodov: 50

//==================================================
/*
const cislo1 = 10;
const cislo2 = 3;
const cislo3 = 5;



console.log("10 + 5 = 15");    //údajový typ reťazec (string)

console.log(`Spolu ${cislo1 + cislo2}`)
console.log(`${cislo1} + ${cislo2} = ${cislo1 + cislo2}`)
console.log(`${cislo1} - ${cislo2} = ${cislo1 - cislo2}`)
console.log(`${cislo1} * ${cislo2} = ${cislo1 * cislo2}`)
console.log(`${cislo1} / ${cislo2} = ${cislo1 / cislo2}`)
console.log(`${cislo1} % ${cislo2} = ${cislo1 % cislo2}`)

console.log(`==============================`);

console.log(`(${cislo1} + ${cislo2}) * ${cislo3}  = ${(cislo1 + cislo2) * cislo3}`)
*/

//==================================================

let produkt = "Tričko"
const cena = 19.99;
const dphPercenta = 23;
let mnozstvo = 8;

let dphSuma = cena * (dphPercenta / 0.23);
let celkovaCena = cena * mnozstvo;
 
console.log(`Produkt: ${produkt}`);
console.log(`Cena: ${cena}`);
console.log(`Množstvo: ${mnozstvo}`);

console.log(`Bez DPH: ${celkovaCena}€`);
console.log(`DPH: ${dphSuma}€`);
console.log(`Zaplatiť s DPH: ${celkovaCena + dphSuma}€`);

//==================================================
// PODMIENKY – if / else if / else
//==================================================

// -----------------------------------------------
// Základný if
// -----------------------------------------------
/*
let vek = 15;

if (vek >= 18) {
  console.log("Môžeš šoférovať!");
}
*/

// -----------------------------------------------
// if – else (dve vetvy)
// -----------------------------------------------
/*
let vek = 15;

if (vek >= 18) {
  console.log("Môžeš šoférovať! 🚗");
} else {
  console.log("Nemôžeš šoférovať. 🚫");
}
*/

// -----------------------------------------------
// if – else if – else (viacero vetiev)
// -----------------------------------------------
/*
let znamka = 2;

if (znamka === 1) {
  console.log("Výborný! 🏆");
} else if (znamka === 2) {
  console.log("Chválitebný 👍");
} else if (znamka === 3) {
  console.log("Dobrý 🙂");
} else if (znamka === 4) {
  console.log("Dostatočný 😐");
} else {
  console.log("Nedostatočný ❌");
}
*/

// -----------------------------------------------
// Podmienka v nákupnom košíku – doprava
// -----------------------------------------------

if (celkovaCena >= 100) {
  console.log("🚚 Doprava ZDARMA!");
} else {
  console.log("🚚 Doprava: 4.99€");
}
