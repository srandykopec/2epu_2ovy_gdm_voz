# Zadanie: 3. fáza - Nakódovanie osobného portfólia (HTML + CSS)

## 🎯 Cieľ úlohy
Pretransformovať váš **dizajn z Figmy** do funkčnej, responzívnej webovej stránky pomocou HTML a CSS.

---

## � KROK 1: Príprava projektu

### Vytvorte adresárovú štruktúru:

```
priezvisko/
├── index.html
├── o-mne.html
├── portfolio.html
├── kontakt.html
└── assets/
    ├── css/
    │   ├── normalize.css
    │   └── style.css
    ├── img/
    │   ├── hero-obrazok.jpg
    │   ├── profilova-fotka.jpg
    │   ├── projekt-1.jpg
    │   ├── projekt-2.jpg
    │   └── ... (všetky obrázky z dizajnu)
    └── fonts/ (voliteľné)
```




## 💻 KROK 3: Kódovanie podľa dizajnu

### 🎯 Postup (mobile-first):

#### 1. Začnite s HTML štruktúrou jednej stránky
```html
<!DOCTYPE html>
<html lang="sk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Moje Portfólio</title>
  <link rel="stylesheet" href="assets/css/normalize.css">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <!-- Váš obsah -->
</body>
</html>
```

#### 2. Vytvorte CSS premenné podľa vašej palety z Figmy (názvy premenných si zvoľte podľa seba, toto je len príklad)
```css
:root {
  /* Farby z vašej Figma palety */
  --primarna: #3B82F6;
  --primarna-tmava: #2563EB;
  --akcent: #F97316;
  --text-tmavy: #1F2937;
  --text-stredny: #6B7280;
  --pozadie-svetle: #F9FAFB;
  
  /* MEdzery */
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  
  /* Typografia */
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Open Sans', sans-serif;
}
```

#### 3. Kódujte po sekciách (mobile-first!)
- Najprv header + navigácia (mobilná verzia)
- Hero sekcia
- O mne sekcia
- Projekty sekcia
- Footer
- Na konci: Media query pre desktop (1024px+)

---

## 📱 KROK 4: Responzivita (Mobile-first)

### Prečo mobile-first?
1. Začnete s najjednoduchším layoutom (mobil)
2. Postupne pridávate komplexnosť pre väčšie obrazovky
3. Kód je čistejší a výkonnejší

### Postup:
1. **Mobilná verzia (375px) PRVÁ** - bez media queries
2. **Desktop (1024px+)** - `@media (min-width: 1024px)`


**💡 TIP:** Testujte v prehliadači (F12 → Ctrl+Shift+M) na rôznych šírkach!

---

## ✅ KROK 5: Kontrolný zoznam ()

### 📄 Stránky (4 HTML súbory):
- [ ] `index.html` (Domov)
- [ ] `o-mne.html` (O mne)
- [ ] `portfolio.html` (Portfólio)
- [ ] `kontakt.html` (Kontakt)

Obsah jednotlivých podstránok bude hodnotený podľa toho, či ste ho splnili tak, ako bol uvedený v zadaní wireframu.

---

## 📋 Technické požiadavky

### ✅ HTML:
- [ ] Validný HTML5 kód
- [ ] Sémantické elementy: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- [ ] Všetky obrázky majú `alt` atribút
- [ ] Meta tag viewport pre responzivitu

### ✅ CSS:
- [ ] `normalize.css` pripojený
- [ ] **BEM metodológia** pre názvy tried 
  - Príklad: `.header__logo`, `.hero__nazov`, `.tlacidlo--velke`
- [ ] **CSS premenné** (`:root`) pre farby, hlavné medzery, fonty
- [ ] **Relatívne jednotky:** `rem`, `em`, `%`, `vh`, `vw` (px môžu byť pre bordery, margin, paddning atď)
- [ ] **Google Fonts** pripojené
- [ ] **Flexbox alebo Grid** použitý pre layout
- [ ] **Hover efekty** na tlačidlá a linky
- [ ] **Transitions** pre plynulé animácie
- [ ] **Media queries** pre responzivitu (mobile-first)

### ✅ Responzivita:
- [ ] Funguje na mobile (375px)
- [ ] Funguje na desktope (1024px a viac)
- [ ] Testované v prehliadači (Chrome DevTools)

### ✅ Dizajn podľa Figmy:
- [ ] **Farby** z vašej palety
- [ ] **Fonty** z Google Fonts (tie isté ako vo Figme)
- [ ] **Veľkosti fontov** približne rovnaké
- [ ] **Medzery** (spacing) konzistentné
- [ ] **Layout** zodpovedá dizajnu

---

## 🚀 KROK 6: Zverejnenie projektu

### A) GitHub repozitár
1. Vytvorte nový repozitár na GitHub (napr. `priezvisko-portfolio`)
2. Nahrajte všetky súbory (HTML, CSS, obrázky)
3. Skontrolujte, že všetko funguje

### B) GitHub Pages
1. V repozitári: **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** →Folder: **/ (root)**
4. Kliknite **Save**
5. Po chvíli sa zobrazí URL: `https://vasemeno.github.io/priezvisko-portfolio`

### C) Odovzdanie na MS Teams
- [ ] `.zip` súbor s celým projektom
- [ ] Odkaz na **GitHub repozitár**
- [ ] Odkaz na **živú verziu** (GitHub Pages)

---

## 💡 Tipy na úspešné dokončenie

### 🎨 Dizajn:
- Porovnávajte si výsledok s Figmou - otvoriť vo vedľa seba
- Používajte farby presne z vašej palety (CSS premenné)
- Dodržujte medzery (spacing) - buď konzistentní

### 💻 Kódovanie:
- Kódujte po sekciách - nedajte robiť celú stránku naraz
- Testujte často v prehliadači (Live Server vo VS Code)
- Začnite mobilom, potom pridajte desktop verziu

### 📱 Responzivita:
- Používajte Chrome DevTools (F12 → Ctrl+Shift+M)
- Testujte na: 375px (mobil), 1440px (desktop)
- Kontrolujte, že text nie je príliš malý/veľký

### ✅ Kontrola kvality:
- Validujte HTML: [validator.w3.org](https://validator.w3.org/)
- Skontrolujte všetky linky (fungujú?)
- Skontrolujte všetky obrázky (zobrazujú sa?)
- Otestujte na mobile telefóne (nie len v DevTools)

---


## 🆘 Pomoc a zdroje

### Kde hľadať pomoc:
- **VS Code rozšírenia:** Live Server, Auto Rename Tag, Color Highlight
- **CSS generátory:**
  - Flexbox: [flexboxfroggy.com](https://flexboxfroggy.com/)
  - Grid: [cssgridgarden.com](https://cssgridgarden.com/)
  - Shadows: [box-shadow.dev](https://box-shadow.dev/)
  - Animácie elementov v CSS: [animate.style](https://animate.style/)
  - Prechody v CSS: [cssgradient.io](https://cssgradient.io/)
  - PRíručka BEM metodológia: [vzhurudolu.cz](https://www.vzhurudolu.cz/prirucka/bem)
- **Validácia:** [validator.w3.org](https://validator.w3.org/)

### Časté chyby:
❌ Nesprávne cesty k obrázkom (`assets/img/` vs `img/`) TREBA POUŽIŤ RELATÍVNE ADRESY
❌ Zabudnutý `normalize.css`
❌ Fixné jednotky (`px`) namiesto relatívnych (`rem`)
❌ Nezodpovedá mobile-first prístupu
❌ BEM názvy tried nekonzistentné

---

## ✅ Kritériá hodnotenia

### 1️⃣ HTML štruktúra

**Čo sa hodnotí:**
- ✅ **Počet stránok** - všetky 4 stránky vytvorené (index.html, o-mne.html, portfolio.html, kontakt.html)
- ✅ **Sémantické elementy** - správne použitie `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- ✅ **Obsah sekcií** - všetky požadované sekcie z checklistu (hero, projekty, kontakt...)
- ✅ **Validita kódu** - HTML validátor bez chýb
- ✅ **Atribúty** - `alt` na obrázkoch, správne `href` linky, meta viewport

**Ako získať plný počet:**
- Všetky 4 HTML súbory vytvorené a funkčné
- Použité sémantické HTML5 tagy namiesto len `<div>`
- Každá stránka má všetky sekcie podľa checklistu
- Validný kód (bez chýb na validator.w3.org)

---

### 2️⃣ CSS kvalita

**Čo sa hodnotí:**
- ✅ **BEM metodológia** - konzistentné pomenovanie tried (`.block__element--modifier`)
- ✅ **CSS premenné** - `:root` s premennými pre farby, spacing, fonty
- ✅ **Relatívne jednotky** - použitie `rem`, `em`, `%` tak kde je to nutné
- ✅ **Organizácia kódu** - prehľadné sekcie, komentáre, logické usporiadanie
- ✅ **Flexbox/Grid** - správne použitie moderných layoutov
- ✅ **Normalize.css** - pripojený a fungujúci

**Ako získať plný počet:**
- Názvy tried podľa BEM (napr. `.hero__nazov`, `.projekt-karta__obrazok`)
- CSS premenné pre všetky farby a spacing
- Prevažne `rem` namiesto `px` (okrem border, shadow)
- Layout urobený cez flex alebo grid.

---

### 3️⃣ Responzivita

**Čo sa hodnotí:**
- ✅ **Mobilná verzia (375px)** - perfektne funguje, žiadne zlomy, čitateľný text
- ✅ **Desktopová verzia (1024px+)** - správne prispôsobený layout, využitie šírky
- ✅ **Media queries** - správne napísané `@media (min-width: 1024px)`, mobile-first prístup

**Ako získať plný počet:**
- Na mobile (375px): všetko pod sebou, žiadne horizontálne skrolovanie
- Na desktope (1440px): využitá šírka, grid 2-3 stĺpce, navigácia horizontálne
- Media query od 1024px, základné štýly pre mobil

---

### 4️⃣ Dizajn

**Čo sa hodnotí:**
- ✅ **Farebná schéma** - farby zodpovedajú dizajnu z Figmy
- ✅ **Typografia** - správne fonty z Google Fonts, veľkosti fontov podobné Figme
- ✅ **Spacing/Medzery** - konzistentné medzery medzi sekciami a elementmi
- ✅ **Vizuálna vernosť** - celkový vzhľad zodpovedá dizajnu z Figmy
- ✅ **Obrázky** - všetky obrázky exportované a použité

**Ako získať plný počet:**
- Použité HEX kódy z vašej Figma palety (cez CSS premenné)
- Rovnaké fonty ako vo Figme (Google Fonts import)
- Konzistentné medzery cez CSS premenné (`--space-sm`, `--space-lg`)
- Pri porovnaní Figma vs výsledok sú podobné proporcie
- Všetky obrázky z dizajnu sú v projekte

---

### 5️⃣ GitHub + GitHub Pages

**Čo sa hodnotí:**
- ✅ **GitHub repozitár** - projekt nahraný, má README (voliteľné)
- ✅ **GitHub Pages** - stránka je živá a funguje na GitHub Pages
- ✅ **Odovzdanie** - zip + 2 linky (repo + live) na MS Teams

**Ako získať plný počet:**
- Repozitár existuje a obsahuje všetky súbory
- GitHub Pages je aktivovaný a stránka je dostupná
- Na Teams odovzdané: zip, link na repo, link na live verziu

---

### 6️⃣ Celkový dojem 
**Ako získať plný počet:**
- Stránka vyzerá ako profesionálne portfólio
- Navigácia funguje, linky vedú na správne stránky
- Tlačidlá majú hover efekty, transitions sú plynulé
- Viditeľné, že ste do toho vložili námahu a kreativitu

---

