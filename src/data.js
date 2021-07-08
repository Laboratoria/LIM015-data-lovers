import data from './data/ghibli/ghibli.js';

const films = data.films;

//funcion set movie detail

//filtrado sort por RT score (puntaje segun criticos)
const filmsCopy = [...data.films];

export const reviewMovieScore = filmsCopy.sort((a, b) => {
  return parseInt(b.rt_score) - parseInt(a.rt_score) // conbierto a numero entero
})



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
//ordena pelis por rating score (menor a menor)
export const ratingScoreLess = (filmsCopy) =>
  filmsCopy.sort((a, b) => {
    if (parseInt(a.rt_score) > parseInt(b.rt_score)) { return 1 }
    if (parseInt(a.rt_score) < parseInt(b.rt_score)) { return -1 }
    return 0;
  });
//ordena pelis por rating score (menor a mayor)
export const ratingScore = (filmsCopy) => filmsCopy.sort((a, b) => {
  if (parseInt(a.rt_score) < parseInt(b.rt_score)) { return 1 }
  if (parseInt(a.rt_score) > parseInt(b.rt_score)) { return -1 }
  return 0;
});
//ordena pelis por release date (menor a mayor)
export const realeaseDateOld = filmsCopy => {
  filmsCopy.sort((a, b) => {
    return parseInt(a.release_date) - parseInt(b.release_date)
  });
}

//ordena pelis por release date (mayor a menor)
export const lastestRealeaseDate = filmsCopy => filmsCopy.sort((a, b) => {
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

export const averageRtScore = sumRtScore /data.films.length;
console.log(averageRtScore);
//console.log(sumRtScore); 



// Funcion para obtener  todos los personajes y sus nombres 

export const charactersName = data.films.map(film => {
  return  film.people.map(character => {
     return character.name
  })
});
// console.log(charactersName)

//funcion para obtener descripcion general de personajes





// Funcion para obtener las locaciones y sus descripciones

export const locationName = data.films.map(element => {
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


//extraer la descripcion de peliculas(Alisson)

//extraer el nombre e imagen de los personajes (todos, sin excepcion)
export const getPeople = element => {
  return element.map(e => e.people.map(el => {
    const peopleImage = `<div><img src="${el.img}" />`;
    const peopleName = `<h3>${el.name.charAt(0).toUpperCase() + el.name.slice(1)}</h3></div>`;
    return peopleImage + peopleName;
  }));
}
//filtrar personajes por peliculas(y mostrar sus descripciones)
export const filterPeopleByMovies = (filmsCopy, movieName) => {
  filmsCopy.filter(e =>
    e.title === movieName).map(el => el.people.map(elem => {
      const cartoonName = `<div><h3>${elem.name}</h3>`;
      const cartoonImage = `<img src="${elem.img}" />`;
      const cartoonGender = `<p>Gender: ${elem.gender}</p>`;
      const cartoonAge = `<p>Age: ${elem.age}</p>`;
      const cartoonEyeColor = `<p>Eye color: ${elem.eye_color}</p>`;
      const cartoonHairColor = `<p>Hair color: ${elem.hair_color}</p>`;
      const cartoonSpecie = `<p>Specie:${elem.specie}</p></div>`;
      return cartoonName + cartoonImage + cartoonGender + cartoonAge + cartoonEyeColor + cartoonHairColor + cartoonSpecie + cartoonHairColor
    }
    ))
  }
//locaciones y descripciones (Alisson)

//vehiculos y susdescripciones (yo)
export const getVehiclesAndDescripcions = (filmsCopy, movieName) => {
  filmsCopy.filter(e =>
    e.title === movieName).map(el => el.vehicles.map(elem => {
      const vehiclesName = `<div><h3>${elem.name}</h3>`;
      const vehiclesImage = `<img src="${elem.img}" />`;
      const vehiclesDescription = `<p>Description: ${elem.description}</p>`;
      const vehiclesType = `<p>Type: ${elem.vehicle_class}</p>`;
      const vehiclesLength = `<p>Length: ${elem.length}</p>`;
      const vehiclesPilot = `<p>Pilot: ${elem.pilot.name}</p></div>`;
      return vehiclesName + vehiclesImage + vehiclesDescription + vehiclesType + vehiclesLength + vehiclesPilot
    }
    ))
}