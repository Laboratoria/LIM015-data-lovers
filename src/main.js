import pokemon from './data/pokemon/pokemon.js';
import { lookinfopokemon } from './data.js';

const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");

btnMenu.addEventListener("click", function() {
    menu.classList.toggle("mostrar");
});

const subMenuBtn1 = document.querySelectorAll(".submenu1-btn1");
for (let i = 0; i < subMenuBtn1.length; i++) {
    subMenuBtn1[i].addEventListener("click", function() {
        if (window.innerWidth < 1024) {
            const subMenu = this.nextElementSibling; /* definir constante que me permita pasar al otro item*/
            const height = subMenu.scrollheight;
            if (subMenu.classList.contains("desplegar")) {
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");
            } else {
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px";
            }
        }

    });
}
const subMenuBtn2 = document.querySelectorAll(".submenu1-btn2");
const subMenuBtn3 = document.querySelectorAll(".submenu1-btn3");
const subMenuBtn4 = document.querySelectorAll(".submenu1-btn4");

window.onload = function() {
    let pok = lookinfopokemon(pokemon.pokemon);
    //ingresamos al objeto y a la funcion y almacenamos el  resultado en una variable
    document.getElementById("numpokemon").innerHTML = pok;
}

// funcion para el boton ver +
document.getElementById("btn-show").addEventListener("click", () => {
    document.getElementById("btn-show").style.display = "none";
    document.getElementById("DatasheetPokemon").style.display = "block";
});

//funcion para el boton de la ficha tecnica
document.getElementById("btn-return").addEventListener("click", () => {
    document.getElementById("btn-show").style.display = "block";
    document.getElementById("DatasheetPokemon").style.display = "none";
});