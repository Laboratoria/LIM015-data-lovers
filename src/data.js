import data from './data/ghibli/ghibli.js';
//extraer la imagen y el titulo dentro de un div
export const setMoviesTitle = element => {
  return element.map(
    (el) => {
      const movieCover = `<div class="movieItem" id="${el.id}"><img src="${el.poster}" alt = "portada de pelicula"/>`;
      const moviesTitle = `<h2 class="FilmsNames">${el.title.toUpperCase()}</h2></div>`;
      return movieCover + moviesTitle
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
// Funcion para obtener  todos los personajes y sus nombres 
export const charactersName = data.films.map(film => {
  return film.people.map(character => {
    return character.name
  })
});
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
//funcion para obtener descripcion general de personajes
// Funcion para obtener las locaciones y sus descripciones
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
//obtener descripcion segun id de pelicula
export const descriptionMovie = (arr) => {
  const titleOfEachMovie = `<div><h2>${arr[0].title}</h2>`;
  const posterOfEachMovie = `<img src="${arr[0].poster}"/>`;
  const descriptionOfEachMovie = `<p>Sinopsis:<br/>${arr[0].description}</p>`;
  const directorOfEachMovie = `<p><strong>Director: ${arr[0].director}</strong></p>`;
  const producerOfEachMovie = `<p><strong>Producer: ${arr[0].producer}</strong></p>`;
  const releaseOfEachMovie = `<p>Release date: ${arr[0].release_date}</p></div>`;
  return titleOfEachMovie + posterOfEachMovie + descriptionOfEachMovie + directorOfEachMovie + producerOfEachMovie + releaseOfEachMovie
}

//extraer el nombre e imagen de los personajes (todos, sin excepcion)
export const getPeople = arr => {
  return arr.map(e => e.people.map(el => {
    const peopleInfo = `<div class="divTopic" data-id="${el.id}"><img src="${el.img}" /><h3>${el.name.charAt(0).toUpperCase() + el.name.slice(1)}</h3></div>`;
    return peopleInfo;
  }));
}


//extraer el nombre e imagen de los vehiculos
export const getVehicles = arr => {
  return arr.map(e => e.vehicles.map(el => {
    const vehicleImg = `<div class="divTopic" data-id="${el.id}"><img src="${el.img}" />`;
    const vehicleName = `<h3>${el.name.charAt(0).toUpperCase() + el.name.slice(1)}</h3></div>`;
    return vehicleImg + vehicleName
  }));
}
//obtener la info de un personaje por su id
export const filterPeople = (filmsCopy, idMovie, idPeople) => {
  return filmsCopy.filter(element => element.id === idMovie).map(elem => elem.people)[0].filter(el => el.id === idPeople).map(el => {
      return `<h3>Character Name: ${el.name}</h3>
      <img src="${el.img}" />
      <p>Gender: ${el.gender}</p>
      <p>Age: ${el.age}</p>
      <p>Eye color: ${el.eye_color}</p>
      <p>Hair color: ${el.hair_color}</p>
      <p>Specie: ${el.specie}</p>`
  }
  )
}

//obtener la info del vehiculo por su id
export const filterVehicle = (filmsCopy, idMovie, idPeople) => {
return filmsCopy.filter(element => element.id === idMovie).map(elem => elem.vehicles)[0].filter(el => el.id === idPeople).map(el => {
      return `<h3>Vehicle Name: ${el.name}</h3>
      <img src="${el.img}" />
      <p>Description: ${el.description}</p>
      <p>Vehicle Class: ${el.vehicle_class}</p>
      <p>Vehicle Length: ${el.length}</p>
      <p>Pilot: ${el.pilot.name}</p>`
  }
  )
}