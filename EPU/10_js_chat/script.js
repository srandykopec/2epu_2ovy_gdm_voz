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
const chatForm     = document.getElementById("chatForm");
const messageInput = document.getElementById("messageInput");
const chatMessages = document.getElementById("chatMessages");

// --- 2. Odpovede bota ---
// Pole (array) možných odpovedí, ktoré bot náhodne vyberá
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
  const teraz = new Date();
  const hodiny = String(teraz.getHours()).padStart(2, "0");
  const minuty = String(teraz.getMinutes()).padStart(2, "0");
  return `${hodiny}:${minuty}`;
}

// --- 4. Funkcia na vytvorenie a pridanie správy do chatu ---
// parameter `text`  - obsah správy
// parameter `typ`   - "odoslana" alebo "prijata"
function pridajSpravu(text, typ) {
  // Vytvoríme obalový div pre správu
  const sprava = document.createElement("div");
  sprava.classList.add("sprava", `sprava--${typ}`);

  // Vytvoríme element pre text správy
  const textEl = document.createElement("span");
  textEl.classList.add("sprava__text");
  textEl.textContent = text;

  // Vytvoríme element pre čas
  const casEl = document.createElement("span");
  casEl.classList.add("sprava__cas");
  casEl.textContent = ziskajCas();

  // Vložíme text a čas do obalu správy
  sprava.appendChild(textEl);
  sprava.appendChild(casEl);

  // Pridáme správu do oblasti chatu
  chatMessages.appendChild(sprava);

  // Automaticky posunieme scroll nadol, aby bola viditeľná posledná správa
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// --- 5. Funkcia bota: po krátkom oneskorení odpíše náhodnou správou ---
function botOdpoved() {
  // Náhodný index do poľa odpovedí
  const nahodnyIndex = Math.floor(Math.random() * botOdpovede.length);
  const text = botOdpovede[nahodnyIndex];

  // Simulujeme "písanie" – oneskorenie 800 ms
  setTimeout(function () {
    pridajSpravu(text, "prijata");
  }, 800);
}

// --- 6. Uvítacia správa od bota pri načítaní stránky ---
pridajSpravu("Ahoj! Som BotKo. Napíš mi niečo 👋", "prijata");

// --- 7. Zachytenie odoslania formulára ---
chatForm.addEventListener("submit", function (event) {
  // Zabránime predvolenému správaniu formulára (obnovenie stránky)
  event.preventDefault();

  // Získame text zo vstupného poľa a odstránime medzery z okrajov
  const text = messageInput.value.trim();

  // Ak je vstup prázdny, nič neurobíme
  if (text === "") return;

  // Zobrazíme správu používateľa (odoslaná = vpravo)
  pridajSpravu(text, "odoslana");

  // Vyčistíme vstupné pole
  messageInput.value = "";

  // Bot odpovie
  botOdpoved();
});
