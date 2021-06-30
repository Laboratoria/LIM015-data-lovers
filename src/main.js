import data from './data/ghibli/ghibli.js'


/*data.films.forEach(function (elem) {
    console.log(elem.poster)
});*/

const boton = document.querySelector("#pelis");

boton.addEventListener("click", prueba);

function prueba() {
    data.films.forEach(function (elem) {
        const titulos = `<h2>${elem.title.toUpperCase()}</h2>`, descripciones = `<h3>Description:</h3><p>${elem.description}</p>`, directores = `<h3>Directors:</h3><p>${elem.director}</p>`, productores = `<h3>Productores:</h3><p>${elem.producer}</p>`, portada = `<img href=${elem.poster}/>`, fechaLanzamiento = `<h3>Release Date:</h3><p>${elem.release_date}</p>`, puntajeAudiencia = `${elem.release_date}`;
        document.querySelector("#name-pelis").innerHTML += titulos + descripciones + directores + productores + fechaLanzamiento + portada;
    });
}
