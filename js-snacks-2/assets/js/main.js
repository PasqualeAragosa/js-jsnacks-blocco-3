/* 
Snack 2:
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
*/

const names = ['pasquale', 'FABIO', 'andreA', 'GIAcomo', 'SiMoNe'];

console.log(names);


const camelCaseName = names.map(name => {
    const wordLowerCase = name.toLowerCase();
    wordLowerCase.charAt(0).toUpperCase();
    return wordLowerCase
});
console.log(camelCaseName);


