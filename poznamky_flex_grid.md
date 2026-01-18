# Flexbox a Grid - Poznámky

## 🎯 Kedy použiť čo?

### FLEXBOX = Jednosmerné rozloženie
Používaj keď potrebuješ prvky **vedľa seba** alebo **pod sebou** (jedna os).

**Príklady použitia:**
- 🧭 Navigácia (linky vedľa seba)
- 🎴 Karty produktov v rade
- 📦 Centrovanie prvkov
- 🎚️ Header (logo vľavo, menu vpravo)

### GRID = Dvojrozmerné rozloženie
Používaj keď potrebuješ **mriežku** (riadky A stĺpce naraz).

**Príklady použitia:**
- 🖼️ Galéria obrázkov (3×3 mriežka)
- 📰 Layout celej stránky (header, sidebar, main, footer)
- 🛍️ Produkty (3 v rade, automaticky responzívne)
- 📄 Blog + bočný panel

---

## 💪 FLEXBOX

### Základné použitie

```css
.kontajner {
  display: flex;
  gap: 20px; /* Medzery medzi prvkami */
}
```

### Najdôležitejšie vlastnosti kontajnera

```css
.kontajner {
  display: flex;
  
  /* Smer usporiadania */
  flex-direction: row;        /* vedľa seba (predvolené) */
  flex-direction: column;     /* pod sebou */
  
  /* Zarovnanie na hlavnej osi (horizontálne ak row) */
  justify-content: flex-start;    /* na začiatok */
  justify-content: center;        /* na stred */
  justify-content: flex-end;      /* na koniec */
  justify-content: space-between; /* rovnomerne, okraje bez medzier */
  justify-content: space-around;  /* rovnomerne, malé medzery okolo */
  
  /* Zarovnanie na krížovej osi (vertikálne ak row) */
  align-items: stretch;    /* natiahnuté (predvolené) */
  align-items: center;     /* na stred */
  align-items: flex-start; /* hore */
  align-items: flex-end;   /* dole */
  
  /* Zalomenie na ďalší riadok */
  flex-wrap: nowrap; /* bez zalomania (predvolené) */
  flex-wrap: wrap;   /* zalomiť ak sa nezmestia */
  
  /* Medzery */
  gap: 20px;           /* medzery medzi všetkými prvkami */
  column-gap: 20px;    /* len horizontálne medzery */
  row-gap: 10px;       /* len vertikálne medzery */
}
```

### Vlastnosti prvkov (flex items)

```css
.prvok {
  /* Ako veľa priestoru zaberiem navíc */
  flex-grow: 1; /* roztiahnuť sa */
  
  /* Základná veľkosť */
  flex-basis: 200px;
  
  /* Skratka (grow shrink basis) */
  flex: 1; /* rovnako rozdelený priestor */
}
```

### 🎯 Praktické príklady

#### 1. Navigácia

```html
<nav class="nav">
  <a href="#">Domov</a>
  <a href="#">Produkty</a>
  <a href="#">Kontakt</a>
</nav>
```

```css
.nav {
  display: flex;
  gap: 30px;
  justify-content: center; /* linky na stred */
}
```

#### 2. Header (logo + menu)

```html
<header class="header">
  <div class="logo">Logo</div>
  <nav class="menu">
    <a href="#">Domov</a>
    <a href="#">O nás</a>
  </nav>
</header>
```

```css
.header {
  display: flex;
  justify-content: space-between; /* logo vľavo, menu vpravo */
  align-items: center; /* vertikálne na stred */
  padding: 20px;
}

.menu {
  display: flex;
  gap: 20px;
}
```

#### 3. Centrovanie

```html
<div class="kontajner">
  <div class="box">Som centrovaný!</div>
</div>
```

```css
.kontajner {
  display: flex;
  justify-content: center; /* horizontálne na stred */
  align-items: center;     /* vertikálne na stred */
  height: 100vh;
}
```

#### 4. Karty v rade (responzívne)

```html
<div class="karty">
  <div class="karta">Karta 1</div>
  <div class="karta">Karta 2</div>
  <div class="karta">Karta 3</div>
</div>
```

```css
.karty {
  display: flex;
  gap: 20px;
  flex-wrap: wrap; /* zalomiť na ďalší riadok */
}

.karta {
  flex: 1 1 250px; /* min. šírka 250px, potom sa roztiahnuť */
  background: #f0f0f0;
  padding: 20px;
}
```

---

## 🎨 GRID

### Základné použitie

```css
.kontajner {
  display: grid;
  gap: 20px; /* Medzery medzi bunkami */
}
```

### Najdôležitejšie vlastnosti kontajnera

```css
.kontajner {
  display: grid;
  
  /* Definovanie stĺpcov */
  grid-template-columns: 200px 200px 200px; /* 3 stĺpce po 200px */
  grid-template-columns: 1fr 1fr 1fr;       /* 3 rovnaké stĺpce */
  grid-template-columns: 1fr 2fr 1fr;       /* stredný je 2x širší */
  grid-template-columns: repeat(3, 1fr);    /* skratka pre 3 rovnaké */
  
  /* Definovanie riadkov */
  grid-template-rows: 100px 200px; /* výšky riadkov */
  grid-template-rows: auto;        /* automatická výška */
  
  /* Medzery */
  gap: 20px;           /* medzery všade */
  column-gap: 20px;    /* len medzi stĺpcami */
  row-gap: 10px;       /* len medzi riadkami */
}
```

### Responzívna mriežka (VEĽMI UŽITOČNÉ!)

```css
.galeria {
  display: grid;
  /* Automaticky toľko stĺpcov, koľko sa zmestí (min. 250px) */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

### Umiestnenie prvkov

```css
.prvok {
  /* Roztiahnuť cez viac stĺpcov */
  grid-column: 1 / 3;  /* od 1. po 3. líniu (2 stĺpce) */
  grid-column: 1 / -1; /* cez všetky stĺpce */
  grid-column: span 2; /* roztiahnuť cez 2 stĺpce */
  
  /* Roztiahnuť cez viac riadkov */
  grid-row: 1 / 3;  /* cez 2 riadky */
  grid-row: span 2; /* roztiahnuť cez 2 riadky */
}
```

### 🎯 Praktické príklady

#### 1. Jednoduchá galéria (3 stĺpce)

```html
<div class="galeria">
  <img src="obr1.jpg" alt="">
  <img src="obr2.jpg" alt="">
  <img src="obr3.jpg" alt="">
  <img src="obr4.jpg" alt="">
</div>
```

```css
.galeria {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 rovnaké stĺpce */
  gap: 20px;
}

.galeria img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
```

#### 2. Responzívna galéria (automaticky)

```css
.galeria {
  display: grid;
  /* Automaticky sa prispôsobí šírke obrazovky */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

#### 3. Layout stránky

```html
<div class="layout">
  <header class="header">Header</header>
  <aside class="sidebar">Sidebar</aside>
  <main class="main">Obsah</main>
  <footer class="footer">Footer</footer>
</div>
```

```css
.layout {
  display: grid;
  grid-template-columns: 250px 1fr; /* sidebar fixný, main flexibilný */
  grid-template-rows: auto 1fr auto; /* header a footer auto výška */
  gap: 20px;
  min-height: 100vh;
}

.header {
  grid-column: 1 / -1; /* cez oba stĺpce */
}

.footer {
  grid-column: 1 / -1; /* cez oba stĺpce */
}
```

#### 4. Produkty (3 v rade)

```html
<div class="produkty">
  <div class="produkt">Produkt 1</div>
  <div class="produkt">Produkt 2</div>
  <div class="produkt">Produkt 3</div>
  <div class="produkt">Produkt 4</div>
</div>
```

```css
.produkty {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.produkt {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
```

#### 5. Asymetrická galéria

```html
<div class="galeria">
  <div class="velky">Veľký obrázok</div>
  <div>Malý 1</div>
  <div>Malý 2</div>
  <div>Malý 3</div>
  <div>Malý 4</div>
</div>
```

```css
.galeria {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.velky {
  grid-column: span 2; /* roztiahnuť cez 2 stĺpce */
  grid-row: span 2;    /* roztiahnuť cez 2 riadky */
}
```

---

## 📊 Porovnanie

| | **Flexbox** | **Grid** |
|---|---|---|
| **Počet osí** | 1 os (riadok ALEBO stĺpec) | 2 osi (riadky A stĺpce) |
| **Kedy použiť** | Navigácie, karty v rade, centrovanie | Galérie, layouty stránok, mriežky |
| **Responzívnosť** | `flex-wrap: wrap` | `auto-fit, minmax()` |
| **Jednoduchosť** | Jednoduchšie pre 1D | Lepšie pre 2D |

---

## 💡 Tipy

1. **Pre navigáciu a jednoduché rady** → použiť **Flexbox**
2. **Pre galérie a komplexné layouty** → použiť **Grid**
3. **Môžeš kombinovať!** Grid pre layout stránky, Flex pre navigáciu vnútri headera
4. **`gap`** funguje v oboch a je lepšie ako `margin`
5. **`fr` jednotka** v Gride je tvoj priateľ (flexible fraction)
6. **`repeat(auto-fit, minmax())`** = responzívna mriežka bez media queries

---

## 🎓 Čo si zapamätať

### Flexbox v 3 riadkoch
```css
display: flex;
gap: 20px;
justify-content: center; /* alebo space-between */
```

### Grid v 3 riadkoch
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
```

### Responzívny Grid v 2 riadkoch
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```
