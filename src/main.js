//import { example } from './data.js';
import data from './data/ghibli/ghibli.js'
console.log(data.films[5].title);



const films = data.films
const namefilms = films.map((names) => names.title)
console.log(namefilms);








