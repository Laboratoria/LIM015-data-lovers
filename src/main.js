import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

// eslint-disable-next-line no-console
console.log(example, data);
const buttonpokedex = document.getElementById("pokedex");
buttonpokedex.addEventListener("click" , function(){
    document.getElementById("data").innerHTML=data.pokemon.map(example).join(" ")
})