import { example } from "./data.js";
import date from "./data/pokemon/pokemon.js";

//código que tenga que ver con mostrar los datos en la pantalla

console.log(date);
console.log(date.pokemon[0]);

console.log(`numero: ${date.pokemon[0].num}`);
console.log(`nombre: ${date.pokemon[0].name}`);
//console.log(`N° generacion:${date.pokemon.generation}`);
//console.log(`Nombre generacion:${date.pokemon.generation.name}`);
console.log(`imagen: ${date.pokemon[0].img}`);
console.log(`descripcion: ${date.pokemon[0].about}`);
console.log(`peso: ${date.pokemon[0].size.weight}`);
console.log(`altura: ${date.pokemon[0].size.height}`);
console.log(`type 1: ${date.pokemon[0].type[0]}`);
console.log(`type 2: ${date.pokemon[0].type[1]}`);

console.log(date.pokemon.length);

console.log(
  `${date.pokemon.forEach((element) =>
    console.log(
      `numero:${element.num} nombre: ${element.name} tipo 1: ${element.type[0]} tipo 2: ${element.type[1]}`
    )
  )}`
);

console.log(example);
