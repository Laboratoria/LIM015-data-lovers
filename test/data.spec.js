import { filtrarData, searchPokemon } from '../src/data.js';
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

// describe('ordenarPokemon', () => {
//     // Prueba 1 : ¿Es función?
//     it('Es una funcnion', () => {
//         expect(typeof ordenarPokemon).toBe('function');
//     });

//     // Prueba 2 : Ordenar Data
//     it('deberia retornar "Charmander,Ivysaur,Pikachu"', () => {


//         const data = [{
//                 name: 'Ivysaur',
//             },
//             {
//                 name: 'Charmander',
//             },
//             {
//                 name: 'Pikachu',
//             }
//         ];
//         const result = [{
//                 name: 'Charmander',
//             },
//             {
//                 name: 'Ivysaur',
//             },
//             {
//                 name: 'Pikachu',
//             }
//         ];

//         const sortOrder = "Ascendente";

//         expect(funciones.sortData(data, sortOrder)).toStrictEqual(result);
//     })

//     it('deberia ordenar de A-Z ', () => {
//         expect(ordenarPokemon(data.pokemon, "name", "decreciente")).toEqual(ordenarAZ);
//     });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });


// it('debería ser un objeto', () => {
//     expect(typeof validator).toBe('object');
// });

// describe('filtrarData.isValid', () => {
//     it('debería ser una función', () => {
//         expect(typeof validator.arrayPokemon).toBe('function');
//     });

//     it('debería retornar true para "4083952015263"', () => {
//         expect(validator.isValid("4083952015263")).toBe(true); //creando una prueba unitaria
//     });

//     it('debería retornar true para "79927398713"', () => {
//         expect(validator.isValid("79927398713")).toBe(true); // escribe aquí tu test
//     });

//     it('debería retornar false para "1234567890"', () => {
//         expect(validator.isValid("1234567890")).toBe(false); // escribe aquí tu test
//     });
// });

// describe('validator.maskify', () => {
//     it('debería ser una función', () => {
//         expect(typeof validator.maskify).toBe('function');
//     });

//     it('Debería retornar "############5616" para "4556364607935616"', () => {
//         expect(validator.maskify("4556364607935616")).toBe("############5616"); // escribe aquí tu test
//     });

//     it('Debería retornar "1" para "1"', () => {
//         expect(validator.maskify("1")).toBe("1"); // escribe aquí tu test
//     });

//     it('Debería retornar "######orld" para "helloworld"', () => {
//         expect(validator.maskify("helloworld")).toBe("######orld"); // escribe aquí tu test
//     });
// });
// describe('validator.getIssuer', () => {
//     it('debería ser una función', () => {
//         expect(typeof validator.getIssuer).toBe('function');
//     });

//     it('Debería retornar "Visa" para "4556364607935616"', () => {
//         expect(validator.getIssuer("4556364607935616")).toBe("Visa"); // escribe aquí tu test
//     });

//     it('Debería retornar "" para "1"', () => {
//         expect(validator.getIssuer("1")).toBe(""); // escribe aquí tu test
//     });

//     it('Debería retornar "MasterCard" para "5556364607935616"', () => {
//         expect(validator.getIssuer("5556364607935616")).toBe("MasterCard"); // escribe aquí tu test
//     });
// });