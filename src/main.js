import data from './data/ghibli/ghibli.js'

//console.log(data.films["people"]);

const boton = document.querySelector("#pelis");
boton.addEventListener("click", prueba);

function prueba() {
    data.films.forEach(function (elem) {
        const peliculas = document.querySelector("#name-pelis");
        const botonPelis = document.createElement("button");
        peliculas.appendChild(botonPelis);
        botonPelis.innerHTML += `<div><img src="${elem.poster}"/><h2>${elem.title.toUpperCase()}</h2></div>`;

        const descripcionesPelis = document.createElement("div");
        botonPelis.appendChild(descripcionesPelis);
        botonPelis.addEventListener("click", function () {
            descripcionesPelis.innerHTML += `<h3>Description:</h3><p>${elem.description}</p><h3>Directors:</h3><p>${elem.director}</p><h3>Release Date:</h3><p>${elem.release_date}</p>` + `<div>${elem.people}</div>`;//mejorar
        })
        });
}