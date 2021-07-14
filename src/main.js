import data from './data/pokemon/pokemon.js';
import { filtrarData, searchPokemon, ordenarPokemon } from './data.js';

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

    let pokemones = filtrarData(data.pokemon, ''); //ingresamos a la data
    mostrarPokemones(pokemones); //llamamos la funcnion mostrarPokemones
    document.querySelector('#txtBuscar').value = ""; // limpiar la caja de busqueda    
}


function mostrarPokemones(data) {
    const listaPokemones = document.getElementById('listaPokemon'); // Recuperar tag padre

    for (let i = 0; i < data.length; i++) {
        //variables que almacena los datos que queremos que se muestre
        let imgPok = data[i].img;
        let nombre = data[i].name;
        let numero = data[i].num;
        // let types = data[i].type;

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

        let etiquetaVermas = document.createElement("a");
        //etiquetaVermas.href = "#";
        etiquetaVermas.classList.add("verMas");
        etiquetaVermas.textContent = " Ver +";
        etiquetaVermas.addEventListener("click", (e) => {
            e.preventDefault(); //dejara de mostrarse# al hacer click en la url
            verFichaTecnica(data[i]);
        });
        nombrePok.appendChild(etiquetaVermas);

        let textType = document.createElement("p");
        textType.classList.add("textType");
        nombrePok.appendChild(textType);

        const tipoPokemon = data[i].type.map(tipo => {
            // console.log(tipo);
            return `<img src="./img/pokemonType/${tipo}.png" width="30px" />`;
        });
        textType.innerHTML = `${tipoPokemon.join("")}`;

        listaPokemones.appendChild(etiquetaFigure); //Agregando tag al padre Article
    }
}

// funcion para mostrar pokemones por tipo
const seleccionarTipo = document.querySelectorAll(".menu__link3");

for (let i = 0; i < seleccionarTipo.length; i++) {

    seleccionarTipo[i].addEventListener("click", (e) => {

        const tipo = e.target.id;

        const filtrarPokemon = filtrarData(data.pokemon, tipo); //le pasamos el argumento

        limpiarContenido(document.getElementById("listaPokemon"));
        mostrarPokemones(filtrarPokemon);

    });
}

//funcion para pora ordednar A-Z y Z-A
const ordenarNombres = document.querySelectorAll(".menu__link1");

for (let i = 0; i < ordenarNombres.length; i++) {

    ordenarNombres[i].addEventListener("click", (e) => {
        const ordAsc = e.target.id;

        const ordenarPok = ordenarPokemon(data.pokemon, 'name', ordAsc);

        limpiarContenido(document.getElementById("listaPokemon"));
        mostrarPokemones(ordenarPok);

    });
}


/* funcnion para buscar un pokemon por nombre o numero*/
const btnBuscar = document.querySelector('#btnBuscar');
btnBuscar.addEventListener('click', () => {
    const nombrePokemon = document.querySelector('#txtBuscar').value.toLowerCase();
    const buscarPokemon = searchPokemon(data.pokemon, nombrePokemon);

    limpiarContenido(document.getElementById("listaPokemon"));
    mostrarPokemones(buscarPokemon);
});

// funcion para el boton ver +
function verFichaTecnica(datapokemon) {
    // console.log(datapokemon.resistant);

    document.getElementById("listaPokemon").style.display = "none";
    document.getElementById("fichaTecnicaPokemon").style.display = "block";
    limpiarContenido(document.getElementById("fichaTecnicaPokemon"));

    const fichaTecnica = document.getElementById("fichaTecnicaPokemon");

    const resistenciaHtml = datapokemon.resistant.map(resistencia => {
        // let liHtml = '';

        // switch (resistencia) {
        //     case 'water':
        //         liHtml = `<li><img src="./img/pokemonType/water.png" width="30px" /></li>`;
        //         break;
        //     case 'electric':
        //         liHtml = `<li><img src="./img/pokemonType/electric.png" width="30px" /></li>`;
        //         break;

        //     default:
        //         liHtml = `<li><img src="./img/pokemonType/no-image.png" width="30px" /></li>`;
        //         break;
        // }

        // return liHtml;
        return `<li><img src="./img/pokemonType/${resistencia}.png" width="30px" /></li>`;
    });

    const debilidadHtml = datapokemon.weaknesses.map(debilidad => {
        return `<li><img src="./img/pokemonType/${debilidad}.png" width="30px" /></li>`;
    });

    const movimientoRapidoHtml = datapokemon['quick-move'].map(movimiento => {

        return `<li>${movimiento.name}</li>
        <li>${movimiento.type}</li>
        <li>${movimiento["base-damage"]}</li>
        <li>${movimiento["energy"]}</li>
        <li>${movimiento["move-duration-seg"]}</li><br>`;
    });

    const ataqueEspecialHtml = datapokemon['special-attack'].map(ataque => {

        return `<li>${ataque.name}</li>
        <li>${ataque.type}</li>
        <li>${ataque["base-damage"]}</li>
        <li>${ataque.energy}</li>
        <li>${ataque["move-duration-seg"]}</li><br>`;

    });

    fichaTecnica.innerHTML =
        `<section class="fichaT">
        <p id="imgFicha" class=""><img src="${datapokemon.img}" /></p>
        <p id="nombreFicha" class="" >${datapokemon.name}</p>
        <p id="acercaFicha" class="">${datapokemon.about}</p>
        
            <table class="tablaFichaT" width="100%">

                <tr>
                    <td width="33%"><img src="./img/height.png" width="70px"><span>Altuta: ${datapokemon.size.height}</span></td>
                    <td width="33%"><img src="./img/egg.png" width="70px"><span>Huevo: ${datapokemon.egg}</span></td>
                    <td width="34%"><img src="./img/weight2.png" width="70px"><span>Peso: ${datapokemon.size.weight}</span></td>
                </tr>
            
            </table>
            
            <table class="tablaFichaT" width="100%">
                <tr>
                    <td width="50%">
                        <span>Resistente</span>
                        <ul>
                            ${resistenciaHtml.join("")}
                        </ul>
                    </td>

                    <td width="50%">
                        <span>Debilidad</span>
                        <ul>
                            ${debilidadHtml.join("")}
                        </ul>
                    </td>
                </tr>
            </table>

            <table class="tablaFichaT" width="100%">
            <tr>
            
            <td> <span>Movimiento Rapido</span> </td>
            <td> 
            <ul> ${movimientoRapidoHtml.join("")} </ul>
        
            </td>
            </tr>
            </table>
        
            <table class="tablaFichaT" width="100%">
            <tr>
            <td> <span>Ataque Especial</span></td>
            <td> <ul> ${ataqueEspecialHtml.join("")}</ul></td> 



            </tr>

             </table>


        </section>`;


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
// document.getElementsByClassName("modal_cerrar")[0].addEventListener("click", function() {
//     document.getElementsByClassName("fondo_transparente")[0].style.display = "none";
// });