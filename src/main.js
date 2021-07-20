import data from './data/ghibli/ghibli.js'
import { setMoviesTitle, alphabeticOrder, alphabeticOrderLess, ratingScore, ratingScoreLess, realeaseDateOld, lastestRealeaseDate, getAverage, onSearch, compareIdMovie, descriptionMovie, showLocationsInformation, getPeople, getVehicles, filterPeople, filterVehicle } from "./data.js";

const navMovies = document.querySelector("#filmsimage");
const movieList = document.querySelector("#movieList");
const headerSection = document.querySelector("#logo");
const bioSection = document.querySelector("#bio");
const founderSection = document.querySelector("#founders");
const optionsFilmsandWeb = document.querySelector("#optionsFilmsandWeb");
const sectionNav = document.querySelector("#navigator");
const btnDropdown = document.querySelector("#dropbtn");
const dropDown = document.querySelector("#myDropdown");
const filmsCopy = [...data.films];
const getInputSearchMovie = document.querySelector("#InputSearchMovie");
const resultAverage = document.querySelector("#resultAverage");
//const moviesListComplete = document.querySelector("#sectionMovies");
const divsAboutCartoons = document.querySelector("#cartoons-container");
const divsAboutVehicles = document.querySelector("#vehicle-container");
const personalizedInfoOnTopic = document.querySelector("#infoInModal");
const locationsOfEachMovie = document.querySelector("#location-container")
const secondView = document.querySelector("#secondView");
const moviesInfoOnly = document.querySelector("#moviesInfoOnly");
const thirdView = document.querySelector("#thirdView");

//mostrar pelis en el orden de la data (second view)
navMovies.addEventListener("click", () => {
    //hide first view
    headerSection.style.display = "none";
    bioSection.style.display = "none";
    founderSection.style.display = "none";
    optionsFilmsandWeb.style.display = "none";
    sectionNav.style.display = "none";
    //show second view
    btnDropdown.style.display = "block";
    movieList.style.display = "flex";
    document.querySelector(".InputSearchMovie").style.display = "block";
    movieList.innerHTML = setMoviesTitle(data.films).join("");
    resultAverage.style.display = "block";
    resultAverage.innerHTML = `The average score according to films critics is ${getAverage(filmsCopy)} of 100`;
    document.querySelector(".home").style.display = "flex";
    thirdSlide();
    //agregado para que comience desde el inicio de la sgte pantalla
    startFromBeginning();
})
//ocultar el dopdrown y mostrar
btnDropdown.addEventListener("click", () => {
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
//funcion para input search
getInputSearchMovie.addEventListener("keyup", (e) => {
    const arrayOnSearch = onSearch(filmsCopy, e.target.value);
    movieList.innerHTML = setMoviesTitle(arrayOnSearch).join(" ");
    thirdSlide()
});


//mostrar tercera pantalla
function thirdSlide() {
    const eachMovie = document.querySelectorAll(".movieItem");
    eachMovie.forEach(element => element.addEventListener("click", () => {
        //agregado para que comience desde el inicio de la sgte pantalla
        startFromBeginning();
        thirdView.style.display = "flex"
        //moviesListComplete.style.display = "none"
        const movieId = element.getAttribute("id")
        const movieInformation = compareIdMovie(filmsCopy, movieId)
        moviesInfoOnly.innerHTML = descriptionMovie(movieInformation)
        moviesInfoOnly.style.display = "flex"
        const getPeopleResult = getPeople(movieInformation)[0];
        locationsOfEachMovie.innerHTML += showLocationsInformation(movieInformation)
        secondView.style.display = "none";

        getPeopleResult.forEach(element =>
            divsAboutCartoons.innerHTML += element
        )
        const getVehiclesResult = getVehicles(movieInformation)[0];
        for (let i = 0; i < getVehiclesResult.length; i++) {
            divsAboutVehicles.innerHTML += getVehiclesResult[i]
        }
        //movieId es el Id de la peli seleccionada
        console.log(movieId)
        //atrapando todos los divs de topics como personajes, vehiculos
        const getElementTopic = document.querySelectorAll(".divTopic");
        //al hacer click en el div con la clase divTopic
        getElementTopic.forEach(element => element.addEventListener("click", () => {
            //dataId es el Id del div de personaje
            const dataId = element.dataset.id;
            console.log(dataId);
            /*1.mostrar la funcion filterPeople*/
            const getTopicPeople = filterPeople(filmsCopy, movieId, dataId);
            console.log(getTopicPeople);
            console.log(personalizedInfoOnTopic);
            getTopicPeople.forEach(e =>
                personalizedInfoOnTopic.innerHTML = e
            )
            /*3.mostrar la funcion filterVehicle*/
            const getTopicVehicle = filterVehicle(filmsCopy, movieId, dataId);
            console.log(getTopicVehicle);
            console.log(getTopicVehicle.length);
            getTopicVehicle.forEach(e =>
                personalizedInfoOnTopic.innerHTML = e
            )
        }))
    }))
}
//que comience desde arriba
function startFromBeginning() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}
//boton de inicio (home)
document.querySelector(".home").addEventListener("click", () => location.reload());

