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

//A questo punto dovrò MOSTRARE all' UTENTE i NUMERI GENERATI attraverso un ALERT. Dichiaro una VAR GLOBALE, quindi esterna al Ciclo, di tipo stringa (vuota);  in cui salvare i numeri generati ---> (1)
// ----------------------------------------------------------------------------------------------------------------

// STEP 2: Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.

/*Concentriamoci dapprima sulla prima parte dello Step 2: "Dopo 30 secondi" l'utente sarà invitato a fare qualcosa. Devo, dunque, impostare un setTimeout, che ha sintassi del tipo:

"setTimeout(nomeFunzione(){istruzioni da eseguire}, tempoDaAspettare);"
Esso attiva una FX dopo un certo tempo (in millisecondi)*/

var arrayUserNumber = []; //(7) Ora, però mi occorre dichiarare una FX per la VALIDAZIONE dei NUM inseriti dall'UTENTE (che passerò lei come argomento assieme al val di lunghezza dell'Array).(Infatti, il dato deve essere oltre che numerico, non già presente nell'Array). La FX sarà esterna al Ciclo ma la sua chiamata verrà effettuata direttamente nel CICLO While. La dichiaro qui di seguito:
function isUserInputValid(input,userArray) {
  if (isNaN(input) || userArray.includes(input)) { //Se il DATO inserito NON è NUMERICO o il DATO è cmq numerico ma è GIA' NELL'ARRAY, allora RETURN FALSE. Altrimenti RETURN TRUE ---> (8)
    return false;
  } else {
    return true;
  }
}

setTimeout(function() {
	console.log('Inserisci un numero fra quelli visionati precedentemente');//Stampa di prova funzionamento TIMING, in console.

	/*Qui, fra le Graffe, riporterò le istruzioni da eseguire dopo 30 sec. Come da traccia: "l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente."*/
	/*Dunque, il PROMPT va inserito in un CICLO in cui si VERIFICHINO le seguenti CONDIZIONI:
	-(a)- il DATO inserito sia NUMERICO;
	-(b)- SEMPRE DIVERSO;
	-(c)- va da sè che, il PROMPT di input utente debba esser ESEGUITO per un NUMERO di VOLTE NECESSARIO ad ACQUISIRE i 5 DATI RICHIESTI.

	 Quindi, se necessario, per un numero di volte anche superiore a 5. Per cui, per le stesse ragioni, riscontrate precedentemente, dovrò appellarmi ad un CICLO WHILE. A partire dal punto (5) */

	/*Ho bisogno, dunque, come fatto prima, di un ARRAY VUOTO, ovviamente ESTERNO al CICLO, su cui EFFETTUARE i CONTROLLI e che SI POPOLI , di volta in volta, con i VALORI AMMESSI.*/

	// var arrayUserNumber = [];//(6) Sarà opportuno tenere la var di Array fuori da questa FX--->(7)

	/*e solo se il numero scelto dall'utente non è già incluso nell' Array dell' Utente,
	lo aggiunge ad esso.*/
  var score = 0; //(9)--->vai a nota (10)
  //(5) Qui sotto il Ciclo while ---> Vai alla nota (6).
  while (arrayUserNumber.length < 5) { //(11)
    var userInput = prompt('Inserisci un numero fra quelli visionati precedentemente'); //(4)Salva il dato recuperato da PROMPT nella var "userMemory"
    if (isUserInputValid(userInput,arrayUserNumber)) { //(8) Se la FX di Validazione RITORNA il val BOOLEANO TRUE esegui il blocco di codice fra le Graffe.
      arrayUserNumber.push(userInput); //SALVA il NUM (validato) nell'ARRAY UTENTE. Aggiorna poi la var SCORE che dichiaro fuori dal ciclo.--->(9)
      console.log('Questo l\'array, aggiornato volta per volta, dei numeri inseriti dall\'utente: ' + arrayUserNumber); //Stampa l'array in Console
    }
    else {
      alert('Non hai inserito un numero o il numero è già stato inserito');
    }
  }
  if (arrayPcNumber.includes(userInput)) {
    score += 1; //(10)
    console.log('Questo lo SCORE Utente, aggiornato ad ogni tentativo: ' + score); // Stampa il punteggio aggiornato in console --->definisci ora la condizione del ciclo While ---> Vai a nota (11)
  }
// }, 30000);
}, 3000);//Riduciamo, per ora il tempo di attivazione del PROMPT e di tutte le istruzioni di codice che seguiranno. Inseriamo il PROMPT--->(4)
