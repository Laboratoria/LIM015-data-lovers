
// import { setMoviesTitle } from './data.js'
// import data from './data/ghibli/ghibli.js'
import { setMoviesTitle } from './data.js';

/*data.films.forEach(function (elem) {
    console.log(elem.poster)
});*/

const navMovies = document.querySelector("#movies");
navMovies.addEventListener("click", function () {
    const hideFirstSlide = document.querySelector("#container_to_display");
    const logo = document.querySelector("#logo");
    hideFirstSlide.style.display = "none";
    logo.style.display = "none";
    //mostrar la imagen y el titulo
    setMoviesTitle() // Filtrado seccion Peliculas con img + titulo
    // anotherExample()

});




const getMoviePic = () => {
    const namePelis = document.querySelector("#name-pelis");
    console.log(namePelis);
    //namePelis.addEventListener("click" , function (){

    }


// function pruebaDos() {
//     data.films.forEach(function (element) {
//         const movieCover = `<img src="${element.poster}" alt = "portada de pelicula" loading="lazy"/> `,
//             moviesTitle = `<h3> ${element.title.toUpperCase()} </h3>`
//         document.querySelector("#name-pelis").innerHTML += movieCover + moviesTitle
//     });
// }


// function prueba() {
//     data.films.forEach(function (elem) {
//         const titulos = `<h2> ${elem.title.toUpperCase()} </h2>`,
//             descripciones = `<h3>Description:</h3><p>${elem.description}</p>`,
//             directores = `<h3>Directors:</h3><p>${elem.director}</p>`,
//             productores = `<h3>Productores:</h3><p>${elem.producer}</p>`,
//             portada = `<img src="${elem.poster}" alt = "portada de pelicula" loading="lazy"/> `,
//             fechaLanzamiento = `<h3> Release Date:</h3> <p>${elem.release_date}</p>`,
//             puntajeAudiencia = `${elem.release_date} `;
//         document.querySelector("#name-pelis").innerHTML += titulos + descripciones + directores + productores + fechaLanzamiento + portada;

//     });
// }
