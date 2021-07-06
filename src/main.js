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

//mostrar pelis en el orden de la data
navMovies.addEventListener("click", () =>
{
    headerSection.style.display = "none";
    bioSection.style.display = "none";
    founderSection.style.display = "none";
    btnDropdown.style.display = "block";
    document.querySelector(".InputSearchMovie").style.display = "block";
    movieList.innerHTML = setMoviesTitle(data.films).join("");
})
//ocultar el dopdrown y mostrar
btnDropdown.addEventListener("click", ()=>{
dropDown.classList.toggle("show")
})
