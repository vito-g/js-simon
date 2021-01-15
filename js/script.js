// TRACCIA:
// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzae il programma.
// -----------------------------------------------------------------------------------------------------------
// console.log ('prova colegamento script');

// Un alert espone 5 numeri casuali diversi:
// Mi occorrerà, certamente una FX per il calcolo randomico degli stessi
function random(a, b) {
  var randomNumber = Math.floor((Math.random() * b) + a);
  return randomNumber;//restituirà il valore calcolato, nel punto in cui la funzione verrà richiamata.
}

var numberArray = [];

for (var i = 0; i < 5; i++) {
  // console.log(random(1,100));
  var number = random(1,100);
  numberArray.push(number);
  console.log(numberArray);
}
