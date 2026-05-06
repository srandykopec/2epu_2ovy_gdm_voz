# JavaScript Starterpack 🚀

## 1. Čo je JavaScript?

**JavaScript** je programovací jazyk, ktorý umožňuje vytvárať **interaktívne** webové stránky. Spúšťa sa v prehliadači a dokáže:
- Reagovať na akcie používateľa (kliknutia, písanie, pohyb myšou...)
- Meniť obsah stránky dynamicky
- Validovať formuláre
- Vytvárať animácie a efekty

> **⚠️ POZOR:** JavaScript **NIE JE** to isté ako Java! 
> 
> - **JavaScript** = jazyk pre webové stránky (beží v prehliadači)
> - **Java** = úplne iný programovací jazyk (používa sa na servery, mobilné aplikácie...)
> 
> Majú podobné meno, ale sú to dva **rôzne jazyky**!

### Čo znamená interaktivita?

**Interaktivita** = schopnosť stránky reagovať na akcie používateľa a meniť sa v reálnom čase, bez potreby obnoviť stránku.

**Praktické príklady, kde sa JavaScript používa:**
- 🔘 **Tlačidlá a modálne okná** - Po kliknutí na tlačidlo sa zobrazí vyskakovacie okno alebo sa zmení farba pozadia
- 📝 **Formuláre** - Kontrola, či si vyplnil všetky polia správne (napr. e-mail vo formáte `meno@example.com`)
- 🎨 **Galéria obrázkov** - Prechádzanie medzi obrázkami pomocou šípok, zväčšovanie fotografií
- 🛒 **Nákupný košík** - Pridávanie produktov, počítanie celkovej ceny v reálnom čase
- 🌙 **Prepínanie tmavého režimu** - Zmena vzhľadu stránky z light mode na dark mode
- ⭐ **Hodnotenie hviezdičkami** - Po kliknutí na hviezdičku sa zvýrazní
- 🔍 **Živé vyhľadávanie** - Pri písaní sa okamžite zobrazujú výsledky (ako na Google)
- 🎮 **Hry v prehliadači** - Jednoduché hry ako had, piškvôrky, reaktivačné testy
- 📊 **Interaktívne grafy** - Grafy, kde môžeš kliknúť na body a vidieť detaily
- ✅ **To-do zoznam** - Pridávanie úloh, označovanie hotových, mazanie

**Príklad:** Keď klikneš na tlačidlo "Pridať do košíka", JavaScript okamžite aktualizuje číslo pri ikone košíka bez potreby načítať celú stránku znova.

---

## 2. Ako pridať JavaScript do HTML?

### Interný JavaScript (priamo v HTML súbore)
```html
<!DOCTYPE html>
<html>
<head>
    <title>Moja stránka</title>
</head>
<body>
    <h1>Ahoj svet!</h1>
    
    <script>
        // Sem píšeme JavaScript kód
        console.log("Hello World!");
    </script>
</body>
</html>
```

### Externý JavaScript (oddelený súbor)
```html
<!DOCTYPE html>
<html>
<head>
    <title>Moja stránka</title>
</head>
<body>
    <h1>Ahoj svet!</h1>
    
    <script src="script.js"></script>
</body>
</html>
```

**⚠️ DÔLEŽITÉ:** `<script>` tag dávame na koniec, pred element `<body>`, aby sa stránka najprv načítala a až potom pracovala s JavaScriptom.

---

## 3. Komentáre v JavaScripte

**Komentár** = Text v kóde, ktorý JavaScript ignoruje. Slúži na poznámky pre programátora.

**Prečo písať komentáre?**
- 📝 **Vysvetliť zložitý kód** - Aby si po čase vedel, čo si myslel
- 👥 **Pomôcť iným** - Keď niekto iný číta tvoj kód
- 🚫 **Dočasne vypnúť kód** - Bez toho, aby si ho zmazal

---

### Jednoriadkový komentár

Používa sa `//` - všetko za `//` na tom istom riadku sa ignoruje.

```javascript
// Toto je komentár - JavaScript ho ignoruje
let meno = "Janko"; // Môžem pridať komentár aj za kód

// console.log("Tento riadok sa nespustí");
console.log("Tento riadok sa spustí"); // Vypíše: Tento riadok sa spustí
```

---

### Viacriadkový komentár

Používa sa `/* ... */` - všetko medzi `/*` a `*/` sa ignoruje.

```javascript
/*
  Toto je dlhší komentár
  na viacerých riadkoch.
  Užitočný na dlhšie vysvetlenia.
*/

let vek = 16;

/*
let zakomentovanyKod = "toto sa nespustí";
let dalsyRiadok = 123;
*/

console.log("Toto funguje"); // Vypíše: Toto funguje
```
---

## 4. Základné princípy a termíny

### 4.1 Console (Konzola)

**Console (Konzola)** = Vývojársky nástroj zabudovaný v každom prehliadači, kde sa zobrazujú správy z JavaScriptu.

**Prečo je konzola dôležitá?**
- 🐛 **Hľadanie chýb (debugging)** - Tam sa zobrazujú **všetky chybové hlášky** z tvojho kódu
- 📊 **Kontrola hodnôt** - Môžeš si vypísať hodnoty premenných a overiť, či je všetko v poriadku
- 🧪 **Testovanie kódu** - V konzole môžeš písať JavaScript kód priamo a hneď vidíš výsledok
- 👁️ **Konzolu vidíš len ty** - Bežný používateľ stránky ju nevidí, je to nástroj len pre vývojárov

**Ako otvoriť konzolu:**
- Chrome/Edge: `F12` alebo `Ctrl + Shift + J`
- Firefox: `F12` alebo `Ctrl + Shift + K`

**Praktický príklad s premennými:**
```javascript
let meno = "Janko";
let vek = 16;

console.log("Meno:", meno);           // Meno: Janko
console.log("Vek:", vek);             // Vek: 16
console.log(meno, "má", vek, "rokov"); // Janko má 16 rokov
```

**Interaktívne použitie konzoly:**
Môžeš priamo do konzoly napísať JavaScript príkaz a hneď uvidíš výsledok:
```javascript
5 + 3        // → 8
"Ahoj"       // → "Ahoj"
10 > 5       // → true
Math.random() // → náhodné číslo napr. 0.6438271
```

--- 


### 4.2 Premenné (Variables)

**Čo je premenná a prečo ju potrebujeme?**

Predstav si premennú ako **škatuľku s nálepkou**, do ktorej môžeš niečo uložiť:
- **Nálepka** = názov premennej (napr. `meno`, `vek`, `body`)
- **Obsah škatuľky** = hodnota (napr. `"Janko"`, `16`, `100`)

```
 ┌─────────────┐
 │ meno        │  ← názov premennej (nálepka)
 ├─────────────┤
 │  "Janko"    │  ← hodnota (obsah)
 └─────────────┘
```

**Prečo potrebujeme premenné?**
- 🎮 **V hre:** Uložiť si počet bodov, životy, meno hráča
- 🛒 **V e-shope:** Zapamätať si položky v košíku, celkovú cenu
- 📝 **Vo formulári:** Uložiť si, čo používateľ napísal do políčok
- 🌙 **Na stránke:** Zapamätať si, či má používateľ zapnutý tmavý režim

---

#### Vytvorenie premennej s `let`

**`let`** = Vytvor premennú, ktorú **môžem neskôr zmeniť**

**Syntax (ako sa to píše):**
```javascript
let nazovPremennej = hodnota;
```

- `let` - povieme JavaScriptu "chcem vytvoriť premennú"
- `nazovPremennej` - meno, ktoré si vymyslíme (napr. `meno`, `vek`, `body`)
- `=` - do premennej vložíme hodnotu
- `hodnota` - čo chceme uložiť (text, číslo...)
- `;` - koniec príkazu (bodkočiarka)

---

**Najjednoduchší príklad:**
```javascript
// Vytvorím premennú s menom "meno" a vložím do nej text "Janko"
let meno = "Janko";

// Vypíšem si, čo je v premennej
console.log(meno); // Janko
```

**Čo sa stalo?**
1. JavaScript vytvoril "škatuľku" s nálepkou `meno`
2. Do škatuľky dal text `"Janko"`
3. Keď napíšem `console.log(meno)`, JavaScript pozrie do škatuľky a vypíše `Janko`

---

**Príklad so zmenou hodnoty:**
```javascript
// Vytvorím premennú
let pocetBodov = 0;
console.log(pocetBodov); // 0

// Získal som bod - zmením hodnotu
pocetBodov = 5;
console.log(pocetBodov); // 5

// Získal som ďalší bod
pocetBodov = 10;
console.log(pocetBodov); // 10
```

**Čo je dôležité:**
- Pri **prvom vytvorení** píšem `let pocetBodov = 0;`
- Pri **zmene hodnoty** píšem len `pocetBodov = 5;` (BEZ slova `let`!)

---

#### Konštanta s `const`

**`const`** = Vytvor konštantu, ktorú **NEMÔŽEM** neskôr zmeniť

Používame pre veci, ktoré sa nemenia (pevné hodnoty):

```javascript
const maximalnyPocetZivotov = 5;
const nazovHry = "Super Mario";
const PI = 3.14159;

console.log(maximalnyPocetZivotov); // 5

// Toto NEJDE - vyhodí chybu!
// maximalnyPocetZivotov = 10; // ❌ CHYBA! const sa nedá zmeniť
```

**Kedy použiť `let` a kedy `const`?**
- ✅ **`let`** - keď sa hodnota bude meniť (body v hre, počet položiek v košíku)
- ✅ **`const`** - keď sa hodnota nemení (maximálny limit, názov aplikácie, matematické konštanty)

**Pravidlo:** Ak nevieš, použi `const`. Ak zistíš, že potrebuješ premennú zmeniť, zmeň na `let`.

---

#### Ako pomenovať premenné?

**Zlaté pravidlo:** Názov premennej by mal jasne vyjadrovať, **čo je v nej uložené**.

Keď si prečítaš názov premennej, mali by si hneď vedieť, aký typ informácie v nej je.

**Dobré názvy (čitateľné a zrozumiteľné):**
```javascript
let menoStudenta = "Janko";
let pocetBodov = 100;
let jePovolenyPristup = true;
```

**Zlé názvy (nejasné):**
```javascript
let x = "Janko";        // ❌ čo je "x"?
let p = 100;            // ❌ čo znamená "p"?
let a = true;           // ❌ čo je "a"?
```

**Pravidlá pre názvy premenných:**
- Musia začínať písmenom, `_` alebo `$`
- Môžu obsahovať písmená, čísla, `_` a `$`
- Sú **case-sensitive** = JavaScript rozlišuje veľké a malé písmená! (`meno` ≠ `Meno` ≠ `MENO`)
  ```javascript
  let meno = "Janko";
  let Meno = "Peter";
  let MENO = "Adam";
  // Toto sú TRI RÔZNE premenné!
  ```
- Nemôžu byť rezervované slová JavaScriptu (`let`,`const`, `if`, `function`...)

**Pomenovávacia konvencia (camelCase):**
```javascript
let meno = "Peter";              // ✅ jedno slovo - malé písmeno
let pocetBodov = 50;             // ✅ dve slová - druhé začína veľkým
let maximalnyPocetZivotov = 5;   // ✅ tri slová - druhé a tretie veľkým
```


---