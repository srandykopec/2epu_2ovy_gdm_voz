# Zadanie: 2. fáza - Dizajn osobného portfólia vo Figme

## 🎯 Cieľ úlohy
Pretransformovať váš wireframe do finálneho profesionálneho dizajnu s farbami, typografiou, obrázkami a všetkými detailmi potrebnými pre kódovanie.

**Výsledok:** Pixel-perfect dizajn, podľa ktorého budete kódovať svoje portfólio.


**[Figma  tutorial](https://www.youtube.com/watch?v=2AN92es01YQ )** - rýchlokurz geniality o Figme, vysvetlené základné koncepty, ktoré vám uľahčia prácu, odporúčam **auto layout** (6:10) a **komponenty** (9:57)

---

## 📋 Prečo potrebujeme dizajn pred kódovaním?

V reálnej praxi funguje takto:

```
1. WIREFRAME (máte hotové) ✅
   ↓ Definuje ČO tam bude
   
2. DIZAJN (teraz robíme) 🎨
   ↓ Definuje AKO to bude vyzerať
   
3. KÓDOVANIE 💻
   ↓ Implementácia dizajnu do HTML/CSS
   
4. DEPLOYMENT 🚀
   ↓ Zverejnenie na internet
```

**Bez dizajnu = kódujete naslepo** → výsledok vyzerá amatérsky, farby nesedia, medzery sú chaotické.

---

## 📝 KROK 1: Príprava obsahu a obrázkov

**PRED dizajnovaním upravte váš wireframe** tak, aby obsahoval:
- ✅ Skutočné texty (nie Lorem Ipsum) - meno, bio, popisy projektov
- ✅ Skutočné obrázky - profilová fotka, screenshots projektov (min. 6)
- ✅ Zoznam zručností (min. 8-12)
- ✅ Kontaktné informácie - email, telefón, sociálne siete

**💡 TIP:** Uložte si všetky obrázky do jedného priečinka - budete ich potrebovať pri kódovaní!

---

## 🎨 KROK 2: Vytvorte farebnú paletu

**Farebná paleta = základ vášho dizajnu!**

#### 📊 Koľko farieb potrebujete?

**Minimálna profesionálna paleta obsahuje:**

```
1. PRIMÁRNA farba (hlavná) .................. 1 farba
   → Používa sa: tlačidlá, linky, zvýraznenia
   
2. PRIMÁRNE odtiene (svetlejšie/tmavšie) .... 2-3 odtiene
   → Používa se: hover stavy, svetlé pozadia
   
3. SEKUNDÁRNA farba (doplnková) ............. 1 farba
   → Používa sa: akcenty, CTA, zvláštne prvky
   
4. NEUTRÁLNE (šedé) ......................... 4-6 odtieňov
   → Používa sa: text, pozadia, bordery
   
5. SÉMANTICKÉ (výzva) ....................... 3 farby
   → Success (zelená), Warning (oranžová), Error (červená)
```

**Spolu: 11-14 farieb v palete aj s odtieňmi, jednoducho všetky možnosti kde sa bude použígvať farba. Pre naše potreby nemusíte mať definované komplet všetky, stále sa učíme, ale určite by ste aspoň základnú farebnú paletu mali mať zvolenú, čiže primárnu farbu, jej odtieňe, doplkovú a neutrálnu.**

---

#### 🎨 Ako vytvoriť farebnú paletu?

**Možnosť 1: Použite generátor** (najrýchlejšie)

Navštívte jeden z týchto nástrojov:
- **[Coolors.co](https://coolors.co)** - stláčajte SPACE pre generovanie
- **[Realtime Colors](https://realtimecolors.com)** - vidíte farebnú paletu priamo na web dizajne
- **[Adobe Color](https://color.adobe.com/create/color-wheel)** - profesionálny nástroj
- **[Color mind](http://colormind.io/)** - profesionálny nástroj

**Postup:**
1. Vyberte si primárnu farbu (ktorá vás reprezentuje)
2. Nechajte nástroj vygenerovať komplementárne farby
3. Uložte HEX kódy všetkých farieb

---

**Možnosť 2: Ručná tvorba** (viac kontroly)

```css
PRIMÁRNA FARBA:
--primary-500: #3B82F6    /* Základná modrá */
--primary-400: #60A5FA    /* Svetlejšia */
--primary-600: #2563EB    /* Tmavšia */
--primary-700: #1D4ED8    /* Ešte tmavšia (hover) */

SEKUNDÁRNA:
--secondary-500: #F97316  /* Oranžová akcent */

NEUTRÁLNE (šedá škála):
--neutral-50: #F9FAFB     /* Svetlé pozadie */
--neutral-100: #F3F4F6    /* Borders */
--neutral-200: #E5E7EB    /* Disabled */
--neutral-700: #374151    /* Text tmavý */
--neutral-800: #1F2937    /* Text najčernejší */
--neutral-900: #111827    /* Nadpisy */

SÉMANTICKÉ:
--success: #10B981        /* Zelená (úspech) */
--warning: #F59E0B        /* Oranžová (upozornenie) */
--error: #EF4444          /* Červená (chyba) */
```



#### 📋 Úloha: Vytvorte a zadokumentujte paletu

Vo Figme vytvorte **frame "Farebná paleta"** kde budete mať štvorček s farbou a jej kódom:

```
┌─────────────────────────────────────┐
│  Farebná paleta                     │
│                                     │
│  PRIMÁRNE:                          │
│  ████ #3B82F6  primarne-500       │
│  ████ #60A5FA  primarne-400       │
│  ████ #2563EB  primarne-600       │
│                                     │
│  SEKUNDÁRNE                         │
│  ████ #F97316  sekundarne-500     │
│                                     │
│  NEUTRALNE:                         │
│  ████ #F9FAFB  neutral-50         │
│  ████ #374151  neutral-700        │
│  ████ #111827  neutral-900        │
│                                     │
│  SEMANTICKÉ                         │
│  ████ #10B981  success            │
│  ████ #EF4444  error              │
└─────────────────────────────────────┘
```

**Vo Figme:**
1. Vytvorte farebné štvorcce (100×100px)
2. Pod každý napíšte HEX kód + názov

**💡 TIP:** Tieto farby budete neskôr používať v CSS premenných!

---

## ✍️ KROK 3: Vyberte typografiu (fonty)

**Typografia = 80% dizajnu!** Dobrý font môže zachrániť slabý dizajn.

#### 📊 Koľko fontov použiť?

**PRAVIDLO:** 1-2 fonty (max. 3!)

**Prečo?**
- 1 font = minimalistický, čistý dizajn
- 2 fonty = klasický prístup (nadpis + body)
- 3+ fonty = chaos, amatérsky vzhľad ❌ nie, radšej knihu

---

#### 🎯 Odporúčaný prístup: 2 fonty

```
FONT 1: Pre nadpisy (Headings)
→ Výrazný, bold, attention-grabbing
→ Príklady: Montserrat, Poppins, Playfair Display

FONT 2: Pre bežný text (Body)
→ Čitateľný, jednoducho, sans-serif
→ Príklady: Inter, Open Sans, Roboto
```

**Alternatíva:** Ak chcete len 1 font, použite **versatile font** (napr. Inter, Poppins), ktorý má veľa rezov.

---

#### 📖 Koľko rezov (font weights) potrebujete?

**Minimálne: 3 rezy**

```
Regular (400)    → Bežný text (odseky, popis)
SemiBold (600)   → Zvýraznený text, menu items
Bold (700)       → Nadpisy (h1, h2, h3)

Voliteľne:
Light (300)      → Podnadpisy, subtitle
ExtraBold (800)  → Hero nadpisy (extra impact)
```

**Pravidlo:** Nepoužívajte viac ako 4-5 font-weights!

---

#### 🎯 Kde nájsť fonty?

- **[Google Fonts](https://fonts.google.com)** (ODPORÚČANÉ - zadarmo, ľahké použitie)
- **[Font Joy - aké fonty sa k sebe hodia](https://fontjoy.com/)** 

---

## 🧩 KROK 4: Vytvorte komponenty (Components) (odporúčané, alebo jednoducho robte ako viete)

**Komponenty = opakovane použiteľné prvky.**

V reálnej praxi (a pri kódovaní) chcete mať komponenty, aby ste:
1. Nemuseli kresliť rovnaké tlačidlo 50×
2. Zmenili tlačidlo na jednom mieste → zmení sa všade

**[Tutorial komponenty vo Figme](hhttps://youtu.be/2AN92es01YQ?si=6-D_31QFBVpPzs6k&t=591)** (Odkaz do videa priamo na časť o komponentoch)


#### 🎯 Aké komponenty vytvoriť?

**POVINNÉ komponenty:**

1. **Tlačidlá**
   - Primárne tlačidlo (hlavné)
   - Secundárne tlačidlo (menej dôležité)
   - Text linku (len text)
   - Varianty:  
     - Default (normálny stav)
     - Hover (pri navedení myšou)
     - Disabled (neaktívny)

2. **Navigácia**
   - Desktop nav (horizontálna)
   - Mobile nav (hamburger menu)
   - Nav item: Active stav (aktuálna stránka)

3. **Karty**
   - Karta projektu (pre portfólio)
   - Karta zručností (pre zručnosti)

4. **Formulárové polia**
   - Text input
   - Textarea
   - Label
   - Error stav (červený border)

5. **Ikony**
   - Ikonky sociálnyc médii (LinkedIn, GitHub, Instagram)
   - Ikony (hamburger menu, zatvoriť)

---

#### ✅ Príklad: Vytvorenie Button komponentu

**Vo Figme:**

1. Nakreslite tlačidlo (obdĺžnik + text)
2. Označte ho
3. Vytvorte komponent: **Ctrl+Alt+K** (Win) / **Cmd+Opt+K** (Mac)
4. Pomenujte: `Button/Primary`
5. Vytvorte **Variants**:
   - Default
   - Hover (tmavšia farba)
   - Disabled (šedivá, opacity 50%)

**Vlastnosti Primary button:**
```
Šírka: AUTO (prispôsobí sa textu)
Padding: 12px (hore/dole), 24px (vľavo/vpravo) [8pt grid!]
Background: var(--primary-500)
Text: Biely, SemiBold (600), 16px
Border-radius: 8px
Shadow: 0px 2px 4px rgba(0,0,0,0.1)

HOVER:
Background: var(--primary-600) [tmavšia]
Shadow: 0px 4px 8px rgba(0,0,0,0.15) [väčší]
```

---

## 🎨 KROK 5: Vytvorte  dizajn

**Teraz ideme dizajnovať!** 🎉

Máte pripravené:
- ✅ Obsah (texty, obrázky) z wireframe
- ✅ Farebnú paletu
- ✅ Typografiu (fonty)
- ✅ Komponenty

**Postup (nie je povinné ho dodržiavať, ale môže sa hodiť):**

### 1. Zduplikujte wireframe framy

```
01_Domov_Desktop → 01_Domov_Desktop_Dizajn
02_Domov_Mobile  → 02_Domov_Mobile_Dizajn
atď...
```

### 2. Aplikujte farby z vašej palety

```
Pozadia:
- Body background: svetlá farba alebo #FFFFFF
- Hero background: gradient (primárna farba)
- Cards background: #FFFFFF
- Footer: tmavá farba

Text:
- Nadpisy: tmavá farba
- Bežný text: neutrálna farba
- Linky: primárna farba
- Link hover: tmavší odtieň primárnej

Borders:
- Card borders: svetlá neutrálna
```

### 3. Použite vybrané fonty

- Všetky H1, H2, H3 → váš font pre nadpisy
- Všetky odseky → váš font pre bežný text
- Konzistentné veľkosti písma (h1: 48px, h2: 40px, p: 16px...)

### 4. Použite vytvorené komponenty

- Všetky tlačidlá → Button komponent
- Všetky navigačné linky → Nav komponent
- Všetky project cards → ProjectCard komponent

### 5. Pridajte DETAILY!

```
✨ Shadows (tiene):
- Karty: 0px 2px 8px rgba(0,0,0,0.08)
- Hover karty: 0px 4px 16px rgba(0,0,0,0.12)
- Tlačidlá: 0px 2px 4px rgba(0,0,0,0.1)

✨ Border radius (zaoblenie):
- Tlačidlá: 8px
- Karty: 12px
- Input fields: 8px

✨ Hover states:
- Karty: scale(1.02) + väčší shadow
- Tlačidlá: tmavšia farba
- Linky: underline + farba zmena

✨ Icons:
- Použite iconset: Feather Icons, Heroicons, Material Icons
- Plugin: "Iconify" vo Figme
```

---

## 🎯 Hodnotenie dizajnu

Váš dizajn bude ohodnotený **3 známkami**.

---

### **ZNÁMKA 1: Farby, Fonty, Hierarchia** 🎨✍️

**Čo sa hodnotí:**
- Farebná paleta vytvorená a zdokumentovaná (HEX kódy)
- Text čitateľný voči pozadiu (kontrast!)
- Fonty dobre zvolené (max 2-3), konzistentne použité
- Hierarchia jasná (nadpisy ≠ text, dôležité vyniká)

**Známky:**
- **1** - Profesionálna paleta, perfektné fonty, jasná hierarchia
- **2** - Dobrá paleta/fonty, funguje to, malé nedostatky
- **3** - Základy OK, ale nedostatky v konzistencii
- **4** - Slabé, nejasná hierarchia, problém s čitateľnosťou
- **5** - Chaos, nečitateľné, náhodné farby/fonty

---

### **ZNÁMKA 2: Layout (Rozloženie)** 📏

**Čo sa hodnotí:**
- Elementy zarovnané (nie náhodne)
- Konzistentné medzery (spacing)
- Komponenty rovnaké všade (tlačidlá, karty, header/footer)
- Mobile logicky prispôsobený (nie zmenšený desktop)

**Známky:**
- **1** - Pixel-perfect, konzistentné, dokonalý layout
- **2** - Dobre, malé odchýlky, layout funguje
- **3** - Väčšinou OK, viditeľné problémy
- **4** - Chaotické zarovnanie, slabý layout
- **5** - Náhodné rozmiestnenie, nepoužiteľné

---

### **ZNÁMKA 3: Celkový dojem** ✨

**Čo sa hodnotí:**
- Všetkých 8 frames hotových (desktop + mobile)
- Design System stránka vytvorená
- Reálny obsah (nie Lorem Ipsum)
- Vizuálne detaily (shadows, icons, hover states)
- Profesionálny vzhľad (nie školské cvičenie)
- Figma súbor organizovaný

**Známky:**
- **1** - WOW faktor, profesionálne, kompletné, detaily 100%
- **2** - Príjemné, kompletné, malé nedostatky
- **3** - OK, ale chýba "polish"
- **4** - Slabé, neúplné, málo snahy
- **5** - Nekompletné, amatérske, chaos

---


---

### 1. **Figma súbor** 
- Pomenujte: `Portfolio_Design_VašeMeno`
- Musí obsahovať tieto stránky (pages):
  1. **Design System** (farebná paleta, typografia)
  2. **Desktop verzia** (4 podstránky desktop verzie)
  3. **Mobilná verzia** (4 podstránky mobilnej verzie)




---

## 💡 Príklady z praxe

### ✅ Nevyžiadané rady:
1. **Konzistentnosť je kľúč** - rovnaké componenty, spacing, farby všade
2. **Mobile-first thinking** - navrhnite mobile, potom rozšírte na desktop
3. **Biely priestor je váš priateľ** - nenatlačte všetko na seba
4. **Menej je viac** - radšej minimalistický než preplnený dizajn
5. **Testujte kontrast** - text musí byť čitateľný
6. **Používajte reálny obsah** - nie Lorem Ipsum

### ❌ Toto radšej nie(radšej knihu):
1. **Viac ako 3 fonty** - chaos
2. **Viac ako 5 farieb** (+ odtiene) 
3. **Random spacing** - 17px, 23px, 41px... → použite 8pt grid!
4. **Malé klikateľné prvky** - min. 44×44px na mobile
5. **Zlý kontrast** - svetlošedý text na bielom pozadí
6. **Nekonzistentné button styles** - každé tlačidlo iné

---


## 📚 Užitočné zdroje

### Design Inspiration:
- [Dribbble - Portfolio Designs](https://dribbble.com/search/portfolio-website)
- [Awwwards - Portfolio Sites](https://www.awwwards.com/websites/portfolio/)
- [Behance - Web Design](https://www.behance.net/search/projects?search=portfolio+web+design)

### Nástroje:
- [Coolors.co](https://coolors.co) - generátor paliet
- [Google Fonts](https://fonts.google.com) - free fonty
- [Unsplash](https://unsplash.com) - stock fotky zadarmo
- [unDraw](https://undraw.co) - ilustrácie zadarmo
- [Heroicons](https://heroicons.com) - ikony

### Figma Plugins (inštalujte si):
- **Iconify** - tisíce ikon priamo vo Figme
- **Unsplash** - stock fotky priamo vo Figme
- **Stark** - kontrast checker pre accessibility
- **Content Reel** - fake content generator (ak potrebujete placeholder)

---
