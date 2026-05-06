// ============================================================
// OVY – Podmienky (if / else if / else)
// Nadväzujeme na minulú hodinu: premenné, operátory, nákupný košík
// ============================================================

// -------------------------------------------------------
// 1. Základný if
//    Syntax:
//      if (podmienka) {
//        // kód, ktorý sa vykoná keď je podmienka TRUE
//      }
// -------------------------------------------------------

/*
let vek = 15;

if (vek >= 18) {
  console.log("Si plnoletý/á – môžeš šoférovať!");
}
// Ak je vek menej ako 18, nevypíše sa NIC.
*/


// -------------------------------------------------------
// 2. if – else
//    Syntax:
//      if (podmienka) {
//        // kód keď TRUE
//      } else {
//        // kód keď FALSE
//      }
// -------------------------------------------------------

/*
let vek = 15;

if (vek >= 18) {
  console.log("Si plnoletý/á – môžeš šoférovať!");
} else {
  console.log("Si maloletý/á – nemôžeš šoférovať.");
}
*/


// -------------------------------------------------------
// 3. if – else if – else
//    Viacero vetví podľa rôznych podmienok
// -------------------------------------------------------

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


// -------------------------------------------------------
// 4. Podmienky v nákupnom košíku
//    (nadväzujeme na príklad z minulej hodiny)
// -------------------------------------------------------

/*
const cena = 19.99;
const dphPercenta = 23;
let mnozstvo = 8;

let celkovaCena = cena * mnozstvo;
let cenaSDph = celkovaCena * (1 + dphPercenta / 100);

console.log(`Celková cena bez DPH: ${celkovaCena.toFixed(2)}€`);
console.log(`Celková cena s DPH:   ${cenaSDph.toFixed(2)}€`);

// Doprava zdarma pri nákupe nad 100 €
if (celkovaCena > 100) {
  console.log("🚚 Doprava ZDARMA!");
} else {
  console.log("🚚 Doprava: 4.99€");
}
*/


// -------------------------------------------------------
// 5. AKTÍVNY PRÍKLAD – pohraj sa s hodnotami
// -------------------------------------------------------

let cenaNakupu = 85;

if (cenaNakupu >= 100) {
  console.log(`Nákup ${cenaNakupu}€ – doprava ZDARMA! 🚚`);
} else if (cenaNakupu >= 50) {
  console.log(`Nákup ${cenaNakupu}€ – doprava so zľavou: 2.99€ 📦`);
} else {
  console.log(`Nákup ${cenaNakupu}€ – štandardná doprava: 4.99€ 📦`);
}
