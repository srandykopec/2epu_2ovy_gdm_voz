# Flexbox a Grid - Rozloženie prvkov na stránke

## 🤔 Prečo vôbec Flexbox a Grid?

### Problém: Ako prvky usporiadať na stránke?

Kedysi sa na rozloženie stránky používali **tabuľky** (`<table>`) alebo **float**. To bolo náročné, neprehľadné a nefungovalo to dobre na mobiloch.

**Flexbox a Grid** sú moderné nástroje, ktoré **zjednodušujú rozloženie prvkov** - vďaka nim môžeš:
- ✅ Jednoducho dať prvky vedľa seba
- ✅ Vytvoriť mriežku produktov/obrázkov
- ✅ Vycentrovať čokoľvek (horizontálne aj vertikálne)
- ✅ Vytvoriť responzívne stránky bez komplikácií

**Čo je responzívna stránka?**  
Stránka, ktorá sa **automaticky prispôsobí veľkosti obrazovky** - vyzerá dobre na PC, tablete aj mobile.

**Rozdiel:**
- ❌ **Neresponzívna:** Fixná šírka, na mobile treba scrollovať horizontálne (otrasný zážitok)
- ✅ **Responzívna:** Automaticky sa preusporiadava - napr. 3 stĺpce na PC → 1 stĺpec na mobile

---

## 📦 Základná myšlienka

Predstav si **krabicu** (kontajner), v ktorej máš **menšie krabice** (prvky).

Flexbox a Grid ti umožňujú **kontrolovať**, ako sú tieto menšie krabice **rozložené** v tej veľkej.

```
┌─────────────────────────────────┐
│  KONTAJNER                      │
│  ┌─────┐  ┌─────┐  ┌─────┐      │
│  │  1  │  │  2  │  │  3  │      │
│  └─────┘  └─────┘  └─────┘      │
└─────────────────────────────────┘
```

---

## 🎯 Flexbox vs Grid - Kedy čo použiť?

### 💡 Jedna os vs. dve osi

**FLEXBOX** = Prvky v **jednom smere** (buď horizontálne ALEBO vertikálne)
- Ako *vagóny vlaku* - idú za sebou v jednom smere
- Používaj pre: navigácie, tlačidlá v rade, centrovanie

**GRID** = Prvky v **mriežke** (horizontálne A vertikálne naraz)
- Ako *šachovnica* - riadky aj stĺpce súčasne
- Používaj pre: galérie, produkty, layout celej stránky

---

## 💪 FLEXBOX - Prvky v rade/stĺpci

📚 **Dokumentácia:** [MDN - Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)

### 💡 Flexbox = Kontajner + Smer

1. **Povieš kontajneru:** "Buď flexbox!" → `display: flex`
2. **Prvky sa automaticky dajú vedľa seba** (v rade)
3. **Môžeš zmeniť smer** → `flex-direction: column` (pod seba)

### Vizualizácia

```
BEZ FLEXU:                  S FLEXOM:
┌─────────────┐             ┌─────────────────────────────┐
│   Prvok 1   │             │ Prvok 1 │ Prvok 2 │ Prvok 3 │
├─────────────┤             └─────────────────────────────┘
│   Prvok 2   │             (automaticky vedľa seba!)
├─────────────┤
│   Prvok 3   │
└─────────────┘
(klasicky pod sebou)
```

---

## 💪 FLEXBOX

### 💡 Dve dôležité osi

Keď máš `flex-direction: row` (prvky vedľa seba):
- **Hlavná os** = horizontálna (→)  
  → Ovládaš cez `justify-content`
- **Krížová os** = vertikálna (↓)  
  → Ovládaš cez `align-items`

```
       justify-content (hlavná os →)
    ┌─────────────────────────────┐
    │  ┌───┐  ┌───┐  ┌───┐        │
    │  │ 1 │  │ 2 │  │ 3 │        │  ← align-items (krížová os ↓)
    │  └───┘  └───┘  └───┘        │
    └─────────────────────────────┘
```

### 💡 Gap = medzery (najjednoduchšie!)

Namiesto komplikovaných `margin` na každý prvok:
```css
.kontajner {
  display: flex;
  gap: 20px; /* Medzery medzi prvkami - HOTOVO! */
}
```

---

### 🎯 Praktické príklady Flexbox

#### Príklad 1: Navigácia (linky vedľa seba)

**HTML:**
```html
<nav class="nav">
  <a href="#">Domov</a>
  <a href="#">Produkty</a>
  <a href="#">Kontakt</a>
</nav>
```

**CSS:**
```css
.nav {
  display: flex;      /* linky vedľa seba */
  gap: 30px;          /* medzery medzi linkami */
}
```

✅ **Výsledok:** Linky sú pekne vedľa seba s rovnakými medzerami

🔗 **Živý príklad:** [Otvoriť na JSFiddle](https://jsfiddle.net/z8qjwoxt/)

---

#### Príklad 2: Centrovanie (horizontálne + vertikálne)

**Problém:** Ako vycentrovať prvok na stred stránky?

**Riešenie:**
```css
.kontajner {
  display: flex;
  justify-content: center; /* horizontálne na stred */
  align-items: center;     /* vertikálne na stred */
  height: 100vh;           /* výška celej obrazovky */
}
```

✅ **Výsledok:** Prvok je úplne na strede

---

#### Príklad 3: Header (logo vľavo, menu vpravo)

**CSS:**
```css
.header {
  display: flex;
  justify-content: space-between; /* jeden vľavo, druhý vpravo */
  align-items: center;            /* vertikálne na stred */
}
```

✅ **Výsledok:** Logo vľavo, menu vpravo, obidva na strede vertikálne

---

### 📝 Flexbox - Najdôležitejšie vlastnosti

**Na kontajneri:**
```css
display: flex;                    /* Aktivuje flexbox */
gap: 20px;                        /* Medzery medzi prvkami */
flex-direction: row;              /* Smer: row (vedľa seba) / column (pod sebou) */
justify-content: center;          /* Zarovnanie na hlavnej osi */
align-items: center;              /* Zarovnanie na krížovej osi */
flex-wrap: wrap;                  /* Zalomenie na ďalší riadok */
```

**Hodnoty pre justify-content:**
- `flex-start` - na začiatok (vľavo)
- `center` - na stred
- `flex-end` - na koniec (vpravo)
- `space-between` - rovnomerne, okraje prilepené
- `space-around` - rovnomerne, malé medzery aj pri okrajoch

**Hodnoty pre align-items:**
- `stretch` - natiahnuté cez celú výšku
- `center` - na stred
- `flex-start` - hore
- `flex-end` - dole

---

## 🎨 GRID - Mriežka prvkov

📚 **Dokumentácia:** [MDN - CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)

### 💡 Grid = Šachovnica

Grid ti umožňuje vytvoriť **mriežku** - definuješ **stĺpce** a **riadky**, a prvky sa automaticky umiestnia.

```
┌─────────┬─────────┬─────────┐
│ Prvok 1 │ Prvok 2 │ Prvok 3 │  ← Riadok 1
├─────────┼─────────┼─────────┤
│ Prvok 4 │ Prvok 5 │ Prvok 6 │  ← Riadok 2
└─────────┴─────────┴─────────┘
     ↑         ↑         ↑
  Stĺpec 1  Stĺpec 2  Stĺpec 3
```

### 💡 Grid v 3 krokoch

1. **Povieš kontajneru:** "Buď grid!" → `display: grid`
2. **Definuješ stĺpce:** → `grid-template-columns: 1fr 1fr 1fr` (3 rovnaké)
3. **Pridáš medzery:** → `gap: 20px`

**HOTOVO!** Prvky sa automaticky rozdelia do mriežky.

---

### 💡 Čarovná jednotka `fr` (fraction)

`fr` = **zlomok dostupného priestoru**

```css
grid-template-columns: 1fr 1fr 1fr;
```
= 3 rovnaké stĺpce (každý dostane 1/3 priestoru)

```css
grid-template-columns: 1fr 2fr 1fr;
```
= Stredný stĺpec je 2× širší (dostane 2/4 priestoru)

---

### 💡 Repeat = šikovná skratka

Namiesto `1fr 1fr 1fr` píš:
```css
grid-template-columns: repeat(3, 1fr);
```
= "Zopakuj 3× stĺpec s veľkosťou 1fr"

---

### 🎯 Praktické príklady Grid

#### Príklad 1: Galéria obrázkov (3 stĺpce)

**HTML:**
```html
<div class="galeria">
  <img src="obr1.jpg">
  <img src="obr2.jpg">
  <img src="obr3.jpg">
  <img src="obr4.jpg">
  <img src="obr5.jpg">
  <img src="obr6.jpg">
</div>
```

**CSS:**
```css
.galeria {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 rovnaké stĺpce */
  gap: 20px;
}
```

✅ **Výsledok:** Obrázky sa automaticky rozdelia do 3 stĺpcov (2 riadky)

---

#### Príklad 2: Responzívna galéria (MEGA UŽITOČNÉ! 🔥)

**Problém:** Chcem 3 stĺpce na PC, 2 na tablete, 1 na mobile

**Riešenie:** Automatická responzívnosť BEZ media queries!

```css
.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

**Ako to funguje:**
- `minmax(250px, 1fr)` = stĺpec minimálne 250px, maximálne 1fr
- `auto-fit` = automaticky toľko stĺpcov, koľko sa zmestí
- Na veľkej obrazovke: 4 stĺpce
- Na strednej: 2 stĺpce
- Na mobilne: 1 stĺpec
- **Všetko automaticky!**

✅ **Toto je najužitočnejší riadok CSS pre galérie/produkty!**

---

#### Príklad 3: Produkty v e-shope

**CSS:**
```css
.produkty {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}
```

✅ **Výsledok:** Produkty sa automaticky rozložia podľa veľkosti obrazovky

---

### 📝 Grid - Najdôležitejšie vlastnosti

**Na kontajneri:**
```css
display: grid;                                     /* Aktivuje grid */
gap: 20px;                                         /* Medzery */
grid-template-columns: repeat(3, 1fr);             /* 3 rovnaké stĺpce */
grid-template-columns: 200px 1fr 200px;            /* Fixné + flexibilný */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responzívne */
```

**Na prvkoch (pokročilé):**
```css
grid-column: 1 / 3;   /* Roztiahnuť cez 2 stĺpce */
grid-column: 1 / -1;  /* Roztiahnuť cez všetky stĺpce */
grid-row: span 2;     /* Roztiahnuť cez 2 riadky */
```

---

## 📊 Rýchle porovnanie

| **Otázka** | **Flexbox** | **Grid** |
|---|---|---|
| Koľko smerov naraz? | 1 (riadok ALEBO stĺpec) | 2 (riadky A stĺpce) |
| Kedy použiť? | Navigácia, tlačidlá, centrovanie | Galérie, produkty, layouty |
| Ako aktivovať? | `display: flex` | `display: grid` |
| Medzery? | `gap: 20px` | `gap: 20px` |
| Responzívnosť? | `flex-wrap: wrap` | `auto-fit, minmax()` |

---

## 🎓 Čo si zapamätať

### ✅ Flexbox v kocke
1. Používaj pre **prvky v rade/stĺpci** (jedna os)
2. Aktivuj: `display: flex`
3. Medzery: `gap: 20px`
4. Centrovanie: `justify-content: center` + `align-items: center`
5. Ideálne pre: **navigácie, tlačidlá, header**

### ✅ Grid v kocke
1. Používaj pre **mriežky** (dve osi)
2. Aktivuj: `display: grid`
3. Stĺpce: `grid-template-columns: repeat(3, 1fr)`
4. Responzívne: `repeat(auto-fit, minmax(250px, 1fr))`
5. Ideálne pre: **galérie, produkty, layouty**

---

## 💡 Praktické tipy

1. **Pre navigáciu** → Flexbox
2. **Pre galériu obrázkov** → Grid
3. **Pre centrovanie jedného prvku** → Flexbox
4. **Pre rozloženie celej stránky** → Grid (alebo oboje!)
5. **Gap je tvoj priateľ** - používaj ho namiesto margin
6. **Môžeš kombinovať!** Grid pre layout stránky, Flex pre navigáciu vnútri

---

## 🚀 Najužitočnejšie "kúzla"

### 1. Perfektné centrovanie (Flexbox)
```css
display: flex;
justify-content: center;
align-items: center;
```

### 2. Automaticky responzívna galéria (Grid)
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 20px;
```

### 3. Logo vľavo, menu vpravo (Flexbox)
```css
display: flex;
justify-content: space-between;
align-items: center;
```

---

## 🎯 Praktická rada na záver

**Keď nevieš, ktorý použiť:**
- Ak uvažuješ **"vedľa seba"** → **Flexbox**
- Ak uvažuješ **"v mriežke"** → **Grid**

**A nezabudni:** Obidva používajú `gap` na medzery a obidva sú jednoduché, keď pochopíš základnú myšlienku! 🎉
