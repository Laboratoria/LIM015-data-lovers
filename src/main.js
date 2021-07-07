//import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

const containerAnimes = document.getElementById('container-animes');




data.films.forEach(datos);

function datos(dato) {
    const cardAnime = document.createElement('div')
    cardAnime.className = "container-card-anime";
    cardAnime.innerHTML = `
    <div>
    <img src= '${dato.poster}' id="image-poster"></img>
    <p id="title"> ${dato.title} </p>
    <p id="release"> ${"(" + dato.release_date + ")"} </p>
    <br>
    </div>`
    containerAnimes.appendChild(cardAnime);
    
}







//console.log(example, data);
