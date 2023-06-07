function giocoDadi(numberOfShots) {

    let giocatore1 = 0;
    let giocatore2 = 0;

    for (let i = 0; i < numberOfShots; i++) {
        
        let dadoGiocatore1 = Math.floor(Math.random() * 6) + 1;
        
        let dadoGiocatore2 = Math.floor (Math.random () * 6) + 1;
        
        giocatore1 += dadoGiocatore1;

        giocatore2 += dadoGiocatore2;
        
    }
    
    if ( giocatore1 > giocatore2) {
        return `Giocatore 1 Vince con ${giocatore1}`;
    }
    else if(giocatore2 > giocatore1) {
        return `Giocatore 2 Vince con ${giocatore2}`;
    }
    else {
        return `Parità!`;
    }
}

// const numberOfShots = 6; //numero tiri x giocatore;
const risultatoDelGioco = giocoDadi (5);
console.log(risultatoDelGioco);

// Esercizi 06.06.2023

// ES1: Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.
// Esempio:
//         Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
//         Output: [8, 7, 6, 5, 3, 2, 1, -2, -4]
// Variante:
//     Prova ad ordinali in modo crescente.   

let numbers = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]


numbers.sort ((a,b) => b - a);

console.log (numbers);

numbers.sort ((a,b) => a - b);

console.log(numbers);


// ES2: Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
// Nel controllo scarta gli spazi e i segni di punteggiatura.
//         Esempio:
//         Input: “i topi non avevano nipoti”
//         Output: TRUE
//     Consigli:
// Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando :
// // str.replace(/\W/g, "")


function isPalindrome (str){

    // Abbiamo come obiettivo quello eliminare la punteggiatura dalle stringhe in questo modo quando andremo a leggere la frase il codice non terrà conto di questi caratteri

    let puliziaStr = str.replace (/\W/g,``);

    // Qui inseriamo i caratteri minuscoli, per evitre che il codice debba comprendere la differenza tra A e a

    let minuscoloStr = puliziaStr.toLowerCase ();


    // Capire se la stringa è palindroma, con split abbiamo inserito ogni singola lettera in un elemento, con revers le abbiamo invertite tutte, e con join le abbiamo inserite nuovamente in un unica stringa

    let reversStr = minuscoloStr.split (``).reverse().join(``);

    return minuscoloStr === reversStr;

}

let input = "I Topi non avevano Nipoti!";

let èRisultatoPalindromo = isPalindrome(input);
console.log (èRisultatoPalindromo); //Dovremmo ottenere true

// // SPIEGAZIONE 

// Certamente! Ecco una spiegazione dei passaggi della funzione in JavaScript, adatta a ragazzi di terza media:

// "Ora vi mostrerò come una funzione in JavaScript può aiutarci a verificare se una frase è palindroma o meno.

// Iniziamo definendo una funzione chiamata `isPalindrome`. Questa funzione prende una frase come input e il nostro obiettivo è determinare se la frase è palindroma o no.

// Per prima cosa, eliminiamo gli spazi e i segni di punteggiatura dalla frase, perché non ci interessano per il nostro controllo. Per fare ciò, utilizziamo una funzione speciale chiamata `replace`. Usiamo una specie di codice speciale chiamato "espressione regolare" per trovare tutti gli spazi e i segni di punteggiatura nella frase e li sostituiamo con una stringa vuota. In questo modo otteniamo una versione pulita della frase senza spazi o segni strani.

// Successivamente, convertiamo la frase in caratteri minuscoli. Ciò significa che non consideriamo la differenza tra lettere maiuscole e minuscole nella frase. In questo modo, la nostra verifica sarà indipendente dalla scrittura della frase.

// Ora, affrontiamo la parte divertente! Prendiamo la frase pulita e la spezziamo in singoli caratteri, mettendoli in un insieme chiamato array. In pratica, stiamo separando ogni lettera della frase in modo da poterle manipolare singolarmente.

// A questo punto, invertiamo l'ordine dei caratteri nell'array utilizzando una funzione chiamata `reverse`. In altre parole, prendiamo l'ultima lettera e la mettiamo come prima, la penultima lettera come seconda, e così via. Alla fine, otteniamo una versione della frase al contrario.

// Infine, controlliamo se la frase originale è uguale alla frase al contrario. Se le due frasi sono uguali, allora possiamo concludere che la frase è palindroma! In caso contrario, la frase non è palindroma.

// Ecco come funziona la nostra funzione `isPalindrome`! Possiamo chiamarla passando una frase e ci dirà se è palindroma o no. È davvero emozionante vedere come possiamo utilizzare il potere della programmazione per risolvere divertenti problemi come questo."

// Spero che questa spiegazione aiuti i ragazzi di terza media a capire come funziona la funzione. Se avete altre domande, non esitate a chiedere!


// _________________________________________


// ES3: Scrivi una funzione che permetta di calcolare la somma dei numeri all’interno di un array:
// dato di partenza, let numbers = [10, 20, 30, 40];
// il risultato dovra’ restituire = 100;

function calcolosomma (numbers2){

    let sum = numbers2.reduce ((a,b) => a + b, 0 );

    return sum; 
}

let numbers2 = [10,20,30,40];

let sum = calcolosomma(numbers2);

console.log(sum);




// ```javascript
// function calculateSum(numbers) {
//   const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//   return sum;
// }

// // Esempio di utilizzo
// const numbers = [10, 20, 30, 40];
// const sum = calculateSum(numbers);
// console.log(sum);  // Output: 100
// ```



// Immaginate che abbiamo una funzione chiamata `calculateSum` che prende un gruppo di numeri come input. Questa funzione ci aiuterà a trovare la somma di tutti i numeri nel gruppo.

// All'interno della funzione, c'è una parte davvero speciale chiamata `reduce`. Questo è un metodo che viene utilizzato sull'array di numeri per aiutarci a fare il calcolo.

// Nella parte `reduce`, ci sono due cose importanti: un accumulatore e un valore corrente. L'accumulatore è come una cassetta dove mettiamo i numeri che vogliamo sommare, uno alla volta. Il valore corrente è il numero che stiamo considerando in quel momento.

// Ora, ci serve una regola per mettere i numeri nella cassetta dell'accumulatore. La regola dice che dobbiamo prendere l'accumulatore e aggiungere il valore corrente ad esso. In questo modo, aggiungiamo un numero alla volta alla nostra somma.

// Quando abbiamo finito con tutti i numeri, otteniamo la nostra somma totale! Questa somma è quello che la funzione `calculateSum` ci restituirà.

// Per vedere come funziona, diamo un'occhiata all'esempio di utilizzo. Abbiamo un gruppo di numeri: 10, 20, 30 e 40. Chiamiamo la funzione `calculateSum` con questi numeri e otteniamo la somma totale.

// Infine, stampiamo la somma sulla console. In questo caso, la somma dei numeri nel gruppo è 100!

// Ecco come funziona il nostro codice. Possiamo usarlo per calcolare la somma di qualsiasi gruppo di numeri. Spero che sia stato divertente e che abbiate capito come funziona!"

// Spero che questa spiegazione semplificata sia stata comprensibile per i bambini di terza media. Se avete altre domande, non esitate a chiedere!


// _______________________________________________________


// ES4: Scrivere un programma che permetta di ottenere un nuovo array che abbia come valori i numeri del primo array sommati con i valori del secondo array:
// let numbers1 = [10, 20, 30];
// let numbers2 = [40, 50, 60];
// dovra’ restituire come risultato, let newArray = [50, 70, 90]


// function sumArrays (array1, array2) {

//     let newArray = [];

//     for(let i = 0; i < array1.length; i++){
    
//         let sum = array1 [i] + array2 [i];
    
//         newArray.push (sum);
//     }

//     return (newArray)
// }

let numbers3 = [10, 20, 30];
let numbers4 = [40, 50, 60];
let newArray = numbers3.map ((number,i)=> number + numbers4 [i] );

console.log(newArray);

// let newArray = sumArrays (numbers3,numbers4);
// let nuovoArray = sumArrays ([1,2,3], [4,5,6]);
// console.log(newArray);


// __


