// TRACCIA:
// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzae il programma.
// -----------------------------------------------------------------------------------------------------------

// STEP 1: Un alert espone 5 numeri casuali diversi.

/*Questo vuol dire che, all'interno dello script avrò bisogno di una FX per il calcolo "randomico" dei numeri, tra un val max (a) ed un val min (b) che andrò a stabilire, arbitrariamente, in fase di richiamo della funzione stessa.
La funzione è quella che segue:*/
function random(a, b) {
  var randomPcNumber = Math.floor((Math.random() * b) + a);
  return randomPcNumber;//restituirà il valore calcolato, nel punto in cui la funzione verrà richiamata attraverso l'istruzione random(a,b), dove "a" e "b" hanno valori numerici assegnati.
}
