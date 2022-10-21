/* 
Snack 2:
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
*/

const names = ['pasquale', 'FABIO', 'andreA', 'GIAcomo', 'SiMoNe'];

console.log(names);


const camelCaseName = names.map(name => name.toLocaleLowerCase());
console.log(camelCaseName);


