
## Cvičenie 1: Obľúbené veci - krok za krokom 🎨
### KROK 1️⃣: Vytvor premenné

**Zadanie:** Vytvor premenné pre tvoje obľúbené veci.

```javascript
// Vytvorenie premenných
const meno = "Janko";
const vek = 16;
const oblubenySport = "Futbal";
const oblubenyFilm = "Inception";
const oblubeneJedlo = "Pizza";
const oblubenaFarba = "Modrá";
```

---

### KROK 2️⃣: Vypíš každú premennú zvlášť (text + premenná)

**Zadanie:** Vypíš každú premennú s popisným textom pomocou `console.log()`.

**Spôsob A - Klasický (text, premenná):**
```javascript
// Vypísanie každej premennej zvlášť - klasický spôsob
console.log("Meno:", meno);
console.log("Vek:", vek);
console.log("🎮 Obľúbený šport:", oblubenySport);
console.log("🎬 Obľúbený film:", oblubenyFilm);
console.log("🍕 Obľúbené jedlo:", oblubeneJedlo);
console.log("🎨 Obľúbená farba:", oblubenaFarba);
```

**Spôsob B - Template literals (každá premenná zvlášť):**
```javascript
// Vypísanie každej premennej zvlášť - pomocou template literals
console.log(`Meno: ${meno}`);
console.log(`Vek: ${vek}`);
console.log(`🎮 Obľúbený šport: ${oblubenySport}`);
console.log(`🎬 Obľúbený film: ${oblubenyFilm}`);
console.log(`🍕 Obľúbené jedlo: ${oblubeneJedlo}`);
console.log(`🎨 Obľúbená farba: ${oblubenaFarba}`);
```

**🖥️ Výstup v konzole (oba spôsoby majú rovnaký výsledok):**
```
Meno: Janko
Vek: 16
🎮 Obľúbený šport: Futbal
🎬 Obľúbený film: Inception
🍕 Obľúbené jedlo: Pizza
🎨 Obľúbená farba: Modrá
```

**💡 Rozdiel:**
- **Spôsob A:** `console.log("Text:", premenná)` - oddelené čiarkou
- **Spôsob B:** `console.log(`Text: ${premenná}`)` - všetko v template literals (spätné úvodzovky `` ` ``)

---

### KROK 3️⃣: Vypíš všetko do jednej vety pomocou template literals

**Zadanie:** Teraz použi **template literals** (spätné úvodzovky `` ` ``) a daj všetky informácie do jednej peknej vety.

```javascript
// Vypísanie všetkého do jednej vety pomocou template literals
console.log(`Volám sa ${meno}, mám ${vek} rokov, môj obľúbený šport je ${oblubenySport}, najradšej pozerám film ${oblubenyFilm}, milujem ${oblubeneJedlo} a moja obľúbená farba je ${oblubenaFarba}.`);
```

**🖥️ Výstup v konzole:**
```
Volám sa Janko, mám 16 rokov, môj obľúbený šport je Futbal, najradšej pozerám film Inception, milujem Pizza a moja obľúbená farba je Modrá.
```

---

### ✅ KOMPLETNÝ KÓD - všetko dokopy

```javascript
// KROK 1: Vytvorenie premenných
const meno = "Janko";
const vek = 16;
const oblubenySport = "Futbal";
const oblubenyFilm = "Inception";
const oblubeneJedlo = "Pizza";
const oblubenaFarba = "Modrá";

// KROK 2A: Vypísanie každej premennej zvlášť - klasický spôsob
console.log("Meno:", meno);
console.log("Vek:", vek);
console.log("🎮 Obľúbený šport:", oblubenySport);
console.log("🎬 Obľúbený film:", oblubenyFilm);
console.log("🍕 Obľúbené jedlo:", oblubeneJedlo);
console.log("🎨 Obľúbená farba:", oblubenaFarba);

// KROK 2B: Vypísanie každej premennej zvlášť - pomocou template literals
console.log(`Meno: ${meno}`);
console.log(`Vek: ${vek}`);
console.log(`🎮 Obľúbený šport: ${oblubenySport}`);
console.log(`🎬 Obľúbený film: ${oblubenyFilm}`);
console.log(`🍕 Obľúbené jedlo: ${oblubeneJedlo}`);
console.log(`🎨 Obľúbená farba: ${oblubenaFarba}`);

// KROK 3: Vypísanie všetkého do jednej vety pomocou template literals
console.log(`Volám sa ${meno}, mám ${vek} rokov, môj obľúbený šport je ${oblubenySport}, najradšej pozerám film ${oblubenyFilm}, milujem ${oblubeneJedlo} a moja obľúbená farba je ${oblubenaFarba}.`);
```

---

## 📌 Čo si precvičil/a

✅ **Tvorba premenných** s `const`  
✅ **Výpis do konzoly - klasický spôsob:** `console.log("Text:", premenná)`  
✅ **Výpis do konzoly - template literals:** `console.log(`Text: ${premenná}`)`  
✅ **Rozdiel medzi oboma spôsobmi** výpisu  
✅ **Template literals pre dlhú vetu** - spojenie všetkého do jednej vety s `` `text ${premenná}` ``

---
