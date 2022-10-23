import dbpokemon from "./data/pokemon/pokemon.js";
import { showList } from "./data.js";

// variables que se mandaran a la funciones.

const alldate = dbpokemon.pokemon;

//funcion para activar el menu
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", () => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });
})(document);
(function () {
  const array = showList(alldate);

  array.forEach((elemt, index) => {
    let number = index;
    document.getElementById(
      `auxilio${number}`
    ).outerHTML = `<figure class="card pokemon"><a href="#"><img id="imagen" src="${
      elemt.foto
    }" alt="la foto de ${
      elemt.name
    }" /></a><figcaption><span id="numero_pokemon"><b>N° : ${
      elemt.num
    }</b></span><h3>${
      elemt.name
    }</h3><div class="detalle-pokemon"><figure><img id="img_tipo1"src=""alt=""width="25px"height="25px"/><figcaption><span id="tipo1">${
      elemt.type1
    }</span></figcaption></figure><figure><img id="img_tipo2"src=""alt=""width="25px"height="25px"/><figcaption><span id="tipo2">${
      elemt.type2
    }</span></figcaption></figure></div></figcaption></figure><p id="auxilio${
      index + 1
    }"></p>`;
  });
})();
