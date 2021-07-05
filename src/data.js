//extraer la imagen y el titulo dentro de un div
export const setMoviesTitle = element => {
  return element.map(
    (el) => {
      const movieCover = `<div class="movieItem"><img src="${el.poster}" alt = "portada de pelicula"/>`;
      const moviesTitle = `<h2>${el.title.toUpperCase()}</h2></div>`;
      return movieCover + moviesTitle;
    }
  )
}
//ordena pelis alfabeticamente de A a Z
export const alphabeticOrder = (filmsCopy) => filmsCopy.sort((a, b) => {
  return a.title > b.title ? 1 : a.title < b.title ? -1 : 0;
});
//ordena pelis alfabeticamente de Z a A
export const alphabeticOrderLess = (filmsCopy) => filmsCopy.sort((a, b) => {
  if (a.title < b.title) { return 1 }
  if (a.title > b.title) { return -1 }
  return 0;
});
//ordena pelis por rating score (mayor a menor)
export const ratingScore = (filmsCopy) =>
  filmsCopy.sort((a, b) => {
    if (a.rt_score > b.rt_score) { return 1 }
    if (a.rt_score < b.rt_score) { return -1 }
    return 0;
  });
//ordena pelis por rating score (menor a mayor)
export const ratingScoreLess = (filmsCopy) => filmsCopy.sort((a, b) => {
  if (a.rt_score < b.rt_score) { return 1 }
  if (a.rt_score > b.rt_score) { return -1 }
  return 0;
});
//ordena pelis por release date (mayor a menor)
export const realeaseDateOld = filmsCopy =>
  filmsCopy.sort((a, b) => {
    return Number(a.release_date - b.release_date)
  });
//ordena pelis por release date (menor a mayor)
export const lastestRealeaseDate = filmsCopy => filmsCopy.sort((a, b) => {
  return parseInt(b.release_date) - parseInt(a.release_date)
})
//extraer la descripcion de peliculas(Alisson)

//extraer el nombre e imagen de los personajes
export const getPeople = element => {
  return element.map(e => e.people.map(el => {
    const peopleImage = `<div><img src="${el.img}" />`;
    const peopleName = `<h3>${el.name.charAt(0).toUpperCase() + el.name.slice(1)}</h3></div>`;
    return peopleImage + peopleName;
  }));
}


/*people y su descripciones (yo)

locaciones y descripciones (Alisson)

vehiculos y susdescripciones (yo)*/
