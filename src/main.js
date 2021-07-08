import data from './data/ghibli/ghibli.js'

import { setMoviesTitle, alphabeticOrder, alphabeticOrderLess, ratingScore, ratingScoreLess, realeaseDateOld, lastestRealeaseDate} from "./data.js";

const navMovies = document.querySelector("#btnPelisStart");
const movieList = document.querySelector("#movieList");
const headerSection = document.querySelector("#logo");
const bioSection = document.querySelector("#bio");
const founderSection = document.querySelector("#founders");
const btnDropdown = document.querySelector("#dropbtn");
const dropDown = document.querySelector("#myDropdown");
const filmsCopy = [...data.films];
//const filmBox= document.querySelector(".movieItem");
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
//reemplazar con los filtros el orden de las pelis
dropDown.addEventListener("change",
    (e) => {
        if(e.target.value === "NameOrderMore"){
            movieList.innerHTML = setMoviesTitle(alphabeticOrder(filmsCopy)).join("")
        }
        if (e.target.value === "NameOrderLess"){
            movieList.innerHTML = setMoviesTitle(alphabeticOrderLess(filmsCopy)).join("")
        }
        if (e.target.value === "RtScoreOrderMore") {
            movieList.innerHTML = setMoviesTitle(ratingScore(filmsCopy)).join("")
        }
        if (e.target.value === "RtScoreOrderLess") { movieList.innerHTML = setMoviesTitle(ratingScoreLess(filmsCopy)).join("") }
        if (e.target.value === "RdOrderMore") { movieList.innerHTML = setMoviesTitle(lastestRealeaseDate(filmsCopy)).join("") }
        if (e.target.value === "RdOrderLess"){ movieList.innerHTML = setMoviesTitle(realeaseDateOld(filmsCopy)).join("")}
})


//IGNORAR LAS LINEAS SGTES, ES DE PRUEBA
//registra la tecla
console.log(getInputSearchMovie)

getInputSearchMovie.addEventListener("keyup", function (e) {
    e.target.value;
    for (let i = 2; i < document.getElementsByTagName("h2").length; i++){
        document.getElementsByTagName("h2")[i].textContent}
})


for (let i = 2; i < document.getElementsByTagName("h2").length; i++){console.log(document.getElementsByTagName("h2")[i].textContent)}

console.log(data.films.map(e=>e.title))