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

// STEP 1: Un alert espone 5 numeri casuali diversi:
// Mi occorrerà, certamente una FX per il calcolo randomico degli stessi
function random(a, b) {
  var randomNumber = Math.floor((Math.random() * b) + a);
  return randomNumber;//restituirà il valore calcolato, nel punto in cui la funzione verrà richiamata.
}

var numberArray = [];
var msg= '';
for (var i = 0; i < 5; i++) {
  // console.log(random(1,100));
  var number = random(1,100);
  numberArray.push(number);
  console.log(numberArray);
  msg += ' ' + numberArray[i];
}
 alert('Ecco i numeri che dovrai ricordare: ' + msg);

//STEP 2: Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.

//Il dato numerico che l'utente inserirà attraverso un prompt (e che salverò in una var "numUser") dovrà, però, esser validato. Creo per questo una FX ad hoc che chiamo "numberValid" il cui parametro "inputUtente" sarà popolato dal valore di "numUser" (che ne diventerà, dunque, argomento):
function numberValid(inputUtente) {
  if (isNaN(inputUtente)) {
    return false;
  }
  return true;
}

for (var i = 0; i < 5; i++) {
  var numUser = parseInt(prompt('Inserisci il primo numero che ricordi di aver visto'));
  console.log(numUser);
}
