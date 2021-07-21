import { filtrarData, searchPokemon, calculoEstadistico, ordenarPokemon, calculoEstadPeso, calcularEstadVida } from '../src/data.js';
import data from '../src/data/pokemon/pokemon.js';


describe('filtrarData', () => {

    // Resultados
    const tipoPokemon = data.pokemon.filter(pokemon => pokemon.type.includes('water'));

    it('Es una función', () => {
        expect(typeof filtrarData).toBe('function');
    });

    it('Filtra todos los pokemones', () => {
        expect(filtrarData(data.pokemon, '')).toEqual(data.pokemon);
    });

    it('Filtra todos los pokemone de tipo agua', () => {
        expect(filtrarData(data.pokemon, 'water')).toEqual(tipoPokemon);
    });
});

describe('searchPokemon', () => {

    // Resultados
    const buscarNombre = data.pokemon.filter(pokemon => pokemon.name.includes('pikachu'));

    const buscarNumero = data.pokemon.filter(pokemon => parseInt(pokemon.num) == parseInt('025'));

    it('Es una función', () => {
        expect(typeof searchPokemon).toBe('function');
    });

    it('Filtra todos los pokemones', () => {
        expect(filtrarData(data.pokemon, '')).toEqual(data.pokemon);
    });

    it('Buscar por el nombre pikachu ', () => {
        expect(searchPokemon(data.pokemon, 'pika')).toEqual(buscarNombre);
    });

    it('Buscar por el numero pikachu 25', () => {
        expect(searchPokemon(data.pokemon, 25)).toEqual(buscarNumero);
    });
});

describe('ordenarPokemon', () => {

    it('Es una funcion', () => {
        expect(typeof ordenarPokemon).toBe('function');
    });

    it('Muestra todos los pokemones', () => {
        expect(ordenarPokemon(data.pokemon, '')).toEqual(data.pokemon);
    });

    it('Ordenar de A-Z', () => {
        const ordenarAZ = ordenarPokemon(data.pokemon, 'name', 'creciente');
        expect(ordenarAZ[0].name).toBe('abra');
    });

    it('Ordenar de Z-A', () => {
        const ordenarZA = ordenarPokemon(data.pokemon, 'name', 'decreciente');
        expect(ordenarZA[0].name).toBe('zubat');
    });

});

describe('calculoEstadistico', () => {


    it('Es una función', () => {
        expect(typeof calculoEstadistico).toBe('function');
    });

    it('los top 10 segun CP', () => {

        const top10CP = calculoEstadistico(data.pokemon.sort((a, b) => (parseInt(b.stats['max-cp']) - parseInt(a.stats['max-cp']))).slice(0, 10));

        expect(top10CP[1]).toEqual(["mewtwo", 4178]);
    });

});

describe('calculoEstadPeso', () => {
    it('Es una función', () => {
        expect(typeof calculoEstadPeso).toBe('function');
    });

    it('los top 10 segun Peso', () => {

        const top10Peso = calculoEstadPeso(data.pokemon.sort((a, b) => (parseInt(b.size.weight) - parseInt(a.size.weight))).slice(0, 10));

        expect(top10Peso[1]).toEqual(["snorlax", 460]);
    });
});

describe('calcularEstadVida', () => {
    it('Es una función', () => {
        expect(typeof calcularEstadVida).toBe('function');
    });

    it('top 10 segun nivel de vida', () => {

        const top10Vida = calcularEstadVida(data.pokemon.sort((a, b) =>

            (parseInt(b.stats['max-hp'])) - parseInt(a.stats['max-hp'])).slice(0, 10));
        expect(top10Vida[1]).toEqual(["blissey", 403])
    });
});