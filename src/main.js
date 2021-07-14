import data from './data/ghibli/ghibli.js'

import { setMoviesTitle, alphabeticOrder, alphabeticOrderLess, ratingScore, ratingScoreLess, realeaseDateOld, lastestRealeaseDate , getAverage , onSearch, compareIdMovie} from "./data.js";

const navMovies = document.querySelector("#btnPelisStart");
const movieList = document.querySelector("#movieList");
const headerSection = document.querySelector("#logo");
const bioSection = document.querySelector("#bio");
const founderSection = document.querySelector("#founders");
const btnDropdown = document.querySelector("#dropbtn");
const dropDown = document.querySelector("#myDropdown");
const filmsCopy = [...data.films];
const getInputSearchMovie = document.querySelector("#InputSearchMovie");
const resultAverage = document.querySelector("#resultAverage");
const moviesListComplete = document.querySelector("#sectionMovies");

//mostrar pelis en el orden de la data
navMovies.addEventListener("click", () => {
    headerSection.style.display = "none";
    bioSection.style.display = "none";
    founderSection.style.display = "none";
    btnDropdown.style.display = "block";
    document.querySelector(".InputSearchMovie").style.display = "block";
    movieList.innerHTML = setMoviesTitle(data.films).join("");
    thirdSlide();
})
//ocultar el dopdrown y mostrar
btnDropdown.addEventListener("click", ()=>{
dropDown.classList.toggle("show")
})
//reemplazar con los filtros el orden de las pelis
dropDown.addEventListener("change",
    (e) => {
        if (e.target.value === "NameOrderMore") {
            movieList.innerHTML = setMoviesTitle(alphabeticOrder(filmsCopy)).join("")
        }
        if (e.target.value === "NameOrderLess") {
            movieList.innerHTML = setMoviesTitle(alphabeticOrderLess(filmsCopy)).join("")
        }
        if (e.target.value === "RtScoreOrderMore") {
            movieList.innerHTML = setMoviesTitle(ratingScore(filmsCopy)).join("")
        }
        if (e.target.value === "RtScoreOrderLess") { movieList.innerHTML = setMoviesTitle(ratingScoreLess(filmsCopy)).join("") }
        if (e.target.value === "RdOrderMore") { movieList.innerHTML = setMoviesTitle(lastestRealeaseDate(filmsCopy)).join("") }
        if (e.target.value === "RdOrderLess") { movieList.innerHTML = setMoviesTitle(realeaseDateOld(filmsCopy)).join("") }
        thirdSlide();
})
//promedio de puntaje
resultAverage.innerHTML = `The average ${getAverage(filmsCopy)}`
//funcion para input search
getInputSearchMovie.addEventListener("keyup" , (e) => {
    const arrayOnSearch = onSearch(filmsCopy, e.target.value);
    movieList.innerHTML = setMoviesTitle(arrayOnSearch).join(" ");
});
//mostrar tercera pantalla
function thirdSlide() {
    const eachMovie = document.querySelectorAll(".movieItem");
    eachMovie.forEach(element => element.addEventListener("click", () => {
    moviesListComplete.style.display = "none";
    const movieId = element.getAttribute("id");
    console.log(compareIdMovie(data.films, movieId)[0].title)
}))
}

const divsThirdSlice = document.querySelectorAll(".informationAboutMovie");
console.log(divsThirdSlice.textContent);
// divsThirdSlice[0].innerText = "hola Mundo"
for (let i = 0; i < divsThirdSlice.length; i++){divsThirdSlice[i].innerText = "Hola"}