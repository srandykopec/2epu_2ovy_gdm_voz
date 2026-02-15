# Responzívny web - Kompletný návod

## 🤔 Čo je responzívna stránka?

Stránka, ktorá sa **automaticky prispôsobí veľkosti obrazovky** - vyzerá dobre na PC, tablete aj mobile.

**Rozdiel:**
- ❌ **Neresponzívna:** Fixná šírka, na mobile treba scrollovať horizontálne (otrasný zážitok)
- ✅ **Responzívna:** Automaticky sa preusporiadava - napr. 3 stĺpce na PC → 1 stĺpec na mobile

---

## 🎯 Čo potrebuješ na responzívny web? (v poradí dôležitosti)

### 1️⃣ Viewport meta tag (POVINNÉ!)
### 2️⃣ Relatívne jednotky (%, rem, em)
### 3️⃣ max-width na kontajneroch
### 4️⃣ Flexbox a Grid (automatické rozloženie)
### 5️⃣ Media queries (breakpoints)
### 6️⃣ Responzívne obrázky

---

## 1️⃣ Viewport meta tag - BEZ TOHTO TO NEFUNGUJE!

### 🚨 Najdôležitejšia vec!

**Pridaj do `<head>` každej stránky:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Čo to robí:**
- Povie mobile prehliadaču: "Používaj šírku zariadenia, nie desktop šírku"
- Bez tohto mobile zobrazuje desktop verziu zmenšenú → nečitateľné

**Príklad:**
```html
<!DOCTYPE html>
<html lang="sk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Moja stránka</title>
</head>
```

✅ **Zapamätaj si:** Vždy ako prvé!

---

## 2️⃣ Relatívne jednotky - Prispôsobia sa obrazovke

### 🤔 Čo sú relatívne jednotky?

**Jednotky v CSS** = spôsob, ako určiť veľkosť (šírka, výška, veľkosť textu, medzery...)

Existujú **2 typy:**

#### **Fixné jednotky** (napr. `px`)
- **Pevná veľkosť** - vždy rovnaká bez ohľadu na obrazovku
- `font-size: 16px` = vždy 16 pixelov (na mobile aj na 4K monitore)
- **Problém:** Na mobiloch môže byť text príliš malý/veľký, na veľkých obrazovkách nevyužiješ priestor

#### **Relatívne jednotky** (%, rem, em, vw, vh)
- **Menia sa podľa kontextu** - prispôsobia sa zariadeniu, rodičovi, alebo obrazovke
- `width: 50%` = vždy polovica rodiča (či už je to 200px alebo 1000px)
- `font-size: 1.5rem` = vždy 1,5× základnej veľkosti (ak sa zmení základná veľkosť, zmení sa aj toto)
- **Výhoda:** Automaticky sa škálujú → lepšia responzívnosť

---

### 🎯 Prečo relatívne jednotky pre responzívny web?

**Príklad problému s fixnými px:**

```css
/* Fixné px - ZLE pre responzívnosť */
.container {
  width: 960px;  /* Na mobile (375px šírka) = horizontálny scroll! */
  font-size: 16px; /* Na veľkom monitore = príliš malé */
}
```

**Riešenie s relatívnymi jednotkami:**

```css
/* Relatívne - DOBRE pre responzívnosť */
.container {
  width: 90%;      /* Na mobile: 90% z 375px = 337px (vhodné) */
                   /* Na desktope: 90% z 1920px = 1728px (využiješ priestor) */
  font-size: 1rem; /* Prispôsobí sa nastaveniam prehliadača */
}
```

**Čo sa stane:**
- Na **mobile** (375px): kontajner má 337px → perfektne sa zmestí
- Na **tablete** (768px): kontajner má 691px → využije priestor
- Na **desktope** (1920px): kontajner má 1728px → široký, ale môžeš obmedziť cez `max-width`

✅ **Výsledok:** Jeden CSS kód funguje na všetkých zariadeniach!

---

### Najdôležitejšie relatívne jednotky

#### **% (percentá)** - Relatívne k veľkosti rodiča
```css
.rodic {
  width: 1000px;
}

.potomok {
  width: 50%;     /* = 500px (50% z 1000px) */
}
```

**Ako sa prispôsobujú:**
- Ak sa zmení rodič na 500px → potomok bude 250px (stále 50%)
- Na mobile (rodič 375px) → potomok bude 187.5px
- **Automaticky reaguje na zmenu rodiča!**

**Použitie:** Šírky kontajnerov (krabíc), layouty

---

#### **rem** - Relatívne k veľkosti písma v `<html>`
```css
html {
  font-size: 16px; /* Základná veľkosť písma v prehliadačoch */
}

h1 {
  font-size: 2rem; /* = 32px (2 × 16px) */
}

.spacing {
  margin: 1.5rem; /* = 24px (1.5 × 16px) */
}
```

**Ako sa prispôsobujú:**
- Ak používateľ v prehliadači zväčší písmo (nastavenia prístupnosti stránky) → všetko s `rem` sa automaticky zväčší
- Zmeniš `html { font-size: 20px }` → celá stránka sa zväčší proporcionálne
- **Jeden centrálny bod ovládania veľkostí!**

**Prečo je to dobré:**
- Starší ľudia si môžu zväčšiť text → stránka zostane prehľadná
- Zmeniš dizajn (väčšie písmo všade) → zmeníš len 1 riadok v CSS

**Použitie:** Písmo, medzery, padding  
**Výhoda:** Zmeniš 1 miesto (html) → zmení sa celá stránka

---

#### **em** - Relatívne k veľkosti písma rodiča
```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 1.5em; /* = 30px (1.5 × 20px) */
}
```

**Použitie:** Menej časté, môže byť mätúce  
**Lepšie použiť:** rem

---

#### **vw / vh** - Relatívne k šírke/výške viewportu (obrazovky)
```css
.hero {
  width: 100vw;  /* 100% šírky viewportu */
  height: 100vh; /* 100% výšky viewportu */
}

.responsive-text {
  font-size: 4vw; /* 4% šírky obrazovky */
}
```

**Ako sa prispôsobujú:**
- `100vw` na mobile (375px) = 375px široké
- `100vw` na desktope (1920px) = 1920px široké
- `100vh` = vždy plná výška obrazovky (bez scrollovania)
- **Reaguje priamo na veľkosť okna prehliadača!**

**Praktický príklad:**
```css
/* Hero sekcia vždy cez celú obrazovku */
.hero {
  height: 100vh; /* Na mobile aj desktope plná výška */
  background: url('bg.jpg');
}
```
```

**Použitie:** Hero sekcie na celú obrazovku, responzívne písmo

---

## 3️⃣ max-width - Kontrola maximálnej šírky

### 🎯 Prečo max-width?

Na veľkých obrazovkách (4K monitor) nechceš, aby text bol široký cez celú obrazovku → nečitateľné.

### Použitie

```css
.container {
  width: 90%;           /* Na malých zariadeniach: 90% šírky */
  max-width: 1200px;    /* Na veľkých: max. 1200px */
  margin: 0 auto;       /* Centrovanie */
}
```

**Ako to funguje:**
- Mobile (375px): šírka = 90% z 375px = 337px
- Tablet (768px): šírka = 90% z 768px = 691px  
- Desktop (1920px): šírka = max-width = 1200px (nie 90% = 1728px)

### Responzívne obrázky

```css
img {
  max-width: 100%;  /* Nikdy nepresiahne kontajner */
  height: auto;     /* Zachová proporcie */
}
```

---

## 4️⃣ FLEXBOX a GRID - Automatické rozloženie

### 🎯 Flexbox vs Grid - Kedy čo použiť?

**FLEXBOX** = Prvky v **jednom smere** (buď horizontálne ALEBO vertikálne)
- Ako *vagóny vlaku* - idú za sebou v jednom smere
- Používaj pre: navigácie, tlačidlá v rade, centrovanie

**GRID** = Prvky v **mriežke** (horizontálne A vertikálne naraz)
- Ako *šachovnica* - riadky aj stĺpce súčasne
- Používaj pre: galérie, produkty, layout celej stránky

---

## 💪 FLEXBOX - Prvky v rade/stĺpci

📚 **Dokumentácia:** [MDN - Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)

💐 **Poster:** [Css flexbox poster](https://github.com/srandykopec/2epu_2ovy_gdm_voz/blob/143df728dfb6df8625fb74a178892d449d6e3857/EPU/02_css-flexbox-poster.png)

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

🔗 **Živý príklad:** [Skopíruj kód na JSFiddle](https://jsfiddle.net/)

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

**Hodnoty pre [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/justify-content):**
- `flex-start` - na začiatok (vľavo)
- `center` - na stred
- `flex-end` - na koniec (vpravo)
- `space-between` - rovnomerne, okraje prilepené
- `space-around` - rovnomerne, malé medzery aj pri okrajoch

**Hodnoty pre [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/align-items):**
- `stretch` - natiahnuté cez celú výšku
- `center` - na stred
- `flex-start` - hore
- `flex-end` - dole

---

## 🎨 GRID - Mriežka prvkov

📚 **Dokumentácia:** [MDN - CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)

💐 **Poster:** [Css grid poster](https://github.com/srandykopec/2epu_2ovy_gdm_voz/blob/143df728dfb6df8625fb74a178892d449d6e3857/EPU/02_css-grid-poster.png)

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

## 5️⃣ MEDIA QUERIES - Rôzne štýly pre rôzne zariadenia

### 🤔 Problém: Prečo vôbec media queries?

Predstav si situáciu:

**Na mobile (375px šírka):**
- Chceš navigáciu **pod sebou** (zoznam)
- Chceš produkty **1 v rade** (zmestí sa len jeden)
- Chceš **menšie písmo** (málo miesta)

**Na desktope (1920px šírka):**
- Chceš navigáciu **vedľa seba** (horizontálne menu)
- Chceš produkty **3-4 v rade** (využiješ priestor)
- Chceš **väčšie písmo** (lepšia čitateľnosť)

**Problém:** Jeden CSS nemôže vedieť, či je používateľ na mobile alebo PC!

**Riešenie:** **Media queries** = "Ak je obrazovka väčšia ako X, aplikuj tieto štýly"

---

### 🎯 Čo sú media queries?

**Podmienky v CSS** - povieš: "Ak je obrazovka aspoň 768px široká, urob toto..."

**Vizualizácia:**

```
Mobile (do 767px)          Tablet (768px+)         Desktop (1024px+)
┌─────────────┐           ┌──────────────┐        ┌───────────────────┐
│   Menu      │           │ Menu vedľa   │        │ Menu | Logo | ... │
│   ────      │           │              │        │                   │
│   Logo      │           │ ┌──┐  ┌──┐   │        │ ┌──┐ ┌──┐ ┌──┐    │
│   ────      │           │ │P1│  │P2│   │        │ │P1│ │P2│ │P3│    │
│             │           │ └──┘  └──┘   │        │ └──┘ └──┘ └──┘    │
│  ┌───────┐  │           │ ┌──┐  ┌──┐   │        │ ┌──┐ ┌──┐ ┌──┐    │
│  │Produkt│  │           │ │P3│  │P4│   │        │ │P4│ │P5│ │P6│    │
│  └───────┘  │           │ └──┘  └──┘   │        │ └──┘ └──┘ └──┘    │
└─────────────┘           └──────────────┘        └───────────────────┘
1 stĺpec                  2 stĺpce               3 stĺpce
```

---

### 📏 Čo sú BREAKPOINTS?

**Breakpoint** = **bod zlomu** = šírka, pri ktorej sa dizajn zmení

**Štandardné breakpoints:**
- **768px** = hranica medzi mobile a tabletom  
  (prečo? väčšina tabletov má 768px+)
- **1024px** = hranica medzi tabletom a desktopom  
  (prečo? väčšina desktopov má 1024px+)

**Analógia:**
Breakpoint = ako "vypínač svetla" - keď dosiahneš určitú šírku, "prepne sa" dizajn.

---

### 💡 Ako fungujú media queries?

**Syntax:**
```css
@media (min-width: 768px) {
  /* Štýly, ktoré sa aplikujú, AK je obrazovka aspoň 768px široká */
}
```

**Praktický príklad - Navigácia:**

```css
/* 1. MOBILE - základné štýly (bez media query) */
.nav {
  flex-direction: column; /* Pod sebou */
  font-size: 1rem;        /* Menšie písmo */
}

/* 2. TABLET a väčšie (od 768px) */
@media (min-width: 768px) {
  .nav {
    flex-direction: row;  /* Vedľa seba */
    font-size: 1.2rem;    /* Väčšie písmo */
  }
}
```

**Čo sa stane:**
- **Na mobile (375px):** Navigácia je pod sebou, malé písmo  
  (media query sa NEaplikuje, lebo 375px < 768px)
- **Na tablete (768px):** Navigácia je vedľa seba, väčšie písmo  
  (media query SA aplikuje, lebo 768px ≥ 768px)
- **Na desktope (1920px):** Rovnaké ako tablet  
  (media query SA aplikuje, lebo 1920px ≥ 768px)

---

### 🎯 Reálny príklad - E-shop produkty

**Úloha:** Na mobile 1 produkt v rade, na tablete 2, na desktope 3.

```css
/* MOBILE (predvolené) - 1 stĺpec */
.produkty {
  display: grid;
  grid-template-columns: 1fr; /* Jeden stĺpec */
  gap: 1rem;
}

/* TABLET (od 768px) - 2 stĺpce */
@media (min-width: 768px) {
  .produkty {
    grid-template-columns: repeat(2, 1fr); /* Dva stĺpce */
    gap: 1.5rem;
  }
}

/* DESKTOP (od 1024px) - 3 stĺpce */
@media (min-width: 1024px) {
  .produkty {
    grid-template-columns: repeat(3, 1fr); /* Tri stĺpce */
    gap: 2rem;
  }
}
```

**Výsledok:**
- Mobile (375px): [Produkt] → 1 v rade
- Tablet (768px): [Produkt] [Produkt] → 2 v rade
- Desktop (1920px): [Produkt] [Produkt] [Produkt] → 3 v rade

**Všetko automaticky!** Stránka sa sama "prispôsobí" veľkosti obrazovky.

---

### 📱 Štandardné breakpoints

```css
/* Mobile (predvolené, bez media query) */
/* 0px - 767px */

/* Tablet */
@media (min-width: 768px) {
  /* štýly pre tablety */
}

/* Desktop */
@media (min-width: 1024px) {
  /* štýly pre desktopy */
}

/* Veľký desktop */
@media (min-width: 1440px) {
  /* štýly pre veľké obrazovky */
}
```

**💡 Tip:** Použi `min-width` (mobile first prístup) - je lepší ako `max-width`

---

### 🎯 Praktické príklady Media Queries

#### Príklad 1: Responzívna navigácia

```css
/* Mobile - pod sebou */
.nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Desktop - vedľa seba */
@media (min-width: 768px) {
  .nav {
    flex-direction: row;
    gap: 2rem;
  }
}
```

---

#### Príklad 2: Zmena počtu stĺpcov

```css
/* Mobile - 1 stĺpec */
.produkty {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Tablet - 2 stĺpce */
@media (min-width: 768px) {
  .produkty {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

/* Desktop - 3 stĺpce */
@media (min-width: 1024px) {
  .produkty {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}
```

---

#### Príklad 3: Responzívne písmo

```css
/* Mobile */
h1 {
  font-size: 1.5rem; /* 24px */
}

/* Tablet */
@media (min-width: 768px) {
  h1 {
    font-size: 2rem; /* 32px */
  }
}

/* Desktop */
@media (min-width: 1024px) {
  h1 {
    font-size: 2.5rem; /* 40px */
  }
}
```

---

#### Príklad 4: Skryť/zobraziť prvky

```css
/* Mobilné menu - zobrazené */
.mobile-menu {
  display: block;
}

/* Desktop menu - skryté */
.desktop-menu {
  display: none;
}

/* Na desktope naopak */
@media (min-width: 768px) {
  .mobile-menu {
    display: none;
  }
  
  .desktop-menu {
    display: flex;
  }
}
```

---

### 📝 Kompletný príklad responzívnej stránky

```html
<!DOCTYPE html>
<html lang="sk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responzívna stránka</title>
  <style>
    /* Reset a základné štýly */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    img {
      max-width: 100%;
      height: auto;
    }
    
    /* Kontajner */
    .container {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem;
    }
    
    /* Produkty - mobile */
    .produkty {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    /* Produkty - tablet */
    @media (min-width: 768px) {
      .container {
        padding: 2rem;
      }
      
      .produkty {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }
    }
    
    /* Produkty - desktop */
    @media (min-width: 1024px) {
      .container {
        padding: 3rem;
      }
      
      .produkty {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="produkty">
      <div class="produkt">Produkt 1</div>
      <div class="produkt">Produkt 2</div>
      <div class="produkt">Produkt 3</div>
    </div>
  </div>
</body>
</html>
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

## 🎓 Zhrnutie - responzívny web

### ✅ Povinné (musíš mať!)

1. **Viewport meta tag**
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

2. **Relatívne jednotky**
   ```css
   width: 90%;
   padding: 2rem;
   font-size: 1rem;
   ```

3. **max-width + centrovanie**
   ```css
   .container {
     width: 90%;
     max-width: 1200px;
     margin: 0 auto;
   }
   ```

4. **Responzívne obrázky**
   ```css
   img {
     max-width: 100%;
     height: auto;
   }
   ```

---

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

### ✅ Media Queries v kocke
1. Mobile first prístup
2. Štandardné breakpoints: 768px (tablet), 1024px (desktop)
3. Syntax: `@media (min-width: 768px) { /* štýly */ }`
4. Používaj na: zmenu layoutu, veľkosti písma, skrývanie prvkov

---

## 💡 Praktické tipy

1. **Vždy začni s viewport meta tagom!**
2. **Použi relatívne jednotky** namiesto px
3. **Pre navigáciu** → Flexbox
4. **Pre galériu obrázkov** → Grid s `auto-fit, minmax()`
5. **Pre centrovanie** → Flexbox
6. **Gap je tvoj priateľ** - používaj ho namiesto margin
7. **Mobile first** - najprv mobile štýly, potom media queries
8. **Testuj na mobile!** - Ctrl+Shift+M v Chrome/Firefox

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

### 4. Responzívny kontajner (vždy!)
```css
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
```

---

## 🎯 Praktická rada na záver

**Keď nevieš, ktorý použiť:**
- Ak uvažuješ **"vedľa seba"** → **Flexbox**
- Ak uvažuješ **"v mriežke"** → **Grid**
- Ak potrebuješ **rôzne štýly na mobile/desktop** → **Media queries**


**A nezabudni:** Testuj na mobile! 📱

