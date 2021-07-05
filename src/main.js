/* tenga que ver con mostrar los datos en la pantalla. 
Con esto nos referimos básicamente a la interacción con el DOM. Operaciones como creación de nodos,
 registro de manejadores de eventos (event listeners o event handlers)*/

// import data from './data/lol/lol.js';
import pokemon from './data/pokemon/pokemon.js';

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

/*funcionalidad de cada elelemto*/


btnMenu.addEventListener("click", function(){
menu.classList.toggle("mostrar");
});

const subMenuBtn1 = document.querySelectorAll(".submenu1-btn1");
for(let i=0; i < subMenuBtn1.length; i++) {
    subMenuBtn1[i].addEventListener("click", function(){
        if(window.innerWidth < 1024){
            const subMenu = this.nextElementSibling;/* definir constante que me permita pasar al otro item*/
            const height = subMenu.scrollheight;
            
            if(subMenu.classList.contains("desplegar")){
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");
            }else{
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px";
            }
        }

    });
}
const subMenuBtn2 = document.querySelectorAll(".submenu1-btn2");
const subMenuBtn3 = document.querySelectorAll(".submenu1-btn3");
const subMenuBtn4 = document.querySelectorAll(".submenu1-btn4");

// import data from './data/rickandmorty/rickandmorty.js';/*recorrer toda la data que muestre todos los atletas , desde el js crearon un di document created element


