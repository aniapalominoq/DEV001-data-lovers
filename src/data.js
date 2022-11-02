/**
 * funcion mostrar toda la data filtrada para el card frontal
 * @param {array}alldata es un arreglo de objetos de los251 pokkemones
 * @returns {array}arrayListVistaPokemon es un arreglo de objetos con los siguientes datos(
 *  num:numero de Pokémon
      name:nombre del pokémon
      img:imagen del pokémon
      height:altura del pokémon(metros)
      weight:peso dek pokémon(kg)
      type1:su primer tipo
      type2:su segundo tipo y si no la tuviera devuelve vacio
      resistant1:su primer resistencia  y si no la tuviera devuelve vacio
      resistant2:su segundo resistencia  y si no la tuviera devuelve vacio
      resistant3:su tercero resistencia  y si no la tuviera devuelve vacio
      resistant4:su cuarto resistencia  y si no la tuviera devuelve vacio
      resistant5:su quinto resistencia  y si no la tuviera devuelve vacio
      resistant6:su sexto resistencia  y si no la tuviera devuelve vacio
      resistant7:su septimo resistencia  y si no la tuviera devuelve vacio
      weaknesses1:su primer weaknesses 
      weaknesses2:su segunda resistencia  y si no la tuviera devuelve vacio
      weaknesses3:su tercera resistencia  y si no la tuviera devuelve vacio
      weaknesses4:su cuarta resistencia  y si no la tuviera devuelve vacio
      weaknesses5:su quinta resistencia  y si no la tuviera devuelve vacio
      weaknesses6:su sexta resistencia  y si no la tuviera devuelve vacio
      weaknesses7:su septima resistencia  y si no la tuviera devuelve vacio)
 */

export function showList(alldata) {
  const arrayListVistaPokemon = [];
  alldata.forEach((element) => {
    const {
      num,
      name,
      img,
      size: { height, weight },
      type: [type1, type2 = ""],

      resistant: [
        resistant1,
        resistant2 = "",
        resistant3 = "",
        resistant4 = "",
        resistant5 = "",
        resistant6 = "",
        resistant7 = "",
      ],
      weaknesses: [
        weaknesses1,
        weaknesses2 = "",
        weaknesses3 = "",
        weaknesses4 = "",
        weaknesses5 = "",
        weaknesses6 = "",
        weaknesses7 = "",
      ],
    } = element;
    arrayListVistaPokemon.push({
      num,
      name,
      img,
      height,
      weight,
      type1,
      type2,
      resistant1,
      resistant2,
      resistant3,
      resistant4,
      resistant5,
      resistant6,
      resistant7,
      weaknesses1,
      weaknesses2,
      weaknesses3,
      weaknesses4,
      weaknesses5,
      weaknesses6,
      weaknesses7,
    });
  });

  return arrayListVistaPokemon;
}

/**
 * funcion ordenar a-z z-a /mayor a menor# y viciversa
 * @param {array} data es un arreglo que bota la funcion Showlist mas computeStatus
 * @param {string} conditions esto son los vaores de  las opciones del select
 * @returns {array} ordenada segun la conditions
 */

export function orderListPokemon(data, conditions) {
  if (conditions === "A-Z") {
    data.sort((x, y) => x.name.localeCompare(y.name));
  }
  if (conditions === "Z-A") {
    data.sort((x, y) => x.name.localeCompare(y.name));
    data.reverse();
  }

  if (conditions === "Highest to lowest") {
    data.sort((x, y) => {
      return x.num - y.num;
    });
  }
  if (conditions === "Least to greatest") {
    data.sort((x, y) => {
      return x.num - y.num;
    });
    data.reverse();
  }

  return data;
}

/**
 * funcion que filtra la data segun o que escriba el usuario.(nombre)
 * @param {array} data es una arreglo de objetos de tod los datos que de muestra en el card frontal y reverso
 * @param {string} conditions esto es el valor del input(nombre del pokemon) de busqueda
 * @returns {array} data filtrada
 */

export function filterPokemon(data, conditions) {
  const arrayFilterPokemon = data.filter((e) => {
    let nameCapitaLetters = e.name.toLowerCase();
    return nameCapitaLetters.includes(conditions.toLowerCase());
  });

  return arrayFilterPokemon;
}

/**
 * funcion para  mostrar su stats:
 * @param {array}data es un arreglo de objetos de los 251 pokkemones
 * @returns {array}computeStatus es un arreglo  que contiene sus  stats de cada pokémon en porcentajes  respecto al total y mayor de ellos ,segun sea los items de las  stats
 */

export function computeStatus(data) {
  const computeStatus = [],
    arrayStatus = [],
    arrayAttacks = [],
    arrayDefenses = [],
    arrayStaminases = [],
    arrayCp = [],
    arrayHp = [];
  let maxAttacks, maxDefenses, maxStaminases, maxCp, maxHp;

  data.forEach((el) => {
    const {
      stats: {
        "base-attack": attack,
        "base-defense": defense,
        "base-stamina": stamina,
        "max-cp": cp,
        "max-hp": hp,
      },
    } = el;
    arrayStatus.push({
      attack,
      defense,
      stamina,
      cp,
      hp,
    });
    arrayAttacks.push(attack);
    arrayDefenses.push(defense);
    arrayStaminases.push(stamina);
    arrayCp.push(cp);
    arrayHp.push(hp);
  });
  maxAttacks = Math.max(...arrayAttacks);
  maxDefenses = Math.max(...arrayDefenses);
  maxStaminases = Math.max(...arrayStaminases);
  maxCp = Math.max(...arrayCp);
  maxHp = Math.max(...arrayHp);

  arrayStatus.map((el) => {
    computeStatus.push({
      attack: `${Math.trunc((el.attack / maxAttacks) * 100)}%`,
      defense: `${Math.trunc((el.defense / maxDefenses) * 100)}%`,
      stamina: `${Math.trunc((el.stamina / maxStaminases) * 100)}%`,
      cp: `${Math.trunc((el.cp / maxCp) * 100)}%`,
      hp: `${Math.trunc((el.hp / maxHp) * 100)}%`,
    });
  });

  return computeStatus;
}
