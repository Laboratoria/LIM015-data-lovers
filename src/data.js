import data from './data/ghibli/ghibli.js'
//recibe
// estas funciones son de ejemplo

//envio

//Filtrado seccion Peliculas con img + titulo
export const setMoviesTitle = () => {
  data.films.forEach((element) => {
    const movieCover = `<img src="${element.poster}" alt = "portada de pelicula" loading="lazy"/> `,
      moviesTitle = `<h3> ${element.title.toUpperCase()} </h3>`
    document.querySelector("#name-pelis").innerHTML += movieCover + moviesTitle
  });
};

//filtrado sort por RT score (puntaje segun criticos)
const filmsCopy = [...data.films]
// console.log (filmsCopy);
const reviewMovieScore = filmsCopy.sort((a, b) => {
  return parseInt(b.rt_score) - parseInt(a.rt_score) // conbierto a numero entero

});
// console.log(reviewMovieScore)

// filtrado sort para orden alfabetico 
const alphabeticOrder = filmsCopy.sort((a, b) => {
  if (a.title > b.title) {
    return 1
  }
  if (a.title < b.title) {
    return -1
  } return 0
});
//console.log(alphabeticOrder);


filmsCopy.sort()


reviewMovieScore
alphabeticOrder

// export const anotherExample = () => {
//   console.log('OMG');
// };