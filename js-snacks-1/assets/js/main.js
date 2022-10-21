/* 
Snack 1:
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/

const cars = [
    {
        brand: 'Fiat',
        model: 'Punto',
        supply: 'diesel'
    }, 
    {
        brand: 'Fiat',
        model: 'Bravo',
        supply: 'gpl'
    },
    {
        brand: 'Tesla',
        model: 'Model 3',
        supply: 'elettrico'
    },
    {
        brand: 'Renault',
        model: 'Captur',
        supply: 'benzina'
    },
    {
        brand: 'Renault',
        model: 'Zoe',
        supply: 'elettrico'
    },
    {
        brand: 'Ford',
        model: 'Puma',
        supply: 'metano'
    },
    {
        brand: 'Renault',
        model: 'Megane',
        supply: 'diesel'
    },
    {
        brand: 'Audi',
        model: 'A5',
        supply: 'benzina'
    },
    {
        brand: 'Lancia',
        model: 'Delta',
        supply: 'gpl'
    },
    {
        brand: 'Fiat',
        model: '500',
        supply: 'elettrico'
    }
]

console.log(cars);

//Array Benzina
const petrolCars = cars.filter(car => {
    if (car.supply === 'benzina') {
        return true;
    } else {
        return false;
    }
});

console.log('Auto benzina: ', petrolCars);

//Array Diesel
const gasolineCars = cars.filter(car => {
    if (car.supply === 'diesel') {
        return true;
    } else {
        return false;
    }
});

console.log('Auto diesel: ', gasolineCars);

//Array resto
const otherCars = cars.filter(car => {
    if (car.supply !== 'diesel' && car.supply !== 'benzina') {
        return true;
    } else {
        return false;
    }
});

console.log('Auto diesel: ', otherCars);