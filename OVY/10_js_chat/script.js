// ============================================================
// ÚLOHA: JavaScript Chat 💬
// ============================================================
// Tvojou úlohou je dokončiť tento chat podľa komentárov nižšie.
// Čítaj komentáre pozorne – sú tam náznaky, čo treba doplniť!
// ============================================================

// --- 1. Získaj referencie na HTML prvky pomocou getElementById ---
// DOPLŇ: získaj element s id="chatForm"
const chatForm = null; // TODO

// DOPLŇ: získaj element s id="messageInput"
const messageInput = null; // TODO

// DOPLŇ: získaj element s id="chatMessages"
const chatMessages = null; // TODO


// --- 2. Pole odpovedí bota ---
// Pridaj aspoň 3 vlastné odpovede do poľa!
const botOdpovede = [
  "Ahoj! Ako sa máš?",
  // TODO: pridaj ďalšie odpovede...
];


// --- 3. Pomocná funkcia: vráti aktuálny čas vo formáte HH:MM ---
function ziskajCas() {
  const teraz = new Date();
  // padStart(2, "0") pridá nulu pred jednociferné číslo: 9 → "09"
  const hodiny = String(teraz.getHours()).padStart(2, "0");
  const minuty = String(teraz.getMinutes()).padStart(2, "0");

  // DOPLŇ: vráť reťazec vo formáte "HH:MM" pomocou template literal
  return ""; // TODO
}


// --- 4. Funkcia na pridanie správy do chatu ---
// parameter `text` - obsah správy
// parameter `typ`  - "odoslana" alebo "prijata"
function pridajSpravu(text, typ) {
  // DOPLŇ: vytvor nový <div> pomocou document.createElement
  const sprava = null; // TODO

  // DOPLŇ: pridaj triedy "sprava" a "sprava--odoslana" alebo "sprava--prijata"
  // Nápoveda: sprava.classList.add("sprava", `sprava--${typ}`)
  // TODO

  // Vytvor element pre text správy
  const textEl = document.createElement("span");
  textEl.classList.add("sprava__text");
  // DOPLŇ: nastav textový obsah elementu na parameter `text`
  // Nápoveda: textEl.textContent = ???
  // TODO

  // Vytvor element pre čas
  const casEl = document.createElement("span");
  casEl.classList.add("sprava__cas");
  casEl.textContent = ziskajCas();

  // DOPLŇ: vlož textEl a casEl do elementu sprava pomocou appendChild
  // TODO

  // DOPLŇ: vlož sprava do chatMessages pomocou appendChild
  // TODO

  // Scroll nadol – zobrazí poslednú správu
  chatMessages.scrollTop = chatMessages.scrollHeight;
}


// --- 5. Bot odpíše náhodnou správou ---
function botOdpoved() {
  // DOPLŇ: vyber náhodný index z poľa botOdpovede
  // Nápoveda: Math.floor(Math.random() * botOdpovede.length)
  const nahodnyIndex = 0; // TODO

  const text = botOdpovede[nahodnyIndex];

  // Bot odpíše po 800 ms (setTimeout simuluje písanie)
  setTimeout(function () {
    pridajSpravu(text, "prijata");
  }, 800);
}


// --- 6. Uvítacia správa ---
// DOPLŇ: zavolaj funkciu pridajSpravu s uvítacím textom a typom "prijata"
// TODO


// --- 7. Zachytenie odoslania formulára ---
// DOPLŇ: pridaj event listener na chatForm pre udalosť "submit"
// Nápoveda: chatForm.addEventListener("submit", function(event) { ... })
// TODO:
//   - event.preventDefault() – zabráni obnoveniu stránky
//   - zisti text zo vstupného poľa (messageInput.value.trim())
//   - ak je text prázdny (""), skonči funkciu pomocou return
//   - zavolaj pridajSpravu(text, "odoslana")
//   - vymaž vstupné pole (messageInput.value = "")
//   - zavolaj botOdpoved()
