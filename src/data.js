/*El corazón de este proyecto es la manipulación de datos a través de arreglos y objetos.
Te recomendamos que este archivo contenga toda la funcionalidad que corresponda a obtener,
procesar y manipular datos (tus funciones)*/


// funcion para mostrar los pokemones y  filtrar por tipo
function filtrarData(data, condition) {
    let arrayPokemon = [];
    if (condition.length == 0) {
        arrayPokemon = data.filter(pokemon => {
            return pokemon;
        });
    } else {
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
        let nombreAsc = asc[sortBy];
        let nombreDesc = desc[sortBy];
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
    return data;
};




// function buscadorpokemon() {
//     let busqueda = document.getElementById("searchtext").value;
//     let pokemons;
//     if (isNaN(busqueda)) {
//         pokemons = data.pokemon.filter((pokemon) => pokemon.name == busqueda);

//     } else {
//         pokemons = data.pokemon.filter((pokemon) => pokemon.num == busqueda);
//     }

//     console.table(pokemons);
//     limpiarContenidoBuscador();
//     mostrarPokemones(pokemons);
// }

// // funcion para buscar
// export const searchPokemon = (data, namePokemon) => {
//     const arrayPoke = [];
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].name.includes(namePokemon)) {
//             arrayPoke.push(data[i]);
//         }
//     }
//     return arrayPoke;
// };



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

// function buscarPorRegion(region) {

//     let pokemons = data.pokemon.filter((pokemon) => pokemon.generation.name == region);
//     console.table(pokemons);
//     limpiarContenidoBuscador();
//     mostrarPokemones(pokemons);
// }

export {
    filtrarData
}