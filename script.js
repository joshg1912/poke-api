fetch('https://pokeapi.co/api/v2/pokemon/tauros')
.then((response) => response.json()).then(data => {
console.log(data);
displayTauros(data);
});

function displayTauros(data){
const sprite = data.sprites.versions["generation-i"];
const name = data.name;
const id = data.id;

console.log(id);
console.log(name);
console.log(sprite["red-blue"].front_default);

document.getElementById("tauros").innerHTML = `<img src=${sprite["red-blue"].front_default}>`;
document.getElementById("name").innerHTML = name;
document.getElementById("taurosNumber").innerHTML = "No: " + id;
}

fetch("https://pokeapi.co/api/v2/pokemon/muk").then((response) => response.json()).then(data => {
    console.log(data);
    displayMuk(data);
});

function displayMuk(data) {
    const name = data.name;
    const id = data.id;
    const sprite = data.sprites.versions["generation-i"];

document.getElementById("muk").innerHTML = `<img src="${sprite["red-blue"].front_default}">`;
document.getElementById("name2").innerHTML = name;
document.getElementById("mukNumber").innerHTML = "No: " + id; 
}

fetch("https://pokeapi.co/api/v2/pokemon/gyarados").then((response) => response.json()).then(data => {
    console.log(data);
    displayGyarados(data);
});

function displayGyarados(data){
const name = data.name;
const number = data.id;
const sprite = data.sprites.versions["generation-i"];

document.getElementById("gyarados").innerHTML = `<img src="${sprite["red-blue"].front_default}">`;
document.getElementById("name3").innerHTML = name;
document.getElementById("gyaradosNumber").innerHTML = "No: " + number;
};

fetch("https://pokeapi.co/api/v2/pokemon/arcanine").then((response) => response.json()).then(data => {
    console.log(data);
    displayArcanine(data);
});

function displayArcanine(data){
    const name = data.name;
    const sprite = data.sprites.versions["generation-i"];
    const number = data.id;

    document.getElementById("arcanine").innerHTML = `<img src="${sprite["red-blue"].front_default}">`;
    document.getElementById("name4").innerHTML = name;
    document.getElementById("arcanineNumber").innerHTML = "No: " + number;
}


fetch("https://pokeapi.co/api/v2/pokemon/zapdos").then((response) => response.json()).then(data => {
    console.log(data);
    displayZapdos(data);
});

function displayZapdos(data){
const name = data.name;
const number = data.id;
const sprite = data.sprites.versions["generation-i"];

document.getElementById("zapdos").innerHTML = `<img src="${sprite["red-blue"].front_default}">`;
document.getElementById("name5").innerHTML = name;
document.getElementById("zapdosNumber").innerHTML = "No: " + number;
}

fetch("https://pokeapi.co/api/v2/pokemon/exeggutor").then((response) => response.json()).then(data => {
    console.log(data);
    displayExeggutor(data);
});

function displayExeggutor(data){
const name = data.name;
const number = data.id;
const sprite = data.sprites.versions["generation-i"];

document.getElementById("exeggutor").innerHTML = `<img src="${sprite["red-blue"].front_default}">`;
document.getElementById("name6").innerHTML = name;
document.getElementById("exeggutorNumber").innerHTML = "No: " + number;
}