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
const reviewMovieScore = data.films.sort((a, b) => {
  a.rt_score - b.rt_score

});
console.log(reviewMovieScore);

// filtrado sort para orden alfabetico 
const alphabeticOrder = data.films.sort((a, b) => {
  a.title - b.title
});
console.log(alphabeticOrder);








// export const anotherExample = () => {
//   console.log('OMG');
// };
