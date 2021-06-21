import data from './data/athletes/athletes.js';
//muestra la opción seleccionada en el select(caja de filtrado) y guarda el valor de la selección en una variable;
const select= document.querySelector('#select');
const options =document.querySelector('#options');
const contentSelect = document.querySelector('#select .content-select');
const hiddenInput = document.querySelector('#userSelection');

document.querySelectorAll('#options > .option').forEach((option)=>{
    option.addEventListener('click', (e)=>{
        e.preventDefault();
        contentSelect.innerHTML=e.currentTarget.querySelector('.data').innerText;
        console.log(e.currentTarget.innerHTML);
        select.classList.toggle('active');
        options.classList.toggle('active');
        hiddenInput.value = e.currentTarget.querySelector('.data').innerText;
    });
});
select.addEventListener('click', ()=>{
    select.classList.toggle('active');
    options.classList.toggle('active');
});

console.log(example, data);
