// Creazione dell'array di oggetti
let bicycles = [
    {
        name: 'BMX',
        weight: 8
    },
    {
        name: 'Graziella',
        weight: 10
    },
    {
        name: 'EcoPedal',
        weight: 15
    },
    {
        name: 'Bici da Corsa',
        weight: 7
    },
    {
        name: 'AvanzoRide',
        weight: 17
    },
];

// Dichiarazione di una variabile bici con peso minore con il peso massimo possibile
let bikeLighterWeight = { weight: Infinity };

// Ciclo forEach per cercare la bici con peso minore
bicycles.forEach(elem => {
    if(elem.weight < bikeLighterWeight.weight){
        bikeLighterWeight = elem;
    }
});

// Utilizzo della destructuring per ottenere nome e peso
const { name, weight } = bikeLighterWeight;

console.log(`La bici con il peso minore è ${name} con un peso di ${weight} kg.`);
