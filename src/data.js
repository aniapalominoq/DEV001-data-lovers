//funcion mostrar toda la data filtrada para el card

export function showList(alldata) {
  const arrayListVistaPokemon = [];
  alldata.forEach((element) => {
    const {
      num,
      name,
      img,
      size: { height, weight },
      type: [type1, type2 = " "],

      resistant: [
        resistant1,
        resistant2 = " ",
        resistant3 = " ",
        resistant4 = " ",
        resistant5 = " ",
        resistant6 = " ",
        resistant7 = " ",
      ],
      weaknesses: [
        weaknesses1,
        weaknesses2 = " ",
        weaknesses3 = " ",
        weaknesses4 = " ",
        weaknesses5 = " ",
        weaknesses6 = " ",
        weaknesses7 = " ",
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

// funcion  filtra por numero,nombre,type

export function filterList(date, condition) {
  const arrayFilterList = [];
  date.forEach((e) => {
    if (condition === e.name || condition === e.num) {
      if (typeof e.type[1] === "undefined") {
        arrayFilterList.push({
          img: e.img,
          num: e.num,
          name: e.name,
          type1: e.type[0],
          type2: " ",
          //aqui puede ir otras datos
        });
      } else {
        arrayFilterList.push({
          img: e.img,
          num: e.num,
          name: e.name,
          type1: e.type[0],
          type2: e.type[1],
          //aqui puede ir otras datos
        });
      }
    }
  });
  return arrayFilterList;
}

// funcion para  mostrar su nivel de su debilidades:
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
