fetch('https://pokeapi.co/api/v2/pokemon/tauros')
.then((response) => response.json()).then(data => {
console.log(data);
displayTauros(data);
});

function displayTauros(data){
const sprite = data.sprites.front_default;
const name = data.name;
const id = data.id;

console.log(id);
console.log(name);
console.log(sprite);

document.getElementById("tauros").innerHTML = `<img src=${sprite}>`;
document.getElementById("name").innerHTML = name;
document.getElementById("taurosNumber").innerHTML = id;
}

fetch("https://pokeapi.co/api/v2/pokemon/muk").then((response) => response.json()).then(data => {
    console.log(data);
    displayMuk(data);
});

function displayMuk(data) {
    const name = data.name;
    const id = data.id;
    const sprite = data.sprites.front_default;

document.getElementById("muk").innerHTML = `<img src="${sprite}">`;
document.getElementById("name2").innerHTML = name;
document.getElementById("mukNumber").innerHTML = id; 
}

fetch("https://pokeapi.co/api/v2/pokemon/gyarados").then((response) => response.json()).then(data => {
    console.log(data);
    displayGyarados(data);
});

function displayGyarados(data){
const name = data.name;
const number = data.id;
const sprite = data.sprites.front_default;

document.getElementById("gyarados").innerHTML = `<img src="${sprite}">`;
document.getElementById("name3").innerHTML = name;
document.getElementById("gyaradosNumber").innerHTML = number;
};

fetch("https://pokeapi.co/api/v2/pokemon/arcanine").then((response) => response.json()).then(data => {
    console.log(data);
    displayArcanine(data);
});

function displayArcanine(data){
    const name = data.name;
    const sprite = data.sprites.front_default;
    const number = data.id;

    document.getElementById("arcanine").innerHTML = `<img src="${sprite}">`;
    document.getElementById("name4").innerHTML = name;
    document.getElementById("arcanineNumber").innerHTML = number;
}


fetch("https://pokeapi.co/api/v2/pokemon/flygon").then((response) => response.json()).then(data => {
    console.log(data);
    displayFlygon(data);
});

function displayFlygon(data){
const name = data.name;
const number = data.id;
const sprite = data.sprites.front_default;

document.getElementById("flygon").innerHTML = `<img src="${sprite}">`;
document.getElementById("name5").innerHTML = name;
document.getElementById("flygonNumber").innerHTML = number;
}