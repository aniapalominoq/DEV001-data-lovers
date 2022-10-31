import dbpokemon from "./data/pokemon/pokemon.js";
import { showList, computeStatus } from "./data.js";

//pruebas
/*************************************/
const alldata = dbpokemon.pokemon;

console.log(computeStatus(alldata));

console.log(showList(alldata));

alldata.forEach((e) => {
  const {
    num,
    name,
    img,
    size: { height, weight },
    type: [type1, type2 = " "],
    resistant: [
      valueOne,
      valueTwo = " ",
      valueThree = " ",
      valueFour = " ",
      valueFive = " ",
      valueSix = " ",
      valueSeven = " ",
    ],
    weaknesses: [
      valueOn,
      valueTw = " ",
      valueThr = " ",
      valueFo = " ",
      valueFi = " ",
      valueSi = " ",
      valueSe = " ",
    ],
  } = e;

  console.log(
    num,
    name,
    img,
    height,
    weight,
    type1,
    type2,
    valueOne,
    valueTwo,
    valueThree,
    valueFour,
    valueFive,
    valueSix,
    valueSeven,
    valueOn,
    valueTw,
    valueThr,
    valueFo,
    valueFi,
    valueSi,
    valueSe
  );
});

const { pokemon, valo, lucas, fido, ...trece } = dbpokemon;

console.log(pokemon, valo, lucas, fido, trece);

const [valor1, valor2, valor3, ...demas] = alldata;
console.log(valor1, valor2, valor3, demas);

console.log(Object.keys(valor1));
console.log(Object.values(valor1));
console.log(Object.keys(valor2));
console.log(Object.values(valor2));

alldata.forEach((e) => {
  // console.log(e.weaknesses.length);
  // console.log(e.weaknesses);

  console.log(e.resistant.length);
  console.log(e.resistant);
});
/*************************************/

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

(function () {
  const array = showList(alldata);
  array.forEach((e, index) => {
    let number = index;

    document.getElementById(
      `auxilio${number}`
    ).outerHTML = `<section class="yo">
            <article class="card-inner">
              <figure class="card pokemon-front">
                <div class="peso"><span>${e.weight}</span><span>${
      e.height
    }</span></div>
                <div class="img-pokemon">
                  <span id="numero_pokemon" class="numero_pokemon"
                    >#${e.num}</span
                  >
                  <a href="#" class="imagen">
                    <img id="imagen" src="${e.img}" alt="Imagen de ${e.name}" />
                  </a>
                </div>
                <figcaption>
                  <h3>${e.name}</h3>
                  <div class="detalle-pokemon">
                    <span id="tipo1">${e.type1}</span>
                    <span id="tipo2"
                      ><span id="punto">*</span><span>${e.type2}</span></span
                    >
                  </div>
                </figcaption>
              </figure>
              <section class="card pokemon-back">
                <h4>Stats</h4>
                <div class="status-pokemon">
                  <div class="item">
                    <h5>Attack</h5>
                    <div class="barra">
                      <span class="graph-bar1">80%</span>
                    </div>
                  </div>
                  <div class="item">
                    <h5>Defense</h5>
                    <div class="barra">
                      <span class="graph-bar2">30%</span>
                    </div>
                  </div>
                  <div class="item">
                    <h5>Stamina</h5>
                    <div class="barra">
                      <span class="graph-bar3">80%</span>
                    </div>
                  </div>
                  <div class="item">
                    <h5>CP</h5>
                    <div class="barra">
                      <span class="graph-bar4">20%</span>
                    </div>
                  </div>
                  <div class="item">
                    <h5>HP</h5>
                    <div class="barra">
                      <span class="graph-bar5">10%</span>
                    </div>
                  </div>
                </div>
                <div class="resistant">
                  <h4>Resistant</h4>
                  <ul>
                    <li>${e.resistant1}</li>
                    <li>${e.resistant2}</li>
                    <li>${e.resistant3}</li>
                    <li>${e.resistant4}</li>
                    <li>${e.resistant5}</li>
                    <li>${e.resistant6}</li>
                    <li>${e.resistant7}</li>
                  </ul>
                </div>
                <div class="weaknesses">
                  <h4>Weaknesses</h4>
                  <ul>
                    <li>${e.weaknesses1}</li>
                    <li>${e.weaknesses2}</li>
                    <li>${e.weaknesses3}</li>
                    <li>${e.weaknesses4}</li>
                    <li>${e.weaknesses5}</li>
                    <li>${e.weaknesses6}</li>
                    <li>${e.weaknesses7}</li>
                  </ul>
                </div>
              </section>
            </article>
          </section><p id="auxilio${index + 1}"></p>`;
  });
})();
