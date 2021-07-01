import pokemon from './data/pokemon/pokemon.js';

const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");

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

// funcion para mostrar datos del pokemon
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
        html = html + '<figcaption>' + name + '</figcaption>';
        html = html + '</figure>';
    }
    // console.log(html);

    document.getElementById("infoPokemon").innerHTML = html;
}
// funcion para mostrar datos del pokemon
// function principalpokemon() {
//     data.card.forEach(function(elem)){
//       const title = `<p>${elem.title}</p>` + `<img href = "elem.poster" target="self"</img>`;
//     document.getElementById ("mypokemon")   }
//     let html = '';
//     let url = objPokemon.img;
//     let name = objPokemon.name;
//     let number = objPokemon.num;

//     // insertando los obj con html dinamico
//     html = html + '<p class="num"">' + number + '</p>';
//     html = html + '<figure class="photoPokemon">';
//     //html = html + '<p class='
//     html = html + '<img src="' + url + '"/>';
//     html = html + '<figcaption>' + name + '</figcaption>';
//     html = html + '</figure>';

//     // console.log(html);
//     document.getElementById("infoPokemon").innerHTML = html;
// }
// funcion para el boton ver +
document.getElementById("btn-show").addEventListener("click", () => {
    //pokemon.pokemon.filter(lookinfopokemon);
    lookinfopokemon(pokemon.pokemon);
    document.getElementById("btn-show").style.display = "none";
    document.getElementById("DatasheetPokemon").style.display = "block";
});

//funcion para el boton de la ficha tecnica
document.getElementById("btn-return").addEventListener("click", () => {
    document.getElementById("btn-show").style.display = "block";
    document.getElementById("DatasheetPokemon").style.display = "none";
});

/*mostrar  las imagenes de mi data pokemon*/
const fnames = (names) => {
        return names.name;
    }
    //console.table(pokemon.pokemon.filter(fnames));