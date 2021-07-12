// estas funciones son de ejemplo

export const example = (elemento) => {
  return `<article class="cardpokemon">
  <img src=${elemento.img} alt="">
  <h4>
      ${
          elemento.name
      }
  </h4>
  </article>`;
};

export const anotherExample = () => {
  return 'OMG';
};

//funcion filter
/*function filtrar(tipo){
  const look = data.pokemon.filter(poke => poke.type.includes(tipo));
  return(look)
}
filtrar("grass");*/