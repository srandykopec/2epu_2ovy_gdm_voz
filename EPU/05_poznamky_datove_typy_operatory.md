# Údajové typy a operátory v JavaScripte 📦

---

## 1. Čo sú údajové (dátové) typy? 🤔

V reálnom živote rozlišujeme rôzne druhy informácií:
- 📝 **Text** - "Ahoj", "Janko Mrkvička"
- 🔢 **Čísla** - 16, 3.14, -5
- ✅❌ **Áno/Nie** - zapnuté/vypnuté, pravda/nepravda

JavaScript presne takto rozlišuje **typy dát**, ktoré môžeš uložiť do premennej.


---


## 2. Základné údajové typy

### 2.1 String (reťazec textu resp. text) 📝

**String** = reťazec znakov = **TEXT**, čiže nie iba jeden znak resp. písmeno, ale viacero zreťazených písmen, tvoria spolu reťazec znakov.

Vždy musí byť v **úvodzovkách** (jednoduchých `'...'` alebo dvojitých `"..."`).

```javascript
let meno = "Janko";              // ✅ správne
let mesto = 'Prievidza';        // ✅ správne
let sprava = "Ahoj, ako sa máš?"; // ✅ správne

let chyba = Janko;               // ❌ CHYBA! Bez úvodzoviek!
```

**Praktické príklady:**
```javascript
const pozdrav = "Dobrý deň!";
const email = "student@skola.sk";
const heslo = "SuperTajne123";
```

---

### 2.2 Číslo (Number)🔢

**Number** = **ČÍSLO** (celé alebo desatinné)

Čísla píšeme **BEZ úvodzoviek**!

```javascript
let vek = 16;              // ✅ celé číslo
let vyska = 175.5;         // ✅ desatinné číslo
let teplota = -5;          // ✅ záporné číslo
let cena = 19.99;          // ✅ cena produktu
```

**⚠️ DÔLEŽITÉ: Desatinné čísla píšeme s BODKOU, nie s čiarkou!**
```javascript
// ✅ SPRÁVNE
let cena = 19.99;      // bodka (ako v angličtine)
let vyska = 175.5;     // bodka

// ❌ CHYBA - toto nefunguje!
let cena = 19,99;      // čiarka je v JS CHYBA!
```

> **Vysvetlenie:** Na Slovensku v matematike píšeme `3,14`, ale v JavaScripte píšeme `3.14` s bodkou!

**⚠️ POZOR na rozdiel!**
```javascript
let cislo = 42;        // toto je NUMBER (číslo)
let text = "42";       // toto je STRING (text)

// Číslo 42 ≠ text "42" (aj keď to vyzerá rovnako)
```

---

### 2.3 Boolean (Pravda/Nepravda) ✅❌

**Boolean** = hodnota, ktorá môže byť len `true` (pravda) alebo `false` (nepravda)

Používa sa na **rozhodovanie** (áno/nie situácie).

```javascript
let jeStudent = true;           // áno, je to študent
let jePovolenePristup = true;   // áno, prístup povolený
```

**Praktické použitie v reálnom živote:**
```javascript
// V hre
let maHracZivot = true;

// Vo formulári
let jeEmailPlatny = false;

// Na webe
let jeMenuOtvorene = false;
```

---

### 2.4 Undefined a Null 🚫

Ešte existujú 2 údajové typy, ktorým sa budeme venovať neskôr, iba si ich spomenieme.

**Undefined** = premenná je vytvorená, ale ešte nemá priradenú žiadnu hodnotu.

**Null** = úmyselne prázdna hodnota (používame, keď chceme povedať "tu niečo malo byť, ale je to prázdne").

```javascript
let priezvisko;  // undefined - ešte sme nenastavili hodnotu
console.log(priezvisko); // undefined

let vysledokHladania = null;  // null - žiadny výsledok
```

> **Jednoducho povedané:** `undefined` = JavaScript ešte nevie, čo tam je; `null` = my sme nastavili, že tam nič nie je.

---

## 3. A čo s tým teraz? 🤔

Teraz už vieme, že premenné môžu mať rôzne údajové typy (text, čísla, boolean).

**Ale čo s tým budeme robiť?** 🎯

S premennými môžeme rôzne **manipulovať** - to znamená:
- 📝 **Vypisovať ich hodnoty** - zobraziť používateľovi informácie
- 🔗 **Kombinovať text a premenné** - napr. "Ahoj, Janko!" kde Janko je z premennej
- 🔢 **Počítať s nimi** - sčítavať ceny, odpočítavať životy v hre
- ⚖️ **Porovnávať ich** - je vek väčší ako 18? je heslo správne?
- 🔀 **Rozhodovať sa na základe viacerých podmienok** - má 18+ rokov A zároveň má vodičák?
---

## 4. Spájanie textov 🔗

### 4.1 Spájanie s operátorom `+` (len informatívne, aby ste vedeli, o čom je reč, ak to niekde uvidíte)

```javascript
let meno = "Janko";
let priezvisko = "Mrkvička";
let celeMeno = meno + " " + priezvisko;
console.log(celeMeno); // "Janko Mrkvička"

let pozdrav = "Ahoj, " + meno + "!";
console.log(pozdrav); // "Ahoj, Janko!"
```

**⚠️ POZOR: `+` sa správa inak pre text a čísla!**
```javascript
// S číslami: SČÍTAVA
console.log(5 + 3);        // 8

// S textom: SPÁJA
console.log("5" + "3");    // "53"

// Text + číslo: SPÁJA (číslo sa zmení na text)
console.log("Body: " + 10); // "Body: 10"
console.log(5 + "3");       // "53" ❗
```

---

### 4.2 Template Literals - Moderný spôsob vkladania premenných do textu, ktorý budeme  používať 🎯


**Template literal** = nový, **lepší spôsob**, ako vkladať premenné priamo do textu.

**Ako to funguje:**
1. Namiesto úvodzoviek `"..."` použijeme **spätné úvodzovky** `` `...` ``
2. Premennú vložíme pomocou `${nazovPremennej}`

```javascript
let meno = "Janko";
let vek = 16;
let mesto = "Prievidza";

// Nový spôsob - ODPORÚČANÝ! ✅
let sprava = `Volám sa ${meno}, mám ${vek} rokov a bývam v ${mesto}.`;
//           ↑         ↑      ↑       ↑     ↑               ↑        ↑
//           backtick  vložená   backtick koniec
//                     premenná

console.log(sprava);
// "Volám sa Janko, mám 16 rokov a bývam v Prievidza."
```

**⌨️ Ako napísať spätné úvodzovky (backtick)?**
- Windows: `Alt Gr + ľ` alebo `pravý Alt + ľ`

---

#### Porovnanie - PRED a PO

**PRED (starý spôsob s +):**
```javascript
let produkt = "Tričko";
let cena = 19.99;
let pocet = 3;

// Neprehľadné, veľa úvodzoviek a plusov ❌
let hlaska = "Produkt: " + produkt + ", Cena: " + cena + "€, Spolu: " + (pocet * cena) + "€";
```

**PO (template literals):**
```javascript
let produkt = "Tričko";
let cena = 19.99;
let pocet = 3;

// Prehľadné a jasné! ✅
let hlaska = `Produkt: ${produkt}, Cena: ${cena}€, Spolu: ${pocet * cena}€`;
```

---

#### Praktické príklady

**Príklad 1: E-shop**
```javascript
let produkt = "Tričko";
let cena = 19.99;

console.log(`Produkt: ${produkt}, Cena: ${cena}€`);
// "Produkt: Tričko, Cena: 19.99€"
```

**Príklad 2: Hra - body**
```javascript
let body = 150;
console.log(`Máš ${body} bodov!`);
// "Máš 150 bodov!"
```

**Príklad 3: Počítanie priamo v texte**
```javascript
let pocet = 5;
let cenaProduktu = 10;

console.log(`Celková cena: ${pocet * cenaProduktu}€`);
// "Celková cena: 50€"
```

**Príklad 4: Porovnanie veku**
```javascript
let vek = 16;
let minimalnyVek = 18;

console.log(`Máš ${vek} rokov, potrebuješ ${minimalnyVek - vek} rokov na dospelost.`);
// "Máš 16 rokov, potrebuješ 2 rokov na dospelost."
```

---

## 5. Operátory ➕⚖️🔀

**Operátor** = symbol, ktorý vykoná operáciu (sčítanie, porovnanie, rozhodovanie...)

Existujú 3 hlavné typy operátorov:
- **Aritmetické** - počítanie (+, -, *, /)
- **Porovnávacie** - porovnávanie hodnôt (===, <, >)
- **Logické** - kombinovanie podmienok (&&, ||, !)

---

### 5.1 Aritmetické operátory (počítanie) ➕➖✖️➗

| Operátor | Význam | Príklad | Výsledok |
|----------|--------|---------|----------|
| `+` | Sčítanie | `5 + 3` | `8` |
| `-` | Odčítanie | `10 - 4` | `6` |
| `*` | Násobenie | `6 * 2` | `12` |
| `/` | Delenie | `20 / 4` | `5` |
| `%` | Zvyšok po delení | `10 % 3` | `1` |

**Praktické príklady:**
```javascript
// E-shop - výpočet ceny
let cenaProduktu = 25;
let pocetKusov = 3;
let celkovaCena = cenaProduktu * pocetKusov;
console.log("Celková cena:", celkovaCena); // 75

// Zvyšok po delení (modulo)
console.log(5 % 2); // výsledok 1 (5 delené 2 = 2 so zvyškom 1)
```

---

### 5.2 Porovnávacie operátory (je väčšie/menšie?) ⚖️

Používame na **porovnávanie hodnôt**. Výsledok je vždy `true` alebo `false`.

| Operátor | Význam | Príklad | Výsledok |
|----------|--------|---------|----------|
| `===` | Rovná sa (typ aj hodnota) | `5 === 5` | `true` |
| `!==` | Nerovná sa | `5 !== 3` | `true` |
| `>` | Väčší ako | `10 > 5` | `true` |
| `<` | Menší ako | `3 < 8` | `true` |
| `>=` | Väčší alebo rovný | `5 >= 5` | `true` |
| `<=` | Menší alebo rovný | `4 <= 10` | `true` |

**Praktické príklady:**
```javascript
let vek = 16;
let minimalnyVek = 18;

console.log(vek >= minimalnyVek);  // false (16 nie je ≥ 18)
console.log(vek < minimalnyVek);   // true (16 je < 18)

let body = 100;
let pozadovaneBodov = 50;

console.log(body >= pozadovaneBodov);  // true (100 ≥ 50)

let heslo = "tajne123";
let zadaneHeslo = "tajne456";

console.log(heslo === zadaneHeslo);  // false (nie sú rovnaké)
```

**⚠️ VŽDY použi `===` (nie `==`)**
```javascript
// SPRÁVNE ✅
5 === 5        // true
5 === "5"      // false (rôzne typy!)

// NEPOUŽÍVAJ ❌
5 == 5         // true
5 == "5"       // true (JavaScript zmení typ - mätúce!)
```

---

### 5.3 Logické operátory (a/alebo/nie) 🔀 (zatiaľ len informatívne, budem vyžadovať až pri podmienkach IF)

Používame na **kombinovanie podmienok**.

| Operátor | Názov | Význam | Príklad | Výsledok |
|----------|-------|--------|---------|----------|
| `&&` | AND (a zároveň) | Obe podmienky musia byť pravda | `true && true` | `true` |
| `\|\|` | OR (alebo) | Aspoň jedna podmienka musí byť pravda | `true \|\| false` | `true` |
| `!` | NOT (negácia) | Opak hodnoty | `!true` | `false` |

#### 5.3.1 AND (`&&`) - "a zároveň"

Výsledok je `true` len ak sú **OBE podmienky** pravdivé.

```javascript
let vek = 20;
let maRidicak = true;

// Môže šoférovať, ak má 18+ rokov A zároveň má vodičák
let mozeŠoferovať = (vek >= 18) && (maRidicak === true);
console.log(mozeŠoferovať); // true
```

**Tabuľka pravdivosti AND:**
```javascript
true  && true   // true  ✅
true  && false  // false
false && true   // false
false && false  // false
```

#### 5.3.2 OR (`||`) - "alebo"

Výsledok je `true` ak je **aspoň jedna podmienka** pravdivá.

```javascript
let jeVikend = true;
let jeDovolenka = false;

// Môže si oddýchnuť, ak je víkend ALEBO dovolenka
let mozeOddychovat = jeVikend || jeDovolenka;
console.log(mozeOddychovat); // true (lebo víkend je true)
```

**Tabuľka pravdivosti OR:**
```javascript
true  || true   // true  ✅
true  || false  // true  ✅
false || true   // true  ✅
false || false  // false
```

#### 5.3.3 NOT (`!`) - "opak"

Otočí hodnotu - z `true` spraví `false` a naopak.

```javascript
let jePrihlaseny = false;
let nieJePrihlaseny = !jePrihlaseny;
console.log(nieJePrihlaseny); // true

console.log(!true);   // false
console.log(!false);  // true

let jePovolenePristup = true;
console.log(!jePovolenePristup); // false
```

**Praktický príklad:**
```javascript
let maZaplatene = false;

if (!maZaplatene) {
  console.log("Musíš zaplatiť!");
}
// "Ak NEMÁ zaplatené, vypíš správu"
```

---

## 8. Rekapitulácia - čo sme sa naučili 📚

✅ **Údajové typy:**
- `string` - text v úvodzovkách: `"Janko"`
- `number` - číslo bez úvodzoviek: `16` (desatinné s bodkou: `3.14`)
- `boolean` - pravda/nepravda: `true` / `false`
- `undefined` - hodnota ešte nie je nastavená
- `null` - úmyselne prázdna hodnota

✅ **Aritmetické operátory:**
- `+` `-` `*` `/` `%` - základné počítanie (sčítanie, odčítanie, násobenie, delenie, zvyšok po delení)

✅ **Spájanie textu:**
- Template literals: `` `Mám ${vek} rokov` ``

✅ **Porovnávacie operátory:**
- `===` `!==` - rovná sa / nerovná sa
- `>` `<` `>=` `<=` - väčší/menší

✅ **Logické operátory:**
- `&&` (AND) - obe podmienky musia byť pravda
- `||` (OR) - aspoň jedna podmienka musí byť pravda
- `!` (NOT) - opak hodnoty

---
