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
    ).outerHTML = `<figure class="card pokemon">
            <div class="img-pokemon">
              <span id="numero_pokemon" class="numero_pokemon">#${
                elemt.num
              }</span>
              <a href="#" class="imagen">
                <img id="imagen" src="${elemt.foto}" alt="la foto de ${
      elemt.name
    }" />
              </a>
            </div>
            <figcaption>
              <h3>${elemt.name}</h3>
              <div class="detalle-pokemon">
                <span id="tipo1">${elemt.type1}</span>
                <span id="tipo2"><span id="punto">*</span><span>${
                  elemt.type2
                }</span></span>
              </div>
            </figcaption>
          </figure><p id="auxilio${index + 1}"></p>`;
  });
})();
