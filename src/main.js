import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

document.getElementById("atletas").addEventListener("click", () => {
    document.getElementById("firstScreen").style.display = "none";
    document.getElementById("secondScreen").style.display = "block";
});
document.getElementById("paises").addEventListener("click", () => {
    document.getElementById("firstScreen").style.display = "none";
    document.getElementById("thirdScreen").style.display = "block";
});
document.getElementById("paises2").addEventListener("click", () => {
    document.getElementById("secondScreen").style.display = "none";
    document.getElementById("thirdScreen").style.display = "block";
});
document.getElementById("home").addEventListener("click", () => {
    document.getElementById("secondScreen").style.display = "none";
    document.getElementById("firstScreen").style.display = "block";
});
document.getElementById("atletas2").addEventListener("click", () => {
    document.getElementById("thirdScreen").style.display = "none";
    document.getElementById("secondScreen").style.display = "block";
});
document.getElementById("home2").addEventListener("click", () => {
    document.getElementById("thirdScreen").style.display = "none";
    document.getElementById("firstScreen").style.display = "block";
});


console.log(example, data);
