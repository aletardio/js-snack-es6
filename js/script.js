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
        nome: 'Inter',
        points: 0,
        fouls: 0
    },
    {
        nome: 'Milan',
        points: 0,
        fouls: 0
    },
    {
        nome: 'Napoli',
        points: 0,
        fouls: 0
    },
    {
        nome: 'Juventus',
        points: 0,
        fouls: 0
    },
    {
        nome: 'Roma',
        points: 0,
        fouls: 0
    },
    {
        nome: 'Lazio',
        points: 0,
        fouls: 0
    },
]

// Utilizzo del map per generare numeri casuali per tutte le squadre
teams = teams.map(team => ({
    ...team,
    points: Math.floor(Math.random() * 10),
    fouls: Math.floor(Math.random() * 20)   
}));

// Destructuring per creare un nuovo array con solo nomi e falli di ogni squadra
const teamsFiltered = teams.map(({ nome, fouls }) => ({ nome, fouls}));

console.log(teamsFiltered);

// **BONUS 1 - SNACK 3**
// Creazione dell'array di articoli di moda
let articles = [
    {
        name_1: 'Poppy',
        type: 'tshirt',
        color: 'red'
    },
    {
        name_1: 'Jumping',
        type: 'occhiali',
        color: 'blue'
    },
    {
        name_1: 'CrissCross',
        type: 'scarpe',
        color: 'black'
    },
    {
        name_1: 'Jenny',
        type: 'borsa',
        color: 'pink'
    }
];

// Attaccare ag ogni oggetto la proprietà position con una lettera casuale
const alphabet = 'ABCDFEGHIJKLMNOPQRSTUVWXYZ';
articles = articles.map(articles => ({
    ...articles,
    position: alphabet[Math.floor(Math.random() * alphabet.length)]
}));

// Inserire gli oggetti modificati in un nuovo array
const newArticles = articles.map(({ name_1, type, color, position }) => ({ name_1, type, color, position }));

console.log(newArticles);