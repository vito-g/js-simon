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

/*Certamente, perchè i numeri generati dalla FX, di cui sopra, siano l'uno diverso dall'altro, è necessario creare un Array vuoto e salvare in esso solo numeri che siano diversi fra loro.
Dunque, ci sarà un CONTROLLO sui numeri generati.
La CREAZIONE di un ARRAY VUOTO è propedeutica proprio a questo controllo.*/

var arrayPcNumber = [];

/*E' evidente che, la FX potendo generare più volte uno stesso numero, dovrà esser richiamata, attraverso un Ciclo, tante volte quanto necessario per salvare nell'Array 5 numeri distinti fra loro. Cosa che non posso sapere a priori.

Dunque, il controllo sull'Array non potrà esser fatto attraverso un ciclo FOR (che utilizza un normale contatore).
Dovrò utilizzare un Ciclo WHILE la cui condizione di CONTROLLO sarà legata esclusivamente alla LUNGHEZZA dell'ARRAY che voglio ottenere. Questa, come da traccia, dovrà esser PARI A 5. */

var msg = ' ';//(1) N.B.: Stringa generata in ragione di commento più in basso. La "msg" dovrò posizionarla all'interno delle condizioni dell'IF --->(2)

while (arrayPcNumber.length < 5) { //A condizione che la LUNGHEZZA dell'ARRAY risulti < 5, esegui il blocco di istruzioni tra graffe.
	var numberPc = random(1,100);//Genera un numero tra 1 e 100 e salvalo nella var numberPc;
	if (!arrayPcNumber.includes(numberPc)) {//Se il numero generato, non è già stato incluso nell'Array...
		arrayPcNumber.push(numberPc);//...includilo.
		msg += ' ' + numberPc; //(2) Aggiungi alla stringa di messaggio, di volta in volta, i numeri generati correttamente e fra loro spaziati. Poi, stampa il tutto in un Alert--->(3)
	}
	console.log(arrayPcNumber);//Stampa l'Array nella Console, mano a mano che si riempie.
}
alert('Memorizza questi numeri:' + msg);//(3)

//A questo punto dovrò MOSTRARE all' UTENTE i NUMERI GENERATI attraverso un ALERT. Dichiaro una VAR GLOBALE di tipo stringa(vuota); quindi esterna al Ciclo, in cui salvare i numeri generati ---> (1)
// ----------------------------------------------------------------------------------------------------------------

// STEP 2: Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.

/*Concentriamoci dapprima sulla prima parte dello Step 2: "Dopo 30 secondi" l'utente sarà invitato a fare qualcosa. Devo, dunque, impostare un setTimeout, che ha sintassi del tipo:

"setTimeout(nomeFunzione(){istruzioni da eseguire}, tempoDaAspettare);"
Esso attiva una FX dopo un certo tempo (in millisecondi)*/

setTimeout(function() {
	console.log('Inserisci, uno alla volta, i numeri che hai visto');
}, 30000);
