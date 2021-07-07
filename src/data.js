/*El corazón de este proyecto es la manipulación de datos a través de arreglos y objetos.
Te recomendamos que este archivo contenga toda la funcionalidad que corresponda a obtener,
procesar y manipular datos (tus funciones)*/
export function kanto() {

}

function filterData(data, condition) {

    let arrayPokemon = data.filter(pokemon => {
        return pokemon;
    });

    return arrayPokemon;
}


let objectoKanto = new kanto();


export let name = () => {
    return 'example';
};

export const data = () => {
    return 'data';
};

//exportamos las funciones
export {
    filterData
}