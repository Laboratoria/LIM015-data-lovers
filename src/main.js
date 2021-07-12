import data from './data/pokemon/pokemon.js';
import { filterData } from './data.js';

/*buscador*/
const SEARCHTEXT = document.getElementById("searchtext");
const BTNSEARCH = document.getElementById("btn");

/*asignando un evento*/
// BTNSEARCH.addEventListener("click", (e) => {
//     e.preventDefault();
//     const textNumber = SEARCHTEXT.value; /*guardando mi texto o numero*/
//     const buscarPoke = data.pokemon.filter((nombre, numero) => {
//         return nombre.numero.map(busqueda);
//     });

   // limpiarContenido(document.getElementById("listaPokemon"));
    //mostrarPokemones(buscarPoke);
//});
       

/*menu desplegable*/
const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");

/*funcionalidad de cada elelemto*/
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


//la funcion onload 
window.onload = function() {

    let pokemones = filterData(data.pokemon, ''); //ingresamos a la data
    mostrarPokemones(pokemones); //llamamos la funcnion mostrarPokemones
}

function mostrarPokemones(data) {
    const listaPokemones = document.getElementById('listaPokemon'); // Recuperar tag padre

    for (let i = 0; i < data.length; i++) {
        //variables que almacena los datos que queremos que se muestre
        let imgPok = data[i].img;
        let nombre = data[i].name;
        let numero = data[i].num;
        let types = data[i].type;
        let vertipo;

        for (let index = 0; index < types.length; index++) {
             vertipo = types[index];
            
        }
        //etiqueta padre figure
        let etiquetaFigure = document.createElement("figure"); // Crear tag Figure
        etiquetaFigure.classList.add("fotoPokemon"); // Agregando una clase a tag Figure

        let numeroPok = document.createElement("p"); //Crear tag P
        numeroPok.classList.add("num"); // Agregando una clase a tag P
        numeroPok.textContent = "# " + numero; // Agregando contenido a tag P
        etiquetaFigure.appendChild(numeroPok); //Agregando tag al padre Figure

        let imagenPok = document.createElement("img");
        imagenPok.src = imgPok;
        etiquetaFigure.appendChild(imagenPok);

        let nombrePok = document.createElement("figcaption");
        nombrePok.textContent = nombre;
        etiquetaFigure.appendChild(nombrePok);

        let elementA = document.createElement("a");
        elementA.classList.add("show");
        //elementA.href = "#";
        elementA.classList.add("verMas");
        elementA.textContent = " Ver +";
        elementA.addEventListener("click", () => {
            verFichaTecnica(data[i]);
        });
        //nombrePok.appendChild(etiquetaVermas);

        for (let tipo of types) {
            let textType = document.createElement("p");
            textType.classList.add("textType");
            textType.textContent = tipo;
            nombrePok.appendChild(textType);

        }

        listaPokemones.appendChild(etiquetaFigure); //Agregando tag al padre Article
    }
}

// funcion para mostrar pokemones por tipo
const selectTypes = document.querySelectorAll(".menu__link3");

for (let i = 0; i < selectTypes.length; i++) {

    selectTypes[i].addEventListener("click", (e) => {

        const oneType = e.target.id;

        const poke = data.pokemon.filter(elemento => {
            return elemento.type.includes(oneType);
        });

        limpiarContenido(document.getElementById("listaPokemon"));
        mostrarPokemones(poke);

    });
}

// funcion para el boton ver +

function verFichaTecnica(datapokemon) {
    console.log(datapokemon.resistant);

    document.getElementById("listaPokemon").style.display = "none";
    document.getElementById("fichaTecnicaPokemon").style.display = "block";

    limpiarContenido(document.getElementById("fichaTecnicaPokemon"));

    const fichaTecnica = document.getElementById("fichaTecnicaPokemon");

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

    // caracteristicas del pokemon
    let sectionCP = document.createElement("section");
    sectionCP.classList.add("sectionCP");
    fichaTecnica.appendChild(sectionCP);

    let h2Altura = document.createElement("h2");
    h2Altura.textContent = "Altura: " + datapokemon.size.height;
    sectionCP.appendChild(h2Altura);

    let h2Peso = document.createElement("h2");
    h2Peso.textContent = "Peso: " + datapokemon.size.weight;
    sectionCP.appendChild(h2Peso);

    let h2Huevo = document.createElement("h2");
    h2Huevo.textContent = "Huevo: " + datapokemon.egg;
    sectionCP.appendChild(h2Huevo);

    let h2Rareza = document.createElement("h2");
    h2Rareza.textContent = "Rareza de pokemon: " + datapokemon['pokemon-rarity'];
    sectionCP.appendChild(h2Rareza);

    // Estadisticas del pokemon
    let sectionE = document.createElement("section");
    sectionE.classList.add("sectionE");
    sectionE.textContent = "Estadisticas " + datapokemon.name;
    fichaTecnica.appendChild(sectionE);

    let divE = document.createElement("div");
    divE.classList.add("divE");
    fichaTecnica.appendChild(divE);

    let progressE = document.createElement("progress");
    progressE.classList.add("progressE");
    progressE.textContent = "Base ataque " + datapokemon.stats['base-attack'];
    divE.appendChild(progressE);


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

// implementando modal
document.getElementsByClassName("modal_cerrar")[0].addEventListener("click", function() {
    document.getElementsByClassName("fondo_transparente")[0].style.display = "none";
});

function buscadorpokemon() {
    let busqueda= document.getElementById("searchtext").value;
    let pokemons;
    if (isNaN(busqueda)){
        pokemons = data.pokemon.filter((pokemon) => pokemon.name == busqueda);
        
    }else {
        pokemons = data.pokemon.filter((pokemon) => pokemon.num == busqueda);  
    }

  console.table(pokemons);
  limpiarContenidoBuscador();
  mostrarPokemones(pokemons);
}


function limpiarContenidoBuscador() {
    document.getElementById("listaPokemon").innerHTML="";
}
document.getElementById("btn").addEventListener("click", function () {
  buscadorpokemon();
});

function buscarPorRegion(region){

   let pokemons = data.pokemon.filter((pokemon) => pokemon.generation.name == region);
    console.table(pokemons);
  limpiarContenidoBuscador();
  mostrarPokemones(pokemons);
}

document.getElementById("region_johto").addEventListener("click", function () {
    buscarPorRegion("johto");
});

document.getElementById("region_kanto").addEventListener("click", function () {
    buscarPorRegion("kanto");
});