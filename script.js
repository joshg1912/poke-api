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

document.getElementById("demo").innerHTML = `<img src=${sprite}>`;
document.getElementById("name").innerHTML = name;
document.getElementById("number").innerHTML = id;
}

fetch("https://pokeapi.co/api/v2/pokemon/muk").then((response) => response.json()).then(data => {
    console.log(data);
    displayMuk(data);
});

function displayMuk(data) {
    const name = data.name;
    const id = data.id;
    const sprite = data.sprites.front_default;
}