# Poznámky k písomke - HTML a CSS základy

---

## 1. HTML a CSS - Na čo slúžia?

### 🏗️ HTML (HyperText Markup Language)

HTML je **značkovací jazyk**, ktorý určuje **štruktúru a obsah** webovej stránky.

**Čo robí HTML:**
- Definuje, čo je na stránke (nadpisy, odstavce, obrázky, odkazy...)
- Určuje hierarchiu obsahu (hlavný nadpis, podnadpis, text...)
- Vytvára "kostru" stránky

**Príklad:**
```html
<h1>Vitaj na mojej stránke</h1>
<p>Toto je môj prvý odstavec textu.</p>
```

### 🎨 CSS (Cascading Style Sheets)

CSS je **jazyk pre štýlovanie**, ktorý určuje **vzhľad** webovej stránky.

**Čo robí CSS:**
- Definuje farby, veľkosti, rozloženie
- Mení vzhľad HTML elementov
- Vytvára "vzhľad" stránky

**Príklad:**
```css
h1 {
    color: blue;
    font-size: 32px;
}
```

**Analogia:**
- HTML = kostra domu (múry, okná, dvere)
- CSS = výzdoba domu (farba múrov, záclony, nábytok)
- Alebo v skratke HTML má na starosti **ČO** na stránke je, CSS **AKO** to vyzerá.

---

## 2. Komentáre v HTML a CSS

Komentáre sú **poznámky v kóde**, ktoré prehliadač **ignoruje**. Používame ich na vysvetlenie kódu.

### 💬 Komentáre v HTML

```html
<!-- Toto je komentár v HTML -->

<!-- 
Toto je 
viacriadkový 
komentár 
-->

<h1>Môj nadpis</h1>  <!-- Komentár vedľa kódu -->
```


### 💬 Komentáre v CSS

```css
/* Toto je komentár v CSS */

/* 
Toto je 
viacriadkový 
komentár 
*/

h1 {
    color: red;  /* Červená farba */
}
```

**Rozdiel:**
- HTML: `<!-- komentár -->`
- CSS: `/* komentár */`

---

## 3. Ako vložiť CSS do HTML stránky?

Existujú **3 spôsoby**, ako pripojiť CSS k HTML:

### 1️⃣ Externý CSS súbor (NAJLEPŠÍ SPOSOB)

CSS je v **samostatnom súbore** (napr. `style.css`).

**V HTML:**
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

**V CSS súbore (style.css):**
```css
body {
    background-color: lightblue;
}
```

**Výhody:**
- ✅ Prehľadný kód
- ✅ Jeden CSS súbor pre viac HTML stránok
- ✅ Používame tento spôsob na hodinách

---

### 2️⃣ Interný CSS (v HTML súbore)

CSS je **vnútri HTML v hlavičke stránky** v tagu `<style>`.

```html
<head>
    <style>
        body {
            background-color: lightblue;
        }
        
        h1 {
            color: red;
        }
    </style>
</head>
```

**Výhody:**
- ✅ Všetko v jednom súbore
- ❌ Neprehľadné pri väčších projektoch

---

### 3️⃣ Inline CSS (priamo v elemente)

CSS je **priamo v HTML tagu** cez atribút `style`.

```html
<h1 style="color: red; font-size: 32px;">Nadpis</h1>
<p style="background-color: yellow;">Odstavec</p>
```

**Výhody:**
- ✅ Rýchle pre jednu zmenu
- ❌ Veľmi neprehľadné
- ❌ Nepoužívame tento spôsob

---

**Poradie dôležitosti:**
1. Inline CSS (najsilnejší)
2. Interný CSS
3. Externý CSS (najslabší, ale najčastejší)

---

## 4. Selektory v CSS - Ako vyberieme elementy?

### 🤔 Čo je selektor a prečo ho potrebujeme?

Predstav si, že máš hotovú webovú stránku napísanú v HTML. Je tam nadpis, niekoľko odstavcov textu, zoznam položiek, tabuľka...

**Ale stránka vyzerá veľmi nudno!**

- Všetok text je čierny
- Všetko je rovnakej veľkosti
- Niet žiadnych farieb, rámčekov, efektov
- Stránka je **o ničom**, nezaujme návštevníka

**Preto potrebujeme CSS!**

S CSS dokážeme stránku urobiť:
- ✨ **Krajšou** - pridáme farby, tône, zaoblené rohy
- 📏 **Prehľadnejšou** - nadpisy budú väčšie, odstavce menšie
- 🎨 **Atraktívnejšou** - použijeme rôzne fonty, orámovania, tiene
- 🔧 **Funkčnejšou** - tlačidlá budú vyzerať ako tlačidlá, nie ako text

---

### 🎯 Problém: Ako prehliadaču povedať, ČO chceme upraviť?

Na stránke máš napríklad:
- 5 odstavcov textu
- 3 nadpisy
- 1 tabuľku
- 10 odkazov

**Chceš niektoré časti stránky upraviť:**
- Nadpisy chceš **veľké a tučné**
- Jeden odstavec chceš **zelený**
- Tabuľku chceš **s orámovaním**
- Niektoré odkazy chceš **červené**

**Otázka:** Ako povieš prehliadaču, že nadpisy majú byť veľké, ale odstavce nie? Že jeden odstavec má byť zelený, ale ostatné nie?

**Odpoveď:** Použiješ **SELEKTORY**!

---

### 💡 Čo je teda selektor?

**Selektor** = spôsob, ako v CSS **vyberieš (vyselektuješ)** konkrétne časti stránky, na ktoré chceš aplikovať štýl.

**Jednoducho povedané:**
- Selektor = ukazovateľ na časť stránky
- Hovorí prehliadaču: *"Hej, pozri sa na TIETO elementy a uprav ich takto!"*

---

### 🔍 Tri základné situácie (3 typy selektorov)

Pri štýlovaní stránky môžu nastať **3 hlavné situácie**:

---

#### **1️⃣ Situácia: Chcem upraviť VŠETKY elementy určitého typu**

**Príklad:**
- Chcem, aby **VŠETKY nadpisy h1** na stránke boli modré
- Chcem, aby **VŠETKY odstavce** mali veľkosť písma 18px
- Chcem, aby **VŠETKY tabuľky** mali orámovanie

**Riešenie:** Použijem **selektor typu elementu**

---

#### **2️⃣ Situácia: Chcem upraviť LEN NIEKTORÉ elementy (skupinu)**

**Príklad:**
- Mám 10 odstavcov, ale chcem **iba 3 z nich** vyfarbiť na zeleno
- Mám 20 odkazov, ale chcem **iba 5 z nich** urobiť červené
- Chcem označiť dôležité texty

**Riešenie:** Použijem **selektor triedy (class)**

---

#### **3️⃣ Situácia: Chcem upraviť LEN JEDEN konkrétny element**

**Príklad:**
- Chcem, aby **iba hlavička stránky** (nie iné časti) mala tmavé pozadie
- Chcem, aby **iba pätička** mala špeciálny štýl
- Chcem označiť jeden jedinečný element

**Riešenie:** Použijem **selektor ID**

---

### 🔹 1. Selektor typu elementu - "VŠETKO daného typu"

**Kedy použiť:**
- Chceš zmeniť **všetky** nadpisy
- Chceš zmeniť **všetky** odstavce
- Chceš zmeniť **všetky** tabuľky

**Ako funguje:**
Napíšeš názov HTML elementu (napr. `h1`, `p`, `table`) a všetky tieto elementy na stránke sa upravia.

**Príklad situácie:**

Máš HTML:
```html
<h1>Prvý nadpis</h1>
<p>Prvý odstavec</p>
<h1>Druhý nadpis</h1>
<p>Druhý odstavec</p>
```

Chceš, aby **všetky nadpisy h1** boli modré. V CSS napíšeš:

```css
h1 {
    color: blue;
}
```

**Výsledok:**
- Prvý nadpis → modrý ✅
- Druhý nadpis → modrý ✅
- Odstavce → zostanú čierne (netýka sa ich)

**Syntax (ako sa to píše):**
```css
nazov_elementu {
    vlastnost: hodnota;
}
```

**Ďalšie príklady:**
```css
/* Všetky odstavce budú mať veľkosť 18px */
p {
    font-size: 18px;
}

/* Všetky tabuľky budú mať orámovanie */
table {
    border: 1px solid black;
}
```

---

### 🔹 2. Selektor triedy (class) - "LEN NIEKTORÉ vybrané"

**Kedy použiť:**
- Máš 10 odstavcov, ale chceš **iba 3** z nich zelené
- Máš 20 odkazov, ale chceš **iba 5** z nich červené
- Chceš označiť **skupinu** podobných vecí (napr. všetky dôležité texty)

**Ako funguje:**
1. V HTML **označ** elementy, ktoré chceš upraviť - pridaj im `class="názov"`
2. V CSS **napíš bodku a názov triedy** (`.názov`) a uprav ich

**Príklad situácie:**

Máš HTML:
```html
<p>Obyčajný text</p>
<p class="dolezite">Dôležitý text</p>
<p>Obyčajný text</p>
<p class="dolezite">Ešte jeden dôležitý text</p>
```

Chceš, aby **iba texty s triedou "dolezite"** boli červené a tučné. V CSS napíšeš:

```css
.dolezite {
    color: red;
    font-weight: bold;
}
```

**Výsledok:**
- Prvý odstavec → zostane čierny (nemá triedu)
- Druhý odstavec → červený a tučný ✅ (má triedu `dolezite`)
- Tretí odstavec → zostane čierny (nemá triedu)
- Štvrtý odstavec → červený a tučný ✅ (má triedu `dolezite`)

**Syntax (ako sa to píše):**
```css
.nazov_triedy {
    vlastnost: hodnota;
}
```

**Pravidlá:**
- ✅ V CSS začína **bodkou** → `.dolezite`
- ✅ V HTML píšeš **bez bodky** → `class="dolezite"`
- ✅ Môžeš použiť **viackrát** na stránke
- ✅ Môžeš dať rovnakú triedu rôznym typom elementov (napr. `<p>` aj `<h2>`)

**Ďalšie príklady:**
```css
/* Všetky elementy s triedou "tlacidlo" */
.tlacidlo {
    background-color: blue;
    color: white;
    padding: 10px;
}

/* Všetky elementy s triedou "zvyraznene" */
.zvyraznene {
    background-color: yellow;
}
```

---

### 🔹 3. Selektor ID - "LEN JEDEN jedinečný element"

**Kedy použiť:**
- Chceš upraviť **iba hlavičku stránky** (nie iné časti)
- Chceš upraviť **iba pätičku stránky**
- Chceš označiť **jeden konkrétny jedinečný** element, ktorý je na stránke len raz

**Ako funguje:**
1. V HTML **označ** element, ktorý chceš upraviť - pridaj mu `id="názov"`
2. V CSS **napíš mriežku a názov ID** (`#názov`) a uprav ho

**Dôležité:** ID môže byť na stránke **len raz** (na rozdiel od triedy /class/ )!

**Príklad situácie:**

Máš HTML:
```html
<header id="hlavicka">Toto je hlavička stránky</header>
<p>Nejaký text</p>
<footer>Toto je pätička</footer>
```

Chceš, aby **iba hlavička** mala tmavé pozadie a biele písmo. V CSS napíšeš:

```css
#hlavicka {
    background-color: darkblue;
    color: white;
    padding: 20px;
}
```

**Výsledok:**
- Hlavička → tmavé pozadie, biele písmo ✅ (má ID `hlavicka`)
- Odstavec → zostane pôvodný (netýka sa ho)
- Pätička → zostane pôvodná (netýka sa jej)

**Syntax (ako sa to píše):**
```css
#nazov_id {
    vlastnost: hodnota;
}
```

**Pravidlá:**
- ✅ V CSS začína **mriežkou** → `#hlavicka`
- ✅ V HTML píšeš **bez mriežky** → `id="hlavicka"`
- ✅ Môžeš použiť **len raz** na stránke (je to jedinečné meno)
- ❌ **CHYBA:** Nedávaj rovnaké ID dvom elementom!

```html
<!-- SPRÁVNE -->
<header id="hlavicka">Hlavička</header>

<!-- CHYBA! ID už bolo použité -->
<p id="hlavicka">Text</p>
```

---

### 📊 Porovnanie selektorov

| Selektor | Syntax CSS | Použitie v HTML | Koľkokrát? | Význam |
|----------|-----------|-----------------|------------|--------|
| **Element** | `p { }` | `<p>text</p>` | Neobmedzene | Všetky elementy typu |
| **Class** | `.trieda { }` | `class="trieda"` | Viackrát | Skupina elementov |
| **ID** | `#jedinecne { }` | `id="jedinecne"` | Len raz | Jedinečný element |

---

### 🎯 Kedy čo použiť?

**Selektor elementu:**
- Keď chceš zmeniť **všetky** elementy daného typu
- Príklad: Všetky odstavce majú rovnakú veľkosť písma

**Selektor triedy:**
- Keď chceš zmeniť **skupinu** podobných elementov
- Príklad: Zvýraznené texty, tlačidlá, karty produktov
- **Najčastejšie používaný**

**Selektor ID:**
- Keď chceš zmeniť **len jeden** špecifický element
- Príklad: Hlavička stránky, pätička
- **Menej používaný**

---

## 5. Dedičnosť v CSS (Inheritance)

Dedičnosť znamená, že **niektoré CSS vlastnosti** sa automaticky prenášajú z **rodiča na potomka**.

### 🌳 Princíp dedičnosti - Rodičia a potomkovia

**HTML štruktúra:**
```html
<body>
    <header>
        <h1>Nadpis</h1>
        <p>Text v hlavičke</p>
    </header>
</body>
```

**Kto je kto v tomto príklade:**

**Rodičia a priami potomkovia:**
- `body` je **rodič** pre `header` (header je vnútri body)
  - `header` je **priamy potomok** elementu `body`
  
- `header` je **rodič** pre `h1` a `p` (h1 a p sú vnútri header)
  - `h1` je **priamy potomok** elementu `header`
  - `p` je **priamy potomok** elementu `header`

**Nepriami potomkovia:**
- `h1` a `p` sú **nepriami potomkovia** elementu `body` (body → header → h1/p)
  - Sú to akosi "vnúčatá" elementu `body`

**Analogia s rodinou:**
```
body (starý otec)
  └── header (otec)
        ├── h1 (syn)
        └── p (dcéra)
```

- **Priamy potomok** = dieťa (syn, dcéra)
- **Nepriamy potomok** = vnúča (vnuk, vnučka)

**Dôležité:** CSS dedičnosť funguje na **všetkých potomkov** - priamych aj nepriamych!

---

### ✅ Vlastnosti, ktoré SA DEDIA

Tieto vlastnosti sa **automaticky prenášajú** z rodiča na deti:

- **font-family** (font)
- **font-size** (veľkosť písma)
- **color** (farba textu)
- **line-height** (výška riadku)
- **text-align** (zarovnanie textu)

**Príklad:**
```css
body {
    font-family: Arial, sans-serif;
    color: darkblue;
    font-size: 16px;
}
```

**Výsledok:**
- Všetky elementy v `body` (h1, p, div...) **zdedia** Arial font, tmavomodrú farbu a veľkosť 16px

```html
<body>
    <h1>Nadpis bude Arial a tmavomodrý</h1>
    <p>Aj tento text bude Arial a tmavomodrý</p>
</body>
```

---

### ❌ Vlastnosti, ktoré SA NEDEDIA

Tieto vlastnosti sa **neprenášajú** z rodiča na deti:

- **margin** (vonkajšie okraje)
- **padding** (vnútorné okraje)
- **border** (okraj)
- **background-color** (farba pozadia)
- **width** (šírka)
- **height** (výška)

**Príklad:**
```css
body {
    background-color: lightgray;
    margin: 20px;
}
```

**Výsledok:**
- `body` má svetlošedé pozadie a okraj 20px
- Ale `h1` a `p` **NEMAJÚ** automaticky svetlošedé pozadie ani okraj 20px

---

### 🔄 Prepísanie dedičnosti

Ak zdedená vlastnosť nevyhovuje, môžeme ju **prepísať**:

```css
body {
    color: blue;  /* Všetko bude modré */
}

h1 {
    color: red;  /* H1 PREPÍŠE dedičnosť a bude červený */
}
```

**HTML:**
```html
<body>
    <h1>Tento nadpis je ČERVENÝ (prepísaná dedičnosť)</h1>
    <p>Tento text je MODRÝ (zdedená farba z body)</p>
</body>
```

---

### 📌 Prečo je dedičnosť užitočná?

**BEZ dedičnosti:**
```css
body { font-family: Arial; }
h1 { font-family: Arial; }
h2 { font-family: Arial; }
p { font-family: Arial; }
/* Musíme písať stále ddokola! */
```

**S dedičnosťou:**
```css
body { font-family: Arial; }
/* Všetky elementy zdedia Arial automaticky! */
```

---

## 6. Farby v CSS - Ako ich definovať?

V CSS môžeme definovať farbu **5 spôsobmi**:

### 1️⃣ Názov farby (Color Name)

**Najjednoduchší spôsob** - použijeme anglický názov farby.

```css
h1 {
    color: red;
}

p {
    background-color: lightblue;
}
```

**Príklady farieb:**
- `red`, `blue`, `green`, `yellow`
- `black`, `white`, `gray`
- `pink`, `purple`, `orange`
- `lightblue`, `darkgreen`, `lightgray`

**Výhody:**
- ✅ Jednoduché, ľahko zapamätateľné
- ❌ Obmedzený výber (cca 140 farieb)

---

### 2️⃣ Hexadecimálna hodnota (HEX)

**Najpoužívanejší spôsob** - farba sa zapíše ako **6-znakový kód** začínajúci `#`.

```css
h1 {
    color: #FF0000;  /* Červená */
}

p {
    background-color: #3498db;  /* Modrá */
}
```

**Formát:** `#RRGGBB`
- **RR** = červená (Red)
- **GG** = zelená (Green)
- **BB** = modrá (Blue)

**Príklady:**
- `#FF0000` = červená (max červená, 0 zelená, 0 modrá)
- `#00FF00` = zelená
- `#0000FF` = modrá
- `#FFFFFF` = biela (max všetko)
- `#000000` = čierna (0 všetko)
- `#808080` = šedá

**Skrátený zápis:**
```css
/* Ak sú všetky páry rovnaké, môžeme skrátiť */
#FF0000 = #F00
#00FF00 = #0F0
#FFFFFF = #FFF
```

**Výhody:**
- ✅ Neobmedzený výber farieb (16,7 milióna farieb)
- ✅ Používajú dizajnéri

---

### 3️⃣ RGB (Red, Green, Blue)

Farba sa definuje **troma číslami** od 0 do 255.

```css
h1 {
    color: rgb(255, 0, 0);  /* Červená */
}

p {
    background-color: rgb(52, 152, 219);  /* Modrá */
}
```

**Formát:** `rgb(červená, zelená, modrá)`

**Príklady:**
- `rgb(255, 0, 0)` = červená
- `rgb(0, 255, 0)` = zelená
- `rgb(0, 0, 255)` = modrá
- `rgb(255, 255, 255)` = biela
- `rgb(0, 0, 0)` = čierna

**Výhody:**
- ✅ Ľahšie pochopiteľné ako HEX
- ✅ Neobmedzený výber farieb

---

### 4️⃣ RGBA (RGB + priehľadnosť)

Rovnaké ako RGB, ale pridáme **priehľadnosť** (Alpha).

```css
h1 {
    color: rgba(255, 0, 0, 0.5);  /* Červená 50% priehľadná */
}

p {
    background-color: rgba(0, 0, 0, 0.8);  /* Čierna 80% nepriehľadná */
}
```

**Formát:** `rgba(červená, zelená, modrá, priehľadnosť)`
- Priehľadnosť: **0** = úplne priehľadná, **1** = úplne nepriehľadná

**Príklady:**
- `rgba(255, 0, 0, 0)` = neviditeľná červená (0% viditeľnosť)
- `rgba(255, 0, 0, 0.5)` = polopriehľadná červená (50%)
- `rgba(255, 0, 0, 1)` = plná červená (100%)

**Výhody:**
- ✅ Môžeme vytvoriť priehľadné efekty

---

### 5️⃣ HSL (Hue, Saturation, Lightness)

Farba sa definuje **odtieňom, sýtosťou a svetlosťou**.

```css
h1 {
    color: hsl(0, 100%, 50%);  /* Červená */
}

p {
    background-color: hsl(204, 70%, 53%);  /* Modrá */
}
```

**Formát:** `hsl(odtieň, sýtosť, svetlosť)`
- **Odtieň:** 0-360 (0=červená, 120=zelená, 240=modrá)
- **Sýtosť:** 0-100% (0%=šedá, 100%=plná farba)
- **Svetlosť:** 0-100% (0%=čierna, 50%=normálna, 100%=biela)

**Výhody:**
- ✅ Ľahko meniť svetlosť farby
- ❌ Menej používané začiatočníkmi

---

### 📊 Porovnanie spôsobov

| Spôsob | Príklad | Priehľadnosť | Použitie |
|--------|---------|--------------|----------|
| **Názov** | `red` | ❌ | Jednoduché farby |
| **HEX** | `#FF0000` | ❌ | Najpopulárnejšie |
| **RGB** | `rgb(255, 0, 0)` | ❌ | Alternatíva k HEX |
| **RGBA** | `rgba(255, 0, 0, 0.5)` | ✅ | Priehľadnosť |
| **HSL** | `hsl(0, 100%, 50%)` | ❌ | Pokročilé |

**Odporúčanie:**
- Začiatočníci: **Názov** alebo **HEX**
- Priehľadnosť: **RGBA**

---

## 7. Premenné v CSS (CSS Variables)

Premenné umožňujú **uložiť hodnotu** (napr. farbu) a **znova ju použiť** na viacerých miestach.

### 🎯 Prečo používať premenné?

**BEZ premenných:**
```css
header {
    background-color: #3498db;
}

button {
    background-color: #3498db;
}

a {
    color: #3498db;
}

/* Ak chceme zmeniť farbu, musíme meniť na 3 miestach! */
```

**S premennými:**
```css
:root {
    --hlavna-farba: #3498db;
}

header {
    background-color: var(--hlavna-farba);
}

button {
    background-color: var(--hlavna-farba);
}

a {
    color: var(--hlavna-farba);
}

/* Ak chceme zmeniť farbu, zmeníme ju len na 1 mieste! */
```

---

### 📝 Ako vytvoriť premennú?

**1. Krok: Definovať premennú v `:root`**

`:root` je špeciálny selektor, ktorý znamená "celá stránka".

```css
/* Väčšinou hneď na začiatku css súboru */
:root {
    --nazov-premennej: hodnota;
}
```

**Príklad:**
```css
:root {
    --hlavna-farba: #3498db;
    --druhotna-farba: #2ecc71;
    --velkost-pisma: 18px;
}
```

**Pravidlá:**
- ✅ Premenná začína **dvoma pomlčkami** (`--`)
- ✅ Názov môže obsahovať písmená, čísla, pomlčky
- ✅ Odporúča sa slovenčina alebo angličtina

---

**2. Krok: Použiť premennú**

Na použitie premennej použijeme funkciu `var()`.

```css
selektor {
    vlastnost: var(--nazov-premennej);
}
```

**Príklad:**
```css
h1 {
    color: var(--hlavna-farba);
    font-size: var(--velkost-pisma);
}

button {
    background-color: var(--hlavna-farba);
}
```

---

### 🔢 Príklady premenných

**Farby:**
```css
:root {
    --primarna-farba: #3498db;
    --sekundarna-farba: #2ecc71;
    --farba-chyby: #e74c3c;
    --farba-pozadia: #f8f9fa;
}

button {
    background-color: var(--primarna-farba);
}

.chyba {
    color: var(--farba-chyby);
}
```

**Veľkosti:**
```css
:root {
    --mala-velkost: 14px;
    --normalna-velkost: 18px;
    --velka-velkost: 32px;
}

p {
    font-size: var(--normalna-velkost);
}

h1 {
    font-size: var(--velka-velkost);
}
```

**Medzery:**
```css
:root {
    --mala-medzera: 10px;
    --normalna-medzera: 20px;
    --velka-medzera: 40px;
}

section {
    padding: var(--normalna-medzera);
    margin-bottom: var(--velka-medzera);
}
```

---

### ✅ Výhody premenných

1. **Jednoduchšie zmeny** - Zmeníme hodnotu na jednom mieste
2. **Konzistentnosť** - Rovnaké farby/veľkosti v celom projekte
3. **Prehľadnosť** - `var(--hlavna-farba)` je čitateľnejšie ako `#3498db`

---

## 8. Absolútne a relatívne adresy (URL)

Adresy (URL) používame na **odkazy** a **obrázky**.

### 🔗 Relatívna adresa (Relative URL)

Cesta **relatívna k aktuálnemu súboru**. Neobsahuje `http://` ani doménu.

**Výhody:**
- ✅ Funguje aj bez internetu
- ✅ Projekt môžeme premiestniť kamkoľvek
- ✅ **Používame na hodinách**

---

**Príklady:**

**Štruktúra projektu:**
```
projekt/
├── index.html
├── kontakt.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── images/
│       └── logo.png
```

---

**1. Odkaz na súbor v rovnakom priečinku:**

V súbore `index.html` chceme odkaz na `kontakt.html`:

```html
<a href="kontakt.html">Kontakt</a>
```

---

**2. Odkaz na súbor v podpriečinku:**

V súbore `index.html` chceme odkaz na `style.css`:

```html
<link rel="stylesheet" href="assets/css/style.css">
```

---

**3. Odkaz na obrázok v podpriečinku:**

V súbore `index.html` chceme zobraziť `logo.png`:

```html
<img src="assets/images/logo.png" alt="Logo">
```

---

**4. Odkaz na súbor v rodičovskom priečinku:**

V súbore `assets/css/style.css` chceme odkaz na `logo.png`:

```css
/* ../ = o jeden priečinok vyššie */
background-image: url('../images/logo.png');
```

---

**Pravidlá:**
- `./` = aktuálny priečinok (môžeme vynechať)
- `../` = o jeden priečinok vyššie (rodičovský priečinok)
- `../../` = o dva priečinky vyššie

---

### 🌍 Absolútna adresa (Absolute URL)

Cesta obsahuje **celú adresu** vrátane `http://` alebo `https://` a domény.

**Príklady:**

```html
<!-- Odkaz na externú stránku -->
<a href="https://www.google.com">Google</a>

<!-- Obrázok z internetu -->
<img src="https://example.com/obrazok.jpg" alt="Obrázok">
```

**Výhody:**
- ✅ Funguje odkiaľkoľvek
- ✅ Odkaz na externé stránky

**Nevýhody:**
- ❌ Potrebuje internet
- ❌ Ak sa doména zmení, odkaz prestane fungovať

---

### 📊 Porovnanie

| Typ adresy | Príklad | Použitie |
|------------|---------|----------|
| **Relatívna** | `assets/style.css` | Súbory v projekte |
| **Absolútna** | `https://google.com` | Externé stránky |

---

### 🎯 Kedy čo použiť?

**Relatívne adresy:**
- Súbory v tvojom projekte (CSS, obrázky, podstránky)
- Odkazy medzi stránkami v projekte

**Absolútne adresy:**
- Odkazy na cudzie stránky (Google, Facebook, MDN...)
- Obrázky z internetu

---



