// import { example } from './data.js';
// import data functions
import data from './data/ghibli/ghibli.js';
// import data

// Selectors DOM
const filmsContainer = document.querySelector('.container__films');
const counter = document.querySelector(".container__showing");

function showDataFilms(films){
    //agregar funcion para limpiar para limpiar
    filmsContainer.innerHTML = "";
    // Inicio de todo
    films.forEach(film => {
        const container = document.createElement('section');
        container.className = 'container__card';
        container.innerHTML = `
            <section class='card__title'>
                <h1>${film.title}</h1>
            </section>
            <img class='card__image' src='${film.poster}' alt='${film.title}' title='${film.title}' loading='lazy'>
        `;
        filmsContainer.appendChild(container);
    })
    counter.innerHTML = `Showing ${films.length}`;
    /* console.log(film.title);
    console.log(film.poster);
    film.people.map(person => {
        console.log(person.name);
        console.log(person.img);
    })
    if(film.locations.length != 0){
        film.locations.map(location => {
            console.log(location.name);
        })
    }else{
        console.log("No tiene locación");
    } */
}

showDataFilms(data.films);

//funcion filtrar
function deleteDuplicate(data){
    return data.filter((item, index)=>{
        return data.indexOf(item) === index;
    });
}
let directorProducer = (arr) => {
    let newArray = [];
    arr.forEach(arr => {
        newArray.push(arr.director);
        newArray.push(arr.producer);
    })
    return deleteDuplicate(newArray);
}

console.log(directorProducer(data.films));
const array = directorProducer(data.films);

let result = data.films.filter(film => (film.director === array[8] || film.producer === array[8] ));
console.log(result);
