// ESERCIZI DI RISCALDAMENTO
// Scrivere una funzione che prenda in ingresso un qualsiasi dato e mi restituisca una stringa con scritto: 'Il dato inserito è un <tipo del dato>'
// Scrivere una funzione che prenda in ingresso un numero e mi stampi la tabellina corrispondente
// Scrivere una funzione che prenda in ingresso un array di nomi e me lo restituisca in ordine alfabetico


function descriviamoDato (dato){

    let tipoDato = typeof dato;

    return `Il dato è ${tipoDato}!`

}

console.log(descriviamoDato (false));



// _____________________________________________


// function tabellina (number){
    
//     let tabele = [];

//     for (let i = 1 ; i <= 10; i++ ) {
        
//         let result = number * i;

//         tabele.push(`${number} x ${i} = ${result}`);
//     }

//     return tabele;


// }

// console.log(tabellina (6));




function tabellina (number){
    

    for (let i = 1 ; i <= 10; i++ ) {


        console.log(number * i);
        // console.log(`${number} x ${i} = ${result}`);
    }
    

}

tabellina(6);



function OrdinaNomi() {

    let name = ["Angelo","Pasquale", "Giovanni","Beppe"];

    name.sort();

    console.log(name);

    
}

OrdinaNomi ();


// La funziona ha come obiettivo capire che dato è 

// CapisciDati -> (dato)

// let tipoDato = typeof dato;

// return `Questo dato è ${tipoDato}`


// __________________________________________________

// Scrivere una funzione che prenda in ingresso due array e mi restituisca un nuovo array che sia l'unione dei due passati.
// Es: arr1 = [1,2,3]   arr2=['ciao', 'sono','Matteo']        output=[1,2,3,'ciao','sono','Matteo']




function FusionArray (arr1, arr2){

    let newArray = arr2.concat(arr1,arr4);
    console.log(newArray); 
}

let arr1 = "Stringa Giancarlo";
let arr2 = [`ciao`, `sono`,`Matteo`]
let arr4 = 9;
// let output =FusionArray (arr1,arr2);
FusionArray(arr1,arr2);


// ____________________________________________

// Scrivere una funzione che prenda in ingresso un array di numeri e mi restituisca un nuovo array che contenga soltanto i numeri superiori alla media di tutti i numeri presenti nell'array.
// Es: arr=[1,2,3]      media=2       output=[3]


// function mediaNumeriGrandi (array){
//     let sum = array.reduce ((acc,curr)=> acc + curr, 0);
//     let med = sum/array.length;

//     let numeriGrandi =array.filter((num)=> num > med);

//     return numeriGrandi;
// }

// let num = [1,2,3]
// let output = mediaNumeriGrandi (numeri);
// console.log(output);



// function numeriSuperioriMedia(array) {
//     const somma = array.reduce((acc, curr) => acc + curr, 0);
//     const media = somma / array.length;
  
//     const numeriSuperiori = array.filter((numero) => numero > media);
  
//     return numeriSuperiori;
//   }
  
//   // Esempio di utilizzo:
//   const numeri = [2, 5, 8, 10, 3, 7];
//   const output = numeriSuperioriMedia(numeri);
//   console.log(output);


function mediaNumeriGrandi(array) {
    let sum = array.reduce((acc, curr) => acc + curr, 0);
    let media = sum / array.length;
  
    let numeriGrandi = array.filter((numero) => numero > media);
  
    console.log(numeriGrandi);
  }
  
  let numeri = [1, 2, 3];
  mediaNumeriGrandi(numeri);
  
  