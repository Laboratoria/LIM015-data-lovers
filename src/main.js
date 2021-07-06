import data from './data/ghibli/ghibli.js'

import { setMoviesTitle, alphabeticOrder, alphabeticOrderLess, ratingScore} from "./data.js";

const navMovies = document.querySelector("#btnPelisStart");
const movieList = document.querySelector("#movieList");
//agregue nuevas constantes
const headerSection = document.querySelector("#logo");
const bioSection = document.querySelector("#bio");
const founderSection = document.querySelector("#founders");
const btnDropdown = document.querySelector("#dropbtn");
const dropDown = document.querySelector("#myDropdown");
//const de Alisson
const filmsCopy = [...data.films];
const getInputSearchMovie = document.querySelector("#InputSearchMovie");

navMovies.addEventListener("click", () =>
{
    headerSection.style.display = "none";
    bioSection.style.display = "none";
    founderSection.style.display = "none";
    movieList.innerHTML = setMoviesTitle(data.films);
})

btnDropdown.addEventListener("click", ()=>{
dropDown.classList.toggle("show")
})


/*

function renderMovies(content) {
   // movieList.innerHTML = "";
    movieList.innerHTML = content;
}


navMovies.addEventListener("click", function () {
    const films = data.films;
    //join es para eliminar la coma
    const moviesListString = setMoviesTitle(films).join("");
    //const filmsCopy = [...data.films];
    renderMovies(moviesListString);
})

filmsSelector.onchange = function (e) {
    const selectedFilter = e.target.value;
    if (selectedFilter === "alphabeticallyMoreAndLess") {
        const sortAlphabetically = alphabeticOrder(data.films);
        const moviesListString = setMoviesTitle(sortAlphabetically).join("");

        renderMovies(moviesListString);
    }
    if (selectedFilter === "alphabeticallyLessAndMore") {
        const sortAlphabeticallyLess = alphabeticOrderLess(data.films);
        const moviesLessString = setMoviesTitle(sortAlphabeticallyLess).join("");

        renderMovies(moviesLessString);
    }
    if (selectedFilter === "rtScoreOrder") {
        const sortRatingScore = ratingScore(data.films);
        const filmsRt = setMoviesTitle(sortRatingScore).join("");

        renderMovies(filmsRt);
    }
}



//filterPeopleByMoviesI(data.films, getInputSearchMovie.value)
*/