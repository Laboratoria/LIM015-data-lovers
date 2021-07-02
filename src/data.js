/*El corazón de este proyecto es la manipulación de datos a través de arreglos y objetos.
Te recomendamos que este archivo contenga toda la funcionalidad que corresponda a obtener,
procesar y manipular datos (tus funciones)*/
// export function kanto() {

// }

function lookinfopokemon(objPokemon) {
    let html = '';
    for (let i = 0; i < objPokemon.length; i++) {
        let url = objPokemon[i].img;
        let name = objPokemon[i].name;
        let number = objPokemon[i].num;

        // insertando los obj con html dinamico
        html = html + '<figure class="photoPokemon">';
        html = html + '<p class="num"">' + number + '</p>';
        html = html + '<img src="' + url + '"/>';
        html = html + '<figcaption>' + name + '<button id="btn-show" class="boton" >' + '<p>ver mas</p>' + '</button>' + '</figcaption>';
        html = html + '</figure>';
    }
    // console.log(html);
    return html;
}

// let objectoKanto = new kanto();


// export let name = () => {
//     return 'example';
// };

// export const data = () => {
//     return 'data';
// };

export {
    lookinfopokemon
}