# 📚 Poznámky: Odkazy `<a>`, Obrázky `<img>` a Cesty k súborom

> **Pre koho:** Pre každého, kto chce pochopiť, ako fungujú odkazy a obrázky na webe - aj keď web nie je tvoja najväčšia záľuba! 🌐

---

## 🗂️ ČASŤ 1: Relatívne vs Absolútne cesty (NAJDÔLEŽITEJŠIE!)

### 🤔 Prečo to potrebuješ vedieť?

Keď vytváraš web, musíš vedieť **ako nájsť súbory**:
- 📄 Iné HTML stránky (napr. `about.html`)
- 🖼️ Obrázky (napr. `logo.png`)
- 🎨 CSS súbory (napr. `style.css`)

**Problém:** Tvoj počítač vidí súbory cez cestu typu `C:\Users\Tvoje_Meno\Dokumenty\...`, ale **web takéto cesty nechápe!**

---

### 📁 Predstav si svoj projekt ako priečinky

```
moj-web/               ← KOREŇ projektu (hlavný priečinok, alebo aj root)
├── index.html         ← Domovská stránka
├── about.html         ← Stránka "O nás"
├── kontakt.html       ← Stránka kontakt
├── assets/            ← Priečinok so všetkými zdrojmi (ako sme zvyknutí)
│   ├── css/           ← Priečinok so štýlmi
│   │   ├── normalize.css
│   │   └── style.css
│   ├── images/        ← Priečinok s obrázkami
│   │   ├── logo.png
│   │   └── pozadie.jpg
│   ├── js/            ← Priečinok s JavaScriptom
│       └── script.js
└── podstranka/        ← Podpriečinok s ďalšou stránkou
    └── index.html
```

---

## 🧭 Typy ciest

### 1️⃣ **Absolútna cesta (celá adresa z internetu)**

```html
<img src="https://www.example.com/images/logo.png" alt="Logo">
<a href="https://www.google.com">Google</a>
```

**Kedy použiť:**
- ✅ Keď odkazuješ na stránku/obrázok z **INÉHO webu**
- ✅ Pre externé zdroje (Google, Facebook, atď.)

**Poznámka:** Začína s `http://` alebo `https://`

---

### 2️⃣ **Relatívna cesta od koreňa** (začína s `/`)

```html
<img src="/images/logo.png" alt="Logo">
<a href="/about.html">O nás</a>
```

**Čo to znamená:**
- `/` = začni od **koreňa webu** (hlavného priečinka)
- Funguje to **len na serveri**, v prehliadači na lokálnom počítači môže spôsobiť problémy!

---

### 3️⃣ **Relatívna cesta od aktuálneho súboru** (NAJPOUŽÍVANEJŠIA! ⭐)

#### **a) Súbor v tom istom priečinku** → použij `./`

```html
<!-- Ak si v index.html a about.html je vedľa neho: -->
<a href="./about.html">O nás</a>
```

**Prax:** Odporúča sa písať `./` pred názvom súboru pre lepšiu čitateľnosť a explicitnosť.

#### **b) Súbor v podpriečinku** → použi názov priečinka

```html
<!-- Ak si v index.html a chceš obrázok z priečinka assets/images: -->
<img src="assets/images/logo.png" alt="Logo">
<link rel="stylesheet" href="assets/css/style.css">
```

#### **c) Súbor o úroveň vyššie** → použij `../`

```html
<!-- Ak si v kontakt/index.html a chceš sa vrátiť do hlavného index.html: -->
<a href="../index.html">Domov</a>
```

**Analógia s knižnicou:**

Predstav si, že tvoj webový projekt je **veľká knižnica s oddeleniami**.

- **Ty (tvoj HTML súbor)** = stojíš v konkrétnom oddelení knižnice
- **Priečinky** = rôzne oddelenia knižnice (detektívky, sci-fi, časopisy...)
- **Súbory** = jednotlivé knihy v oddeleniach

**Ako sa pohybuješ:**

- `about.html` = "Vezmi knihu 'about.html', ktorá je **v tom istom oddelení** kde teraz stojíš"
- `assets/images/logo.png` = "Choď do oddelenia 'assets', potom do pododdelenia 'images' a vezmi knihu 'logo.png'"
- `../index.html` = "**Vyjdi z aktuálneho oddelenia** a tam vezmi 'index.html'"
- `../../kontakt.html` = "**Vráť sa o dve oddelenia späť** a tam vezmi 'kontakt.html'"

📍 **Kľúč:** `../` znamená "krok späť do nadriadeného oddelenia", nie o poschodie, ale o úroveň v hierarchii!

---

## 🖼️ Praktické príklady

### **Scenár 1:** Si v `index.html`, chceš pridať logo z priečinka `images/`

```html
<img src="./images/logo.png" alt="Logo firmy">
```

### **Scenár 2:** Si v `kontakt/kontakt.html`, chceš logo z priečinka `images/`

```
moj-web/
├── index.html
├── images/
│   └── logo.png
└── kontakt/
    └── kontakt.html  ← TY SI TU
```

```html
<!-- Musíš ísť o úroveň vyššie (..) a potom do images/ -->
<img src="../images/logo.png" alt="Logo firmy">
```

### **Scenár 3:** Si v `index.html`, chceš odkaz na stránku v priečinku `kontakt/`

```html
<a href="./kontakt/index.html">Kontaktuj nás</a>
```

---

## 🚨 ČASTÉ CHYBY (a ako sa im vyhnúť)

### ❌ **CHYBA 1: Medzery v názvoch súborov**

```html
<!-- ❌ ZLYHÁ: -->
<img src="./images/moja fotka.jpg" alt="Fotka">

<!-- ✅ SPRÁVNE: -->
<img src="./images/moja-fotka.jpg" alt="Fotka">
<img src="./images/moja_fotka.jpg" alt="Fotka">
```

**Pravidlo:** Nikdy nepoužívaj medzery! Nahraď ich **pomlčkou `-`** alebo **podčiarkovníkom `_`**

---

### ❌ **CHYBA 2: Slovenské znaky (čžšťľô...)**

```html
<!-- ❌ ZLYHÁ: -->
<img src="./images/fotka_žiakov.jpg" alt="Žiaci">

<!-- ✅ SPRÁVNE: -->
<img src="./images/fotka-ziakov.jpg" alt="Žiaci">
```

**Pravidlo:** V názvoch súborov používaj **len anglickú abecedu a čísla**

---

### ❌ **CHYBA 3: Absolútna cesta z Windows**

```html
<!-- ❌ ZLYHÁ (funguje len na tvojom PC!): -->
<img src="C:\Users\Jano\Desktop\moj-web\images\logo.png" alt="Logo">

<!-- ✅ SPRÁVNE: -->
<img src="./images/logo.png" alt="Logo">
```

**Pravidlo:** Nikdy nepoužívaj `C:\`, `D:\` a podobné cesty!

---

### ❌ **CHYBA 4: Zabudnutá prípona súboru**

```html
<!-- ❌ ZLYHÁ: -->
<img src="./images/logo" alt="Logo">

<!-- ✅ SPRÁVNE: -->
<img src="./images/logo.png" alt="Logo">
```

---

### ❌ **CHYBA 5: Zlé lomítka** (Windows vs Web)

```html
<!-- ❌ ZLYHÁ: -->
<img src=".\images\logo.png" alt="Logo">  <!-- Windows spôsob -->

<!-- ✅ SPRÁVNE: -->
<img src="./images/logo.png" alt="Logo">  <!-- Web spôsob -->
```

**Pravidlo:** Vždy používaj **lomítko `/`** (nie spätné lomítko `\`)

---

## 🔗 ČASŤ 2: Element `<a>` - Odkazy (Linky)

### 📖 Čo to je?

Element `<a>` (anchor = kotva) slúži na **vytváranie odkazov**, ktoré používateľ môže kliknúť.

---

### 1️⃣ **Základný odkaz na inú stránku**

```html
<a href="./about.html">O nás</a>
<a href="./kontakt/index.html">Kontakt</a>
```

**Atribúty:**
- `href` = **hyper-reference** (adresa, kam odkaz vedie)
- Text medzi `<a>` a `</a>` = **to, na čo užívateľ klikne**

---

### 2️⃣ **Odkaz na externú stránku**

```html
<a href="https://www.google.com">Google</a>
<a href="https://www.youtube.com">YouTube</a>
```

**Dobré na vedenie:**
```html
<a href="https://www.google.com" target="_blank" rel="noopener">Google</a>
```

- `target="_blank"` = otvorí odkaz v **novej karte**
- `rel="noopener"` = bezpečnostné opatrenie (chráni tvoju stránku)

---

### 3️⃣ **Odkaz na sekciu na tej istej stránke** (kotva)

```html
<!-- Odkaz: -->
<a href="#kontakt">Preskočiť na kontakt</a>

<!-- Cieľ (niekde nižšie na stránke): -->
<section id="kontakt">
    <h2>Kontakt</h2>
    <p>Zavolaj nám: 0900 123 456</p>
</section>
```

**Princíp:**
- `href="#meno-id"` = skoč na element s `id="meno-id"`
- Používa sa na **navigáciu v rámci dlhej stránky**

---

### 4️⃣ **Odkaz na email**

```html
<a href="mailto:info@example.com">Napíš nám email</a>
```

Kliknutím sa otvorí emailový klient (Outlook, Gmail, atď.)

---

### 5️⃣ **Odkaz na telefónne číslo**

```html
<a href="tel:+421900123456">Zavolaj nám</a>
```

Na mobile sa po kliknutí spustí vytáčanie!

---

## 🎨 Štýlovanie odkazov v CSS

```css
/* Základný štýl odkazu */
a {
    color: #3498db;
    text-decoration: none; /* odstráni podčiarknutie */
    font-weight: bold;
}

/* Keď prejdeš myšou cez odkaz */
a:hover {
    color: #2c3e50;
    text-decoration: underline;
}

/* Navštívený odkaz */
a:visited {
    color: #9b59b6;
}

/* Práve kliknutý odkaz */
a:active {
    color: #e74c3c;
}
```

---

## 🖼️ ČASŤ 3: Element `<img>` - Obrázky v HTML

### 📖 Čo to je?

Element `<img>` slúži na **vloženie obrázka** priamo do HTML stránky.

---

### 1️⃣ **Základný obrázok**

```html
<img src="./images/logo.png" alt="Logo našej firmy">
```

**Povinné atribúty:**
- `src` = **source** (cesta k obrázku)
- `alt` = **alternative text** (popis obrázka pre čítačky obrazovky a keď sa obrázok nenačíta)

**❗ Vždy vyplň `alt`!** Je to dôležité pre:
- Nevidiacich (čítačky obrazovky)
- SEO (Google to číta)
- Keď sa obrázok nenačíta

---

### 2️⃣ **Obrázok s rozmermi**

```html
<img src="./images/banner.jpg" alt="Banner" width="800" height="400">
```

**Lepšie cez CSS:**
```html
<img src="./images/banner.jpg" alt="Banner" class="banner">
```

```css
.banner {
    width: 100%; /* vypĺňa šírku rodiča */
    max-width: 800px; /* maximálna šírka */
    height: auto; /* automatická výška (zachováva pomer) */
}
```

---

### 3️⃣ **Responzívny obrázok** (prispôsobí sa obrazovke)

```html
<img src="./images/fotka.jpg" alt="Fotka" class="responsive-img">
```

```css
.responsive-img {
    width: 100%;
    max-width: 600px;
    height: auto;
    display: block; /* odstráni medzeru pod obrázkom */
}
```

---

### 4️⃣ **Obrázok so zarovnaním**

```css
.img-center {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
```

```html
<img src="./images/logo.png" alt="Logo" class="img-center">
```

---

### 5️⃣ **Sémantický obrázok s popisom** (figure + figcaption)

```html
<figure>
    <img src="./images/graf.png" alt="Graf predaja">
    <figcaption>Graf predaja za rok 2024</figcaption>
</figure>
```

```css
figure {
    margin: 20px 0;
    text-align: center;
}

figcaption {
    font-size: 14px;
    color: #666;
    margin-top: 10px;
}
```

---

## 🎨 ČASŤ 4: Background obrázky cez CSS

### 🤔 Kedy `<img>` a kedy CSS `background-image`?

| Situácia | Použij |
|----------|--------|
| **Obsahový obrázok** (logo, fotka produktu, ilustrácia) | `<img>` v HTML |
| **Dekoratívny obrázok** (pozadie sekcie, vzor, gradient) | `background-image` v CSS |
| Potrebuješ `alt` text | `<img>` |
| Potrebuješ obrázok na pozadí textu | `background-image` |

---

### 1️⃣ **Základné pozadie**

```html
<div class="hero">
    <h1>Vitajte na našej stránke</h1>
</div>
```

```css
.hero {
    background-image: url('./images/pozadie.jpg');
    background-size: cover; /* pokryje celú plochu */
    background-position: center; /* vycentruje obrázok */
    background-repeat: no-repeat; /* neopakuje obrázok */
    height: 400px;
    color: white;
    text-align: center;
    padding-top: 150px;
}
```

---

### 2️⃣ **Vlastnosti `background-size`**

```css
/* Pokryje celú plochu (obrázok sa obreže, ak treba) */
background-size: cover;

/* Zmestí celý obrázok (môžu ostať prázdne miesta) */
background-size: contain;

/* Konkrétna veľkosť */
background-size: 500px 300px;

/* Šírka 100%, výška automatická */
background-size: 100% auto;
```

---

### 3️⃣ **Vlastnosti `background-position`**

```css
background-position: center;        /* stred */
background-position: top left;      /* ľavý horný roh */
background-position: bottom right;  /* pravý dolný roh */
background-position: 50% 50%;       /* presne v strede */
background-position: 20px 30px;     /* 20px zľava, 30px zhora */
```

---

### 4️⃣ **Kombinácia s CSS premennými** ⭐

```css
:root {
    --primary-bg: url('./images/hero-bg.jpg');
    --secondary-bg: url('./images/pattern.png');
}

.hero {
    background-image: var(--primary-bg);
    background-size: cover;
    background-position: center;
    height: 500px;
}

.feature {
    background-image: var(--secondary-bg);
    background-repeat: repeat; /* opakuje vzor */
    padding: 50px;
}
```

---

### 5️⃣ **Viacnásobné pozadia (gradient + obrázok)**

```css
.hero {
    background-image: 
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), /* tmavá vrstva */
        url('./images/pozadie.jpg'); /* obrázok pod vrstvou */
    background-size: cover;
    background-position: center;
    color: white;
    padding: 100px 20px;
}
```

**Účel:** Pridá tmavú vrstvu cez obrázok, aby bol text čitateľnejší.

---

## 🛠️ Praktické príklady kombinácie

### **Príklad 1: Karta s obrázkom a odkazom**

```html
<div class="card">
    <img src="./images/produkt.jpg" alt="Produkt XYZ" class="card-img">
    <h3>Produkt XYZ</h3>
    <p>Skvelý produkt za super cenu!</p>
    <a href="./produkty/xyz.html" class="btn">Zistiť více</a>
</div>
```

```css
.card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    max-width: 300px;
}

.card-img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 5px;
}

.btn:hover {
    background-color: #2c3e50;
}
```

---

### **Príklad 2: Hero sekcia s pozadím**

```html
<section class="hero">
    <h1>Vitajte na našej stránke</h1>
    <p>Najlepšie riešenia pre váš biznis</p>
    <a href="#kontakt" class="hero-btn">Kontaktujte nás</a>
</section>
```

```css
.hero {
    background-image: 
        linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        url('./images/hero-background.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed; /* parallax efekt */
    color: white;
    text-align: center;
    padding: 150px 20px;
}

.hero h1 {
    font-size: 48px;
    margin-bottom: 20px;
}

.hero-btn {
    display: inline-block;
    padding: 15px 30px;
    background-color: #e74c3c;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s;
}

.hero-btn:hover {
    background-color: #c0392b;
}
```

---

## ✅ Checklist pre žiakov

Pred odovzdaním práce skontroluj:

- [ ] Všetky cesty k súborom sú **relatívne** (nie `C:\...`)
- [ ] Názvy súborov **nemajú medzery** ani **slovenské znaky**
- [ ] Všetky obrázky majú **`alt` atribút**
- [ ] Lomítka sú **správne** (`/` nie `\`)
- [ ] Externí odkazy majú `target="_blank"` a `rel="noopener"`
- [ ] Obrázky sa **načítajú** (skús stránku otvoriť v inom prehliadači)
- [ ] Background obrázky majú nastavené `background-size`, `background-position`

---

## 🎯 Zhrnutie

### **Relatívne cesty:**
- `./` = aktuálny priečinok
- `../` = o úroveň vyššie
- `../../` = dve úrovne vyššie

### **Odkazy `<a>`:**
```html
<a href="./about.html">O nás</a>
<a href="https://google.com" target="_blank" rel="noopener">Google</a>
<a href="#kontakt">Kontakt</a>
```

### **Obrázky `<img>`:**
```html
<img src="./images/logo.png" alt="Logo">
```

### **CSS pozadie:**
```css
.hero {
    background-image: url('./images/bg.jpg');
    background-size: cover;
    background-position: center;
}
```

---

## 🚀 Ďalšie kroky

1. Vytvor si **testovací projekt** s priečinkovou štruktúrou
2. Skús **všetky typy ciest** na vlastných príkladoch
3. Experimentuj s **CSS pozadiami** a **hover efektami**
4. Otváraj stránku v **rôznych prehliadačoch** (Chrome, Firefox, Edge)

**Pamätaj:** Chyby v cestách sú najčastejšie! Ak ti niečo nefunguje, prvé čo skontroluj sú **cesty k súborom**. 🎯
