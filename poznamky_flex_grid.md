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

### 🎯 Prečo relatívne jednotky?

**Fixné jednotky (px)** = nevhodné pre responzívny web  
**Relatívne jednotky** = prispôsobia sa automaticky

### Najdôležitejšie jednotky

#### **% (percentá)** - Relatívne k rodičovi
```css
.container {
  width: 80%; /* 80% šírky rodiča */
}
```

**Použitie:** Šírky kontajnerov, layouty

---

#### **rem** - Relatívne k veľkosti písma v `<html>`
```css
html {
  font-size: 16px; /* Základná veľkosť */
}

h1 {
  font-size: 2rem; /* = 32px (2 × 16px) */
}

.spacing {
  margin: 1.5rem; /* = 24px (1.5 × 16px) */
}
```

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

#### **vw / vh** - Relatívne k šírke/výške obrazovky
```css
.hero {
  width: 100vw;  /* 100% šírky viewportu */
  height: 100vh; /* 100% výšky viewportu */
}

.responsive-text {
  font-size: 4vw; /* 4% šírky obrazovky */
}
```

**Použitie:** Hero sekcie na celú obrazovku, responzívne písmo

---

### 📝 Odporúčanie

```css
/* ✅ DOBRE - Responzívne */
.container {
  width: 90%;
  max-width: 1200px;
  padding: 2rem;
  font-size: 1rem;
}

/* ❌ ZLE - Fixné */
.container {
  width: 960px;
  padding: 32px;
  font-size: 16px;
}
```

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

✅ **Toto pridaj na začiatok každého CSS!**

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

🔗 **Živý príklad:** [Skopíruj kód na JSFiddle](https://jsfiddle.net/z)

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

## 5️⃣ MEDIA QUERIES - Breakpoints pre rôzne zariadenia

### 🎯 Čo sú media queries?

**Podmienené CSS** - rôzne štýly pre rôzne veľkosti obrazovky.

```css
/* Základné štýly (mobile first) */
.container {
  width: 100%;
  padding: 1rem;
}

/* Na tabletoch (od 768px) */
@media (min-width: 768px) {
  .container {
    width: 90%;
    padding: 2rem;
  }
}

/* Na desktopoch (od 1024px) */
@media (min-width: 1024px) {
  .container {
    width: 80%;
    max-width: 1200px;
    padding: 3rem;
  }
}
```

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

## 🎓 Zhrnutie - Kompletný checklist pre responzívny web

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

**Základná kostra každej responzívnej stránky:**

```html
<!DOCTYPE html>
<html lang="sk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Moja stránka</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    img { max-width: 100%; height: auto; }
    
    .container {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Tvoj obsah -->
  </div>
</body>
</html>
```

**A nezabudni:** Testuj na mobile! 📱
