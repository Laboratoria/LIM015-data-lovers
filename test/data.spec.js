
import { filtrarData,searchPokemon,buscarPorRegion,ordenarPokemon } from '../src/data.js';
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


//ordenar pokemon
describe('buscarPorRegion',() =>{


let pokemons = data.pokemon.filter((pokemon) => pokemon.generation.name == "bulbasaur");

it ('Es una funcion', () => {
    expect (typeof buscarPorRegion).toBe('function');
});

it(' Ordenar pokemones por region Kanto', () => {
    expect(buscarPorRegion(data.pokemones)).toEqual(pokemons);

});
});

describe('ordenarPokemon',()=>{

    
});