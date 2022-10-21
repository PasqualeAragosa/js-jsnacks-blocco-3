/* 
Snack 3
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Crea un nuovo array con la lista dei mammiferi.
*/

const animals = [
    { 
        nome: 'leone', 
        famiglia: 'felidi', 
        classe: 'mammiferi' 
    },
    { 
        nome: 'cane', 
        famiglia: 'canidi', 
        classe: 'mammiferi' 
    },
    { 
        nome: 'gallina', 
        famiglia: 'fasianidi', 
        classe: 'uccelli' 
    },
  ];

console.log(animals);

// const mammals = animals.filter ( function(pet) {
//     if (pet.classe === 'mammiferi') {
//         return true;
//     }
// });

const mammals = animals.filter(pet => pet.classe === 'mammiferi');

console.log(mammals);