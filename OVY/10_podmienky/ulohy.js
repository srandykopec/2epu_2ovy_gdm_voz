// ===============================
// ÚLOHA 1 – Pozitívne / negatívne / nula
// ===============================
// Zmeň hodnotu čísla a spusti – čo vypíše konzola?

let cislo = 7;

if (cislo > 0) {
  console.log(`${cislo} je kladné číslo ➕`);
} else if (cislo < 0) {
  console.log(`${cislo} je záporné číslo ➖`);
} else {
  console.log("Číslo je nula 0️⃣");
}

// ===============================
// ÚLOHA 2 – Párne / nepárne
// ===============================
// Operátor % vracia zvyšok po delení. Napr. 7 % 2 = 1, 8 % 2 = 0
// Vyskúšaj rôzne hodnoty.

/*
let n = 4;

if (n % 2 === 0) {
  console.log(`${n} je párne číslo`);
} else {
  console.log(`${n} je nepárne číslo`);
}
*/

// ===============================
// ÚLOHA 3 – Vstupné do kina
// ===============================
// Doplň podmienky: vek < 15 → 3 €, 15–65 → 6 €, nad 65 → 4 €

/*
let vek = 17;

if (vek < 15) {
  console.log("Vstupné: 3 € (dieťa) 🎒");
} else if (vek <= 65) {
  console.log("Vstupné: 6 € (dospelý) 🎬");
} else {
  console.log("Vstupné: 4 € (senior) 👴");
}
*/

// ===============================
// ÚLOHA 4 – Dopravný semafor
// ===============================
// Premenná farba môže byť "červená", "oranžová" alebo "zelená"

/*
let farba = "zelená";

if (farba === "červená") {
  console.log("🔴 Stoj!");
} else if (farba === "oranžová") {
  console.log("🟡 Priprav sa...");
} else if (farba === "zelená") {
  console.log("🟢 Voľno, choď!");
} else {
  console.log("Neznáma farba semaforu");
}
*/

// ===============================
// ÚLOHA 5 – Ročné obdobie (domáca úloha)
// ===============================
// Mesiac 12, 1, 2 → zima | 3–5 → jar | 6–8 → leto | 9–11 → jeseň

/*
let mesiac = 7;

if (mesiac === 12 || mesiac === 1 || mesiac === 2) {
  console.log("❄️ Zima");
} else if (mesiac >= 3 && mesiac <= 5) {
  console.log("🌸 Jar");
} else if (mesiac >= 6 && mesiac <= 8) {
  console.log("☀️ Leto");
} else if (mesiac >= 9 && mesiac <= 11) {
  console.log("🍂 Jeseň");
} else {
  console.log("Neplatné číslo mesiaca (musí byť 1–12)");
}
*/

// ===============================
// ÚLOHA 6 – Jednoduchá kalkulačka (domáca úloha)
// ===============================
// Zmeň operator na "+", "-", "*" alebo "/" a sleduj výsledok

/*
let a = 10;
let b = 3;
let operator = "+";

if (operator === "+") {
  console.log(`${a} + ${b} = ${a + b}`);
} else if (operator === "-") {
  console.log(`${a} - ${b} = ${a - b}`);
} else if (operator === "*") {
  console.log(`${a} * ${b} = ${a * b}`);
} else if (operator === "/") {
  console.log(`${a} / ${b} = ${(a / b).toFixed(2)}`);
} else {
  console.log("Neznámy operátor");
}
*/
