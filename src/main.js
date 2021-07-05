import data from './data/pokemon/pokemon.js';
//
import { filterData } from './data.js';

/*buscador*/

const SEARCHTEXT = document.getElementById("searchtext");
const BTNSEARCH = document.getElementById("btn");

/*asignando un evento*/
BTNSEARCH.addEventListener("click", (e) => {
    e.preventDefault()
 

});

console.log(SEARCHTEXT);

/*menu desplegable*/

const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");

/*funcionalidad de cada elelemto*///


btnMenu.addEventListener("click", function(){
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

//la funcion onload espera que cargue todo DOM
window.onload = function() {

    let pok = filterData(data.pokemon, ''); //ingresamos a la data
    showAllPokemon(pok); //llamamos la funcnion showAllPokemon

    //funcion para el boton de la ficha tecnica
    document.getElementById("btn-return").addEventListener("click", () => {
        document.getElementById("numpokemon").style.display = "block";
        document.getElementById("DatasheetPokemon").style.display = "none";
    });
}

function showAllPokemon(data) {
    var parent = document.getElementById('numpokemon'); // Recuperar tag padre

    for (let i = 0; i < data.length; i++) {
        //variables que almacena los datos que queremos que se muestre
        let url = data[i].img;
        let name = data[i].name;
        let number = data[i].num;

        // insertando los obj con html dinamico
        // html = html + '<figure class="photoPokemon">';
        // html = html + '<p class="num"">' + number + '</p>';
        // html = html + '<img src="' + url + '"/>';
        // html = html + '<figcaption>' + name + ' <a href="#" onclick="showInfo(\'' + number + '\');return false;">Ver +</a></figcaption>';
        // html = html + '</figure>';

        //etiqueta padre figure
        var elementFigure = document.createElement("figure"); // Crear tag Figure
        elementFigure.classList.add("photoPokemon"); // Agregando una clase a tag Figure

        var elementP = document.createElement("p"); //Crear tag P
        elementP.classList.add("num"); // Agregando una clase a tag P
        elementP.textContent = number; // Agregando contenido a tag P
        elementFigure.appendChild(elementP); //Agregando tag al padre Figure

        var elementimg = document.createElement("img");
        elementimg.src = url;
        elementFigure.appendChild(elementimg);

        var elemetfigcaption = document.createElement("figcaption");
        elemetfigcaption.textContent = name;
        elementFigure.appendChild(elemetfigcaption);

        var elementA = document.createElement("a");
        // elementA.classlist.add("show")        elementA.href = "#";
        elementA.textContent = " Ver +";

        //funcnion para  ver +
        elementA.addEventListener("click", () => {

            showInfo(number);
        });
        elemetfigcaption.appendChild(elementA);


        parent.appendChild(elementFigure); //Agregando tag al padre Article
    }
}

// funcion para el boton ver +
function showInfo(numPokemon) {
    console.table(numPokemon);
    //alert("hola " + name);
    document.getElementById("numpokemon").style.display = "none";
    document.getElementById("DatasheetPokemon").style.display = "block";
}

