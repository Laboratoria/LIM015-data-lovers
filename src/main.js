import data from './data/pokemon/pokemon.js';
import { filtrarData, searchPokemon, ordenarPokemon, calculoEstadistico, calculoEstadPeso, calcularEstadVida, buscarPorRegion } from './data.js';

// Importando Graficos a usar
google.charts.load('current', { packages: ['corechart', 'bar'] });

/*menu desplegable*/
const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");

/*funcionalidad de cada elelemto*/
btnMenu.addEventListener("click", function() {
    menu.classList.toggle("mostrar");
});

window.onload = function() {

    let pokemones = filtrarData(data.pokemon, ''); //ingresamos a la data
    mostrarPokemones(pokemones); //llamamos la funcnion mostrarPokemones
    document.querySelector('#txtBuscar').value = ""; // limpiar la caja de busqueda    
}

export function mostrarPokemones(data) {
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

        document.getElementById("listaPokemon").style.display = "block";
        document.querySelector(".estadisticas").style.display = "none";
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

        document.getElementById("listaPokemon").style.display = "block";
        document.querySelector(".estadisticas").style.display = "none";

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


// funcnion para mostrar las estadisticas

const estadisticas = document.querySelector(".menu__link4");

estadisticas.addEventListener("click", (e) => {
    e.preventDefault();

    document.getElementById("listaPokemon").style.display = "none";
    document.querySelector(".estadisticas").style.display = "block";
    limpiarContenido(document.querySelector(".estadisticas"));

    const contenedorEstad = document.querySelector(".estadisticas");

    const estadisticaH1 = document.createElement("h1");
    estadisticaH1.classList.add("estadisticaH1");
    estadisticaH1.textContent = "RANKING DE LOS POKEMONES ";
    contenedorEstad.appendChild(estadisticaH1);


    const section = document.createElement("section");
    section.classList.add("section");
    contenedorEstad.appendChild(section);

    const estCp = document.createElement("button");
    estCp.classList.add("estCp");
    estCp.textContent = "PUNTO DE COMBATE";
    section.appendChild(estCp);

    const estPeso = document.createElement("button");
    estPeso.classList.add("estPeso");
    estPeso.textContent = "PESO";
    section.appendChild(estPeso);

    const estHp = document.createElement("button");
    estHp.classList.add("estHp");
    estHp.textContent = "NIVEL DE VIDA";
    section.appendChild(estHp);

    const estResultado = document.createElement("div");
    estResultado.classList.add("estResultado");
    contenedorEstad.appendChild(estResultado);

    // funcion para top 10 segun puntos de combate
    estCp.addEventListener("click", () => {
        // console.log(maximoValor(data));
        const top10 = calculoEstadistico(data.pokemon);
        // console.log(top10);

        drawBarChart(top10, estResultado, 'PUNTOS DE COMBATE'); //argumentos
    });

    // funcion para top 10 segun el peso
    estPeso.addEventListener("click", () => {
        // console.log(maximoValor(data));
        const top10 = calculoEstadPeso(data.pokemon);
        // console.log(top10);

        drawBarChart(top10, estResultado, 'MAS PESADOS'); //argumentos
    });
    // funcion de los top de con mayor nivel  de Vida
    estHp.addEventListener("click", () => {
        const top10 = calcularEstadVida(data.pokemon);

        drawBarChart(top10, estResultado, 'NIVEL DE VIDA');
    })
});

// implementacion de la funcion chart
function drawBarChart(pokemon10, elemento, titulo) {

    let data = google.visualization.arrayToDataTable(pokemon10);

    let options = {
        title: `TOP 10 SEGUN ${titulo}`,
        width: 600,
        height: 400,
        hAxis: {
            title: titulo.toLowerCase(),
            minValue: 0
        },
        vAxis: {
            title: 'pokemon'
        }
    };

    let chart = new google.visualization.BarChart(elemento);

    chart.draw(data, options);

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

/*function buscarPorRegion(region) {

    let pokemons = data.pokemon.filter((pokemon) => pokemon.generation.name == region);
    console.table(pokemons);
    limpiarContenidoBuscador();
    mostrarPokemones(pokemons);
}
*/

document.getElementById("region_johto").addEventListener("click", function() {
    buscarPorRegion("johto");
});

document.getElementById("region_kanto").addEventListener("click", function() {
    buscarPorRegion("kanto");
});

// document.getElementsByClassName("modal_cerrar")[0].addEventListener("click", function() {
//     document.getElementsByClassName("fondo_transparente")[0].style.display = "none";
// });

