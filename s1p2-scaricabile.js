/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltÃ  puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non Ã¨ stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype in JavaScript sono:
 String, che ha un'entità tra "..." o tra '...';
 Number, che ha un'entità numerica;
 Boolean, che ha un'entità logica e può essere true o false;
 Undefined, vuol dire che non è stato assegnato nessun valore alla variabile;
 Null, vuol dire che è stata assegato un valore "vuoto" alla varibile;
 Object, che raccoglie più chiave-valore che descrivono ua stessa entità all'interno di una variabile;
 Array, una lista.
 */

/* ESERCIZIO 2
 Descrivi cos'Ã¨ un oggetto in JavaScript, con parole tue.
*/

/* Un oggetto in JavaScript è un dato strutturale che raccoglie più chiave-valore che descrivono ua stessa entità all'interno di una variabile.
 Un'oggeto lo troviamo scritto tra parentesi graffe dopo aver dichiarato la variabile.
 Esempio:
 let mieiData = 
 {name: "Paola",
 age: 28,
 epicodeStudent: true,
}
 */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* let primoN = 12
let secondoN = 20
let somma = primoN + secondoN
console.log(somma)
 */

/* ESERCIZIO 4
 Crea una variabile di nome "x" e assegna ad essa il numero 12.
*/

/* let x = 12 */

/* ESERCIZIO 5
 Crea una variabile chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* let name = "Paola" */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* let x = 12
let y = 4
let differenza = x - y
console.log(differenza)
 */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: Ã¨ la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* 
let name1 = "john"
let name2 = "John"
let disuguaglianza = name1 !== name2
console.log(disuguaglianza)

let uguaglianza = name1.toLowerCase() === name2.toLowerCase()
console.log(uguaglianza)

*/