import data from './data/pokemon/pokemon.js';
import { mostrarPokemones } from './main.js';

// funcion para mostrar los pokemones y  filtrar por tipo
function filtrarData(data, condition) {
    let arrayPokemon = [];
    if (condition.length == 0) { // Para mostrar todos los pokemones al inicio
        arrayPokemon = data.filter(pokemon => {
            return pokemon;
        });
    } else { // Para mostrar los pokemones segun su tipo (agua, etc)
        arrayPokemon = data.filter(pokemon => {
            return pokemon.type.includes(condition);
        });
    }

    return arrayPokemon;

}

// funcion para ordenar de manera ascendente o descendente
export const ordenarPokemon = (data, sortBy, sortOrder) => {

    let ordenarData = [];
    ordenarData = data.sort((asc, desc) => {
        const nombreAsc = asc[sortBy];
        const nombreDesc = desc[sortBy];
        if (sortOrder == "creciente") {
            if (nombreAsc > nombreDesc) {
                return 1;
            }
            if (nombreAsc < nombreDesc) {
                return -1;
            }
            return 0;
        } else if (sortOrder == "decreciente") {
            if (nombreAsc < nombreDesc) {
                return 1;
            }
            if (nombreAsc > nombreDesc) {
                return -1;
            }
            return 0;
        }
    });
    return ordenarData;
};

//funcion para calculos estadisticos(ficha tecnica) ------>proceso de construccion
export const calculoEstadistico = (data) => {

    let top10Pokemon = [];
    let arrayChart = [];

    top10Pokemon = data.sort((a, b) => (parseInt(b.stats['max-cp']) - parseInt(a.stats['max-cp']))).slice(0, 10);

    // Crear estructura para el grafico
    arrayChart = top10Pokemon.map(pokemon => {
        const itemChart = [];
        itemChart.push(pokemon.name);
        itemChart.push(parseInt(pokemon.stats['max-cp']));

        return itemChart;
    });

    // Agregar cabecera al inicio del arreglo
    arrayChart.unshift(['Pokemon', 'CP']);

    return arrayChart;
};

export const calculoEstadPeso = (data) => {

    let top10Pokemon = [];
    let arrayChart = [];

    // Lista TOP 10 de Pokemones segun Punto de Combate
    top10Pokemon = data.sort((a, b) => (parseInt(b.size.weight) - parseInt(a.size.weight))).slice(0, 10);

    // Crear estructura para el grafico
    arrayChart = top10Pokemon.map(pokemon => {
        const itemChart = [];
        itemChart.push(pokemon.name);
        itemChart.push(parseInt(pokemon.size.weight));

        return itemChart;
    });

    // Agregar cabecera al inicio del arreglo
    arrayChart.unshift(['Pokemon', 'peso', ]);

    return arrayChart;
};

export const calcularEstadVida = (data) => {

    let top10Pokemon = [];
    let arrayChart = [];

    // Lista TOP 10 de Pokemones segun Punto de Combate
    top10Pokemon = data.sort((a, b) => (parseInt(b.stats['max-hp']) - parseInt(a.stats['max-hp']))).slice(0, 10);

    // Crear estructura para el grafico
    arrayChart = top10Pokemon.map(pokemon => {
        const itemChart = [];
        itemChart.push(pokemon.name);
        itemChart.push(parseInt(pokemon.stats['max-hp']));

        return itemChart;
    });

    // Agregar cabecera al inicio del arreglo
    arrayChart.unshift(['Pokemon', 'vida', ]);

    return arrayChart;
};

// funcion para hacer la busqueda
export const searchPokemon = (data, buscarPokemon) => {
    if (buscarPokemon.length == 0)
        return data;

    let arrayBuscar = [];
    if (isNaN(buscarPokemon)) {
        arrayBuscar = data.filter(pokemon => pokemon.name.includes(buscarPokemon));

    } else {
        arrayBuscar = data.filter(pokemon => parseInt(pokemon.num) == parseInt(buscarPokemon));
    }
    return arrayBuscar;
};


function buscarPorRegion(region) {

    let pokemons = data.pokemon.filter((pokemon) => pokemon.generation.name == region);
    console.log(pokemons);
    return pokemons;
}
export {
    filtrarData,buscarPorRegion
}