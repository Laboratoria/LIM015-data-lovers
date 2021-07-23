import data from './data/ghibli/ghibli.js';

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
//ordena pelis por rating score (menor a mayor)
export const ratingScoreLess = (filmsCopy) =>
  filmsCopy.sort((a, b) => {
    if (Number(a.rt_score) > Number(b.rt_score)) { return 1 }
    if (Number(a.rt_score) < Number(b.rt_score)) { return -1 }
    return 0;
  });
//ordena pelis por rating score (mayor a menor)
export const ratingScore = (filmsCopy) => filmsCopy.sort((a, b) => {
  if (parseInt(a.rt_score) < parseInt(b.rt_score)) { return 1 }
  if (parseInt(a.rt_score) > parseInt(b.rt_score)) { return -1 }
  return 0;
});
//ordena pelis por release date (menor a mayor)
export const realeaseDateOld = filmsCopy => {
  return filmsCopy.sort((a, b) => {
    return parseInt(a.release_date) - parseInt(b.release_date)
  });
}
//ordena pelis por release date (mayor a menor)
export const lastestRealeaseDate = filmsCopy => filmsCopy.sort((a, b) => {
  return parseInt(b.release_date) - parseInt(a.release_date)
})
// Funcion para sacar promedio del rt score
export const getAverage = (arr) => {
  const sum = arr.reduce((acumulator, value) => {
    return acumulator + parseInt(value.rt_score)
  }, 0)
  return sum / arr.length
}
// // Funcion para obtener  todos los personajes y sus nombres - observado
// export const charactersName = data.films.map(film => {
//   return film.people.map(character => {
//     return character.name
//   })
// });

//Funcion inputSearch
export const onSearch = (arr, search) => {
  return arr.filter(el => {
    const textLowerCase = el.title.toLowerCase()
    const searchLowerCase = search.toLowerCase()
    if (textLowerCase.includes(searchLowerCase)) {
      return true
    }
  })
}
// Funcion para obtener las locaciones y sus descripciones - observado
export const locationName = data.films.map(element => {
  return element.locations.map(e => {
    return e.name
  })
});
//extraer informacion que corresponda al id de la pelicula
export const compareIdMovie = (arr, idvalue) => {
  return arr.filter(element => {
    return element.id === idvalue
  })
};

// get img + name in a array object
export const getLocationsFromMovie = (movies) => {
  let locations = [];
  movies.forEach(movie => movie.locations.forEach(location => {
    locations.push({
      img: location.img,
      name: location.name
    })
  }))
  return locations;
}
