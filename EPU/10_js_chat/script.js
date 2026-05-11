// ============================================================
// JavaScript Chat
// ============================================================
// Čo sa tu naučíš:
//  - Ako pracovať s DOM (document.getElementById, createElement)
//  - Ako zachytiť udalosť (addEventListener na "submit")
//  - Ako dynamicky pridávať prvky na stránku
//  - Ako pracovať s reťazcami, poliami a funkciami
// ============================================================

// --- 1. Získame referencie na HTML prvky ---
// getElementById("chatForm") nájde HTML element s id="chatForm" – je to náš formulár
const chatForm     = document.getElementById("chatForm");
// getElementById("messageInput") nájde textové pole, do ktorého používateľ píše
const messageInput = document.getElementById("messageInput");
// getElementById("chatMessages") nájde div, do ktorého budeme vkladať správy
const chatMessages = document.getElementById("chatMessages");

// --- 2. Odpovede bota ---
// Pole (array) možných odpovedí, ktoré bot náhodne vyberá
// Každá odpoveď je reťazec (string) v úvodzovkách, oddelený čiarkou
const botOdpovede = [
  "Zaujímavé! Povedz mi viac. 🤔",
  "Aha, rozumiem! 👍",
  "Super správa! 😄",
  "Hmm, nad tým musím premýšľať... 🤖",
  "To je výborný nápad!",
  "JavaScript je skvelý, že? 💻",
  "Skús to ešte raz, chcem vedieť viac!",
  "OK! Čo ďalej?",
  "Pekne povedané! 😊",
  "Rozumiem, ďakujem za správu!",
];

// --- 3. Pomocná funkcia: aktuálny čas vo formáte HH:MM ---
function ziskajCas() {
  const teraz = new Date();                              // new Date() vráti aktuálny dátum a čas
  const hodiny = String(teraz.getHours()).padStart(2, "0");  // getHours() vráti hodiny (0–23); padStart doplní 0 ak je len 1 číslica (napr. "9" → "09")
  const minuty = String(teraz.getMinutes()).padStart(2, "0"); // getMinutes() vráti minúty (0–59); rovnaké zarovnanie na 2 znaky
  return `${hodiny}:${minuty}`;                         // template literal – spojí hodiny a minúty do reťazca "HH:MM"
}

// --- 4. Funkcia na vytvorenie a pridanie správy do chatu ---
// parameter `text`  - obsah správy
// parameter `typ`   - "odoslana" alebo "prijata"
function pridajSpravu(text, typ) {
  // createElement("div") vytvorí nový <div> element v pamäti (ešte nie je na stránke)
  const sprava = document.createElement("div");
  // classList.add() pridá CSS triedy; výsledok: class="sprava sprava--odoslana" alebo "sprava sprava--prijata"
  sprava.classList.add("sprava", `sprava--${typ}`);

  // Vytvoríme <span> pre text správy
  const textEl = document.createElement("span");
  textEl.classList.add("sprava__text");      // pridáme CSS triedu pre štýlovanie textu
  textEl.textContent = text;                 // textContent nastaví text vnútri elementu (bezpečnejšie ako innerHTML)

  // Vytvoríme <span> pre časovú pečiatku
  const casEl = document.createElement("span");
  casEl.classList.add("sprava__cas");        // CSS trieda pre malý sivý čas
  casEl.textContent = ziskajCas();           // zavoláme funkciu ziskajCas() a jej výsledok zobrazíme

  // appendChild() vloží podradený element – textEl sa stane dieťaťom sprava
  sprava.appendChild(textEl);
  // casEl sa tiež vloží do sprava, za textEl
  sprava.appendChild(casEl);

  // sprava (celá bublina) sa vloží do chatMessages (viditeľná oblasť chatu)
  chatMessages.appendChild(sprava);

  // scrollTop = scrollHeight posunie rolovanie úplne nadol, aby bola viditeľná posledná správa
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// --- 5. Funkcia bota: po krátkom oneskorení odpíše náhodnou správou ---
function botOdpoved() {
  // Math.random() vráti náhodné číslo od 0 do 1 (napr. 0.73)
  // * botOdpovede.length ho roztiahne na rozsah 0 až počet odpovedí
  // Math.floor() zaokrúhli nadol → celé číslo = platný index poľa
  const nahodnyIndex = Math.floor(Math.random() * botOdpovede.length);
  // Z poľa vyberieme odpoveď na pozícii nahodnyIndex
  const text = botOdpovede[nahodnyIndex];

  // setTimeout spustí funkciu až po 800 ms – simuluje, že bot "píše"
  setTimeout(function () {
    pridajSpravu(text, "prijata"); // pridáme správu bota (prijatá = vľavo)
  }, 800);                         // 800 = oneskorenie v milisekundách (0,8 sekundy)
}

// --- 6. Uvítacia správa od bota pri načítaní stránky ---
// Táto funkcia sa zavolá hneď, keď sa stránka načíta – bez čakania na používateľa
pridajSpravu("Ahoj! Som BotKo. Napíš mi niečo 👋", "prijata");

// --- 7. Zachytenie odoslania formulára ---
// addEventListener("submit", ...) počúva na odoslanie formulára (klik na tlačidlo alebo Enter)
chatForm.addEventListener("submit", function (event) {
  // preventDefault() zruší predvolené správanie formulára – bez toho by sa stránka obnovila
  event.preventDefault();

  // .value získa text z inputu; .trim() odstráni medzery zo začiatku a konca
  const text = messageInput.value.trim();

  // Ak je reťazec prázdny (používateľ nič nenapísal), funkciu ukončíme príkazom return
  if (text === "") return;

  // Zavoláme pridajSpravu – správa sa zobrazí vpravo (odoslaná)
  pridajSpravu(text, "odoslana");

  // Vyprázdnime textové pole po odoslaní
  messageInput.value = "";

  // Zavoláme funkciu bota – bot odpovie po 800 ms
  botOdpoved();
});
