import data from './data/pokemon/pokemon.js';
//
import { filterData } from './data.js';

/*buscador*/

const SEARCHTEXT = document.getElementById("searchtext");
const BTNSEARCH = document.getElementById("btn");

/*asignando un evento*/

BTNSEARCH.addEventListener("click", (e) =>{
    e.preventDefault()


    const textNumber = SEARCHTEXT.value; /*guardando mi texto o numero*/

});
       

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

    let pokemones = filterData(data.pokemon, ''); //ingresamos a la data
    mostrarPokemones(pokemones); //llamamos la funcnion mostrarPokemones

}

function mostrarPokemones(data) {
    const parent = document.getElementById('listaPokemon'); // Recuperar tag padre

    for (let i = 0; i < data.length; i++) {
        //variables que almacena los datos que queremos que se muestre
        let url = data[i].img;
        let name = data[i].name;
        let number = data[i].num;
        let types = data[i].type;
    /*let vertipo;

        for (let index = 0; index < type.length; index++) {
             vertipo = type[index];
            
        }
*/
        //etiqueta padre figure
        let elementFigure = document.createElement("figure"); // Crear tag Figure
        elementFigure.classList.add("fotoPokemon"); // Agregando una clase a tag Figure

        let elementP = document.createElement("p"); //Crear tag P
        elementP.classList.add("num"); // Agregando una clase a tag P
        elementP.textContent = number; // Agregando contenido a tag P
        elementFigure.appendChild(elementP); //Agregando tag al padre Figure

        let elementimg = document.createElement("img");
        elementimg.src = url;
        elementFigure.appendChild(elementimg);

        let elemetfigcaption = document.createElement("figcaption");
        elemetfigcaption.textContent = name;
        elementFigure.appendChild(elemetfigcaption);

        let elementA = document.createElement("a");
        elementA.classList.add("show");
        //elementA.href = "#";
        elementA.classList.add("verMas");
        elementA.textContent = " Ver +";
        elementA.addEventListener("click", () => {
            showInfo(data[i]); 
            verFichaTecnica(data[i]);
        
        });
        elemetfigcaption.appendChild(elementA);
    

        for (let tipo of  types) {
        let textType = document.createElement("p");
        textType.classList.add("textType");
        textType.textContent = tipo;
        elemetfigcaption.appendChild(textType);
            
        }

        
        parent.appendChild(elementFigure); //Agregando tag al padre Article
    }
}

/* manipulacion del menu filtrado por tipo*/ 

const selectTypes = document.querySelectorAll(".menu__link3"); 

for (let i = 0; i < selectTypes.length; i++) {
    
    selectTypes[i].addEventListener("click", (e) => {
       
       const oneType = e.target.id;

       /*console.log(oneType)*/

       const poke = data.pokemon.filter(elemento => {
        return elemento.type.includes(oneType);
       });

       limpiarContenido(document.getElementById("listaPokemon"));

       //console.log(poke);
       mostrarPokemones(poke);
      

    //.forEach(type=> console.log(type));

       /* if (oneType == data.pokemon.includes(elemento)) { 
            return true;
     } else{
         return false;
     }    */ 
});
}


/* manipulacion del menu funcion para seleccionar region*/

const regionPoke = document.querySelectorAll(".menu__link2"); 

for (let i = 0; i < regionPoke.length; i++) {
    
    regionPoke[i].addEventListener("click", (e) => {
       
       const captureRegion = e.target.id;

       const mostrarRegion = data.pokemon.filter(elemento => {
        
       });

       /*limpiarContenido(document.getElementById("listaPokemon"));

       //console.log(poke);
       mostrarPokemones(mostrarRegion);*/


});
}



/* manipulacion del menu funcion para el ordenado de datos*/

const ordenarNombres = document.querySelectorAll(".menu__link1"); 

for (let i = 0; i < ordenarNombres.length; i++) {
    
    ordenarNombres[i].addEventListener("click", (e) => {
       
       const ascDesc = e.target.id;
       

      const pokeAscDesc = data.pokemon.sort((a,b) => {
        let aNombre = a.name;
        let bNombre = b.name;

          if(ascDesc == "creciente") {

            if (aNombre > bNombre) {
                return 1;
            }else if (aNombre < bNombre) {
                return -1;
            } else{
                return 0;
            }
          } else if(ascDesc == "decreciente") { 
            if (aNombre < bNombre) {
                return 1;
            } else if (aNombre > bNombre) {
                return -1;
            } else{
                return 0;
            }
          }
       });

       limpiarContenido(document.getElementById("listaPokemon"));

       mostrarPokemones(pokeAscDesc);
    });
}



// funcion para el boton ver +

function verFichaTecnica(datapokemon) {
    console.log(datapokemon);
    // console.log(datapokemon.resistant);
    // datapokemon.resistant.forEach(r => {
    //     console.log(r);
    // });

    document.getElementById("listaPokemon").style.display = "none";
    document.getElementById("fichaTecnicaPokemon").style.display = "block";

    limpiarContenido(document.getElementById("fichaTecnicaPokemon"));

    const fichaTecnica = document.getElementById('fichaTecnicaPokemon');

    let datosPokemon = document.createElement("section");
    datosPokemon.classList.add("datosPokemon");
    fichaTecnica.appendChild(datosPokemon);

    let nombrePokemon = document.createElement("h2");
    nombrePokemon.classList.add("nombrePokemon");
    nombrePokemon.textContent = datapokemon.name;
    datosPokemon.appendChild(nombrePokemon);

    let numeroPokemon = document.createElement("h2");
    numeroPokemon.textContent = datapokemon.num;
    numeroPokemon.classList.add("numeroPokemon");
    datosPokemon.appendChild(numeroPokemon);

    let imagenPokemon = document.createElement("section");
    imagenPokemon.classList.add("imagenPokemon");
    fichaTecnica.appendChild(imagenPokemon);

    let imagen = document.createElement("img");
    imagen.src = datapokemon.img;
    imagenPokemon.appendChild(imagen);



    let botonSalir = document.createElement("button");
    botonSalir.textContent = "Salir";
    botonSalir.classList.add("btnSalir");
    botonSalir.addEventListener("click", () => {
        document.getElementById("listaPokemon").style.display = "block";
        document.getElementById("fichaTecnicaPokemon").style.display = "none";
    });
    fichaTecnica.appendChild(botonSalir);
}

// limpiar contenidos
function limpiarContenido(limpiar) {
    while (limpiar.firstChild) {
        limpiar.removeChild(limpiar.firstChild);
    }
}