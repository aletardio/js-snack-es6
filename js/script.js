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

console.log(`La bici con il peso minore di ${weight} kg è ${name}.`);


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

// **BONUS-2**
// Stampare nel dom oltre che in console tutti gli snack
let snack_1 = document.getElementById('snack-1').innerHTML = `La bici con il peso minore di ${weight} kg è ${name}.`;

const snack_2 = document.getElementById('snack-2');

teams.forEach(team => {
    const teamDiv = document.createElement('div');
    teamDiv.textContent = `Team: ${team.nome}, Fouls: ${team.fouls}`;
    snack_2.appendChild(teamDiv);
});


const snack_3 = document.getElementById('snack-3');

articles.forEach(article => {
    const articleDiv = document.createElement('div');
    articleDiv.textContent = `Name: ${article.name_1}, Type: ${article.type}, Color: ${article.color}, Position: ${article.position}`;
    snack_3.appendChild(articleDiv);
});