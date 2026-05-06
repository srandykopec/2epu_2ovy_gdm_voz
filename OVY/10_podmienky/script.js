// ===============================
// 1. Základný if
// ===============================
/*
let vek = 15;

if (vek >= 18) {
  console.log("Môžeš šoférovať!");
}
*/

// ===============================
// 2. if – else (dve vetvy)
// ===============================
/*
let vek = 15;

if (vek >= 18) {
  console.log("Môžeš šoférovať! 🚗");
} else {
  console.log("Nemôžeš šoférovať. 🚫");
}
*/

// ===============================
// 3. if – else if – else (viacero vetiev)
// ===============================
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

// ===============================
// 4. Podmienka v nákupnom košíku
// ===============================
/*
let produkt = "Tričko";
const cena = 19.99;
const dphPercenta = 20;
let mnozstvo = 3;

let celkovaCena = cena * mnozstvo;
let cenaSDph = celkovaCena * (1 + dphPercenta / 100);

console.log(`Produkt: ${produkt}`);
console.log(`Cena bez DPH: ${celkovaCena.toFixed(2)}€`);
console.log(`Cena s DPH (${dphPercenta}%): ${cenaSDph.toFixed(2)}€`);

if (celkovaCena >= 100) {
  console.log("🚚 Doprava ZDARMA!");
} else {
  console.log("🚚 Doprava: 4.99€");
}
*/

// ===============================
// 5. Cenové pásma dopravy
// ===============================

let cenaNakupu = 85;

if (cenaNakupu >= 100) {
  console.log(`Nákup ${cenaNakupu}€ – doprava ZDARMA! 🚚`);
} else if (cenaNakupu >= 50) {
  console.log(`Nákup ${cenaNakupu}€ – doprava so zľavou: 2.99€ 📦`);
} else {
  console.log(`Nákup ${cenaNakupu}€ – štandardná doprava: 4.99€ 📦`);
}
