import dbpokemon from "./data/pokemon/pokemon.js";
import {
  showList,
  computeStatus,
  orderListPokemon,
  filterPokemon,
} from "./data.js";

//funcion para activar el menu
//funciones autoejecutables

((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");
  $btnMenu.addEventListener("click", () => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });
})(document);

//usando las funiones showList y computeStatus para generar los card
/*************************************/
const alldata = dbpokemon.pokemon;

console.log(showList(alldata));
const arra1 = showList(alldata);
const arra2 = computeStatus(alldata);
const arraytotal = [];
let n = 0;
do {
  Object.assign(arra1[n], arra2[n]);
  arraytotal.push(arra1[n]);
  n++;
} while (n < 251);
/*************************************/

const $carrusel = document.getElementById("carrusel");

(function () {
  createCard(arraytotal, $carrusel);
})();

// codigo para dar funcionalidad al selection y acceder a sus valores
/******************************************************************** */
const $pokeselect = document.getElementById("pokeselect");
$pokeselect.addEventListener("change", ordenar);

function ordenar() {
  let conditions = $pokeselect.value;
  const returnOrder = orderListPokemon(arraytotal, conditions);
  document.getElementById("carrusel").innerHTML = "";
  createCard(returnOrder, $carrusel);
}
/********************************************************************* */
//codigo para filtrar por nombre
const $pokeInput = document.getElementById("pokeInput");
$pokeInput.addEventListener("keyup", filtraNames);
function filtraNames() {
  let conditions = $pokeInput.value;
  const arrayFiltersNames = filterPokemon(arraytotal, conditions);
  document.getElementById("carrusel").innerHTML = "";

  createCard(arrayFiltersNames, $carrusel);
}

/************************************************************************ */
function createCard(array, element) {
  array.forEach((e) => {
    element.insertAdjacentHTML(
      "beforeend",
      `<section class="yo">
            <article class="card-inner">
              <figure class="card pokemon-front">
                <div class="peso"><span>${e.weight}</span><span>${e.height}</span></div>
                <div class="img-pokemon">
                  <span id="numero_pokemon" class="numero_pokemon">
                  #${e.num}
                  </span>
                  <a href="#" class="imagen">
                    <img id="imagen" src="${e.img}" alt="Imagen de ${e.name}" />
                  </a>
                </div>
                <figcaption>
                  <h3>${e.name}</h3>
                  <div class="detalle-pokemon">
                    <span class="color${e.type1}" id="tipo1">${e.type1}</span>
                    <span id="tipo2">
                    <span id="punto">:</span>
                    <span class="color${e.type2}" >${e.type2}</span>
                    </span>
                  </div>
                </figcaption>
              </figure>
              <section class="pokemon-back">
                <h4>Stats</h4>
                <div class="status-pokemon">
                  <div class="item">
                    <h5>Attack</h5>
                    <div class="barra">
                      <span class="graph-bar1 ${e.attack}" style:"width:${e.attack}">${e.attack}
                      </span>
                    </div>
                  </div>
                  <div class="item">
                    <h5>Defense</h5>
                    <div class="barra">
                      <span class="graph-bar2 ${e.defense}" style="width:${e.defense}">
                      ${e.defense}
                      </span>
                    </div>
                  </div>
                  <div class="item">
                    <h5>Stamina</h5>
                    <div class="barra">
                      <span class="graph-bar3 ${e.stamina}" style="width:${e.stamina}">
                      ${e.stamina}</span>
                    </div>
                  </div>
                  <div class="item">
                    <h5>CP</h5>
                    <div class="barra">
                      <span class="graph-bar4 ${e.cp}" style="width:${e.cp}">${e.cp}
                      </span>
                    </div>
                  </div>
                  <div class="item">
                    <h5>HP</h5>
                    <div class="barra">
                      <span class="graph-bar5 ${e.hp}" style="width:${e.hp}">${e.hp}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="resistant">
                  <h4>Resistant</h4>
                  <ul>
                    <li class="${e.resistant1}">${e.resistant1}</li>
                    <li class="${e.resistant2}">${e.resistant2}</li>
                    <li class="${e.resistant3}">${e.resistant3}</li>
                    <li class="${e.resistant4}">${e.resistant4}</li>
                    <li class="${e.resistant5}">${e.resistant5}</li>
                    <li class="${e.resistant6}">${e.resistant6}</li>
                    <li class="${e.resistant7}">${e.resistant7}</li>
                  </ul>
                </div>
                <div class="weaknesses">
                  <h4>Weaknesses</h4>
                  <ul>
                    <li class="${e.weaknesses1}">${e.weaknesses1}</li>
                    <li class="${e.weaknesses2}">${e.weaknesses2}</li>
                    <li class="${e.weaknesses3}">${e.weaknesses3}</li>
                    <li class="${e.weaknesses4}">${e.weaknesses4}</li>
                    <li class="${e.weaknesses5}">${e.weaknesses5}</li>
                    <li class="${e.weaknesses6}">${e.weaknesses6}</li>
                    <li class="${e.weaknesses7}">${e.weaknesses7}</li>
                  </ul>
                </div>
                <a href="detalles.html" class="btn-destalles">See more details... </a>
              </section>
            </article>
          </section>`
    );
  });
}
