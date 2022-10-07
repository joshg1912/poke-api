fetch('https://pokeapi.co/api/v2/pokemon/tauros')
.then((response) => response.json()).then(data => {
console.log(data);
displayTauros(data);
});

function displayTauros(data){
const sprite = data.sprites.front_default;
const name = data.name;
console.log(name);
console.log(sprite);
document.getElementById("demo").innerHTML = `<img src=${sprite}>`;
document.getElementById("name").innerHTML = name;
}