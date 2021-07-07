import data from './data/ghibli/ghibli.js';
//recibe

/*Te recomendamos que este archivo contenga toda la funcionalidad que corresponda a obtener, procesar y manipular datos (tus funciones). Por ejemplo:

filterData(data, condition): esta función filter o filtrar recibiría la data, y nos retornaría aquellos datos que sí cumplan con la condición.

sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. El primer parámetro, data, nos entrega los datos. El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.

computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.

Estos nombres de funciones y de parámetros son solamente referenciales, lo que decidas depende de tu propia implementación.

Estas funciones deben ser puras e independientes del DOM. Estas funciones serán después usadas desde el archivo src/main.js, al cargar la página, y cada vez que el usuario interactúe (click, filtrado, ordenad */


  // variable para llamar a data films
const films = data.films

//envio


//funcion set movie detail


//Filtrado seccion Peliculas con img + titulo
export const setMoviesTitle = () => {
  films.map((film) => {
    const movieCover = `<img src="${film.poster}" alt = "portada de pelicula" loading="lazy"/> `,
      moviesTitle = `<h3 > ${film.title.toUpperCase()} </h3>`
    document.querySelector("#name-pelis").innerHTML += movieCover + moviesTitle // cambiarlo al main 
  });
};

//filtrado sort por RT score (puntaje segun criticos)
const filmsCopy = [...data.films];
// console.log (filmsCopy);
const reviewMovieScore = filmsCopy.sort((a, b) => {
  return parseInt(b.rt_score) - parseInt(a.rt_score); // conbierto a numero entero
});
// console.log(reviewMovieScore)

// filtrado sort para orden alfabetico
const alphabeticOrder = filmsCopy.sort((a, b) => {
  if (a.title > b.title) {
    return 1;
  }
  if (a.title < b.title) {
    return -1;
  }
  return 0;
});
 //console.log(alphabeticOrder);

// filtrado por release date menor a mayor
const realeaseDateOld = filmsCopy.sort(( a , b) => {
    return parseInt(a.release_date) - parseInt(b.release_date)

});
// console.log(realeaseDateOrder);

// Filtrado por realease date mas reciente
const lastestRealeaseDate = filmsCopy.sort(( a , b) => {
  return parseInt(b.release_date) - parseInt(a.release_date)
  // return parseInt(b.realease_date - a.realease_date)
});
//console.log(lastestRealeaseDate);


// Funcion para obtener la descripcion de la pelicula al hacerle click a la imagen



// Funcion reduce 
// acumulador obtiene los elementos lo convierte en numero luego suma los rt score 
// llamo a mi variable que contiene la suma y divido entre la cantidad de films


const sumRtScore = data.films.reduce((acumulator , value) => {
 return acumulator + parseInt (value.rt_score)
 
}, 0)

const averageRtScore = sumRtScore /data.films.length;
console.log(averageRtScore);
//console.log(sumRtScore); 



// Funcion para obtener  todos los personajes y sus nombres 

const charactersName = data.films.map(film => {
  return  film.people.map(character => {
     return character.name
  })
});
// console.log(charactersName)

//funcion para obtener descripcion general de personajes





// Funcion para obtener las locaciones y sus descripciones

const locationName = data.films.map(element => {
  return element.locations.map(e => {
    return e.name
  })
});
//console.log(locationName)

// funcion para obtener informacion general de location
// const locationInfo = films.map(element => {
//   return element.locations.map(e =>{
//     return e.
//   })
// })


const sumRtScore = data.films.reduce((acumulator , value) => {
 return acumulator + parseInt (value.rt_score)
 
}, 0)

const averageRtScore = sumRtScore /data.films.length;
console.log(averageRtScore);
//console.log(sumRtScore); 

