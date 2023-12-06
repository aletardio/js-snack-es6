// **SNACK 1**
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
bicycles.forEach((elem) => {
    if(elem.weight < bikeLighterWeight.weight){
        bikeLighterWeight = elem;
    }
});

// Utilizzo della destructuring per ottenere nome e peso
const { name, weight } = bikeLighterWeight;

console.log(`La bici con il peso minore è ${name} con un peso di ${weight} kg.`);


// **SNACK 2**
// Creazione dell'array delle squadre di calcio
let teams = [
    {
        name: 'Inter',
        points: 0,
        fouls: 0
    },
    {
        name: 'Milan',
        points: 0,
        fouls: 0
    },
    {
        name: 'Napoli',
        points: 0,
        fouls: 0
    },
    {
        name: 'Juventus',
        points: 0,
        fouls: 0
    },
    {
        name: 'Roma',
        points: 0,
        fouls: 0
    },
    {
        name: 'Lazio',
        points: 0,
        fouls: 0
    },
]

teams = teams.map(team => ({
    ...team,
    points: Math.floor(Math.random() * 10),
    fouls: Math.floor(Math.random() * 20)   
}));