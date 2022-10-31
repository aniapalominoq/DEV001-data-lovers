import { showList, filterList } from "../src/data.js";

//test la funcion que muestra la lista
describe("showList test", () => {
  it("is a function", () => {
    expect(typeof showList).toBe("function");
  });

  it("show the basic data of the pokemons", () => {
    const pokemonData = [
      {
        num: "001",
        name: "bulbasaur",
        img: "https://www.serebii.net/pokemongo/pokemon/001.png",
        size: {
          height: "0.71 m",
          weight: "6.9 kg",
        },
        type: ["grass", "poison"],

        resistant: ["water", "electric", "grass", "fighting", "fairy"],
        weaknesses: ["fire", "ice", "flying", "psychic"],
      },
      {
        num: "144",
        name: "articuno",
        img: "https://www.serebii.net/pokemongo/pokemon/144.png",
        size: {
          height: "1.70 m",
          weight: "55.4 kg",
        },

        type: ["ice", "flying"],

        resistant: ["grass", "ground", "bug"],
        weaknesses: ["fire", "electric", "rock", "steel"],
      },
      {
        num: "145",
        name: "zapdos",
        img: "https://www.serebii.net/pokemongo/pokemon/145.png",
        size: {
          height: "1.60 m",
          weight: "52.6 kg",
        },
        type: ["electric", "flying"],

        resistant: ["grass", "fighting", "flying", "bug", "steel"],
        weaknesses: ["ice", "rock"],
      },
      {
        num: "157",
        name: "typhlosion",

        img: "https://www.serebii.net/pokemongo/pokemon/157.png",
        size: {
          height: "1.70 m",
          weight: "79.5 kg",
        },

        type: ["fire"],

        resistant: ["fire", "grass", "ice", "bug", "steel"],
        weaknesses: ["water", "ground", "rock"],
      },
      {
        num: "246",
        name: "larvitar",

        img: "https://www.serebii.net/pokemongo/pokemon/246.png",
        size: {
          height: "0.60 m",
          weight: "72.0 kg",
        },

        type: ["rock", "ground"],

        resistant: ["electric", "poison", "fire", "flying", "normal", "rock"],
        weaknesses: ["water", "grass", "ground", "ice", "steel", "fighting"],
      },

      {
        num: "239",
        name: "elekid",

        img: "https://www.serebii.net/pokemongo/pokemon/239.png",
        size: {
          height: "0.61 m",
          weight: "23.5 kg",
        },

        type: ["electric"],

        resistant: ["electric", "flying", "steel"],
        weaknesses: ["ground"],
      },
    ];
    expect(showList(pokemonData)).toStrictEqual([
      {
        num: "001",
        name: "bulbasaur",
        img: "https://www.serebii.net/pokemongo/pokemon/001.png",
        height: "0.71 m",
        weight: "6.9 kg",
        type1: "grass",
        type2: "poison",
        resistant1: "water",
        resistant2: "electric",
        resistant3: "grass",
        resistant4: "fighting",
        resistant5: "fairy",
        resistant6: " ",
        resistant7: " ",
        weaknesses1: "fire",
        weaknesses2: "ice",
        weaknesses3: "flying",
        weaknesses4: "psychic",
        weaknesses5: " ",
        weaknesses6: " ",
        weaknesses7: " ",
      },
      {
        num: "144",
        name: "articuno",
        img: "https://www.serebii.net/pokemongo/pokemon/144.png",
        height: "1.70 m",
        weight: "55.4 kg",
        type1: "ice",
        type2: "flying",
        resistant1: "grass",
        resistant2: "ground",
        resistant3: "bug",
        resistant4: " ",
        resistant5: " ",
        resistant6: " ",
        resistant7: " ",
        weaknesses1: "fire",
        weaknesses2: "electric",
        weaknesses3: "rock",
        weaknesses4: "steel",
        weaknesses5: " ",
        weaknesses6: " ",
        weaknesses7: " ",
      },
      {
        num: "145",
        name: "zapdos",
        img: "https://www.serebii.net/pokemongo/pokemon/145.png",
        height: "1.60 m",
        weight: "52.6 kg",
        type1: "electric",
        type2: "flying",
        resistant1: "grass",
        resistant2: "fighting",
        resistant3: "flying",
        resistant4: "bug",
        resistant5: "steel",
        resistant6: " ",
        resistant7: " ",
        weaknesses1: "ice",
        weaknesses2: "rock",
        weaknesses3: " ",
        weaknesses4: " ",
        weaknesses5: " ",
        weaknesses6: " ",
        weaknesses7: " ",
      },
      {
        num: "157",
        name: "typhlosion",
        img: "https://www.serebii.net/pokemongo/pokemon/157.png",
        height: "1.70 m",
        weight: "79.5 kg",
        type1: "fire",
        type2: " ",
        resistant1: "fire",
        resistant2: "grass",
        resistant3: "ice",
        resistant4: "bug",
        resistant5: "steel",
        resistant6: " ",
        resistant7: " ",
        weaknesses1: "water",
        weaknesses2: "ground",
        weaknesses3: "rock",
        weaknesses4: " ",
        weaknesses5: " ",
        weaknesses6: " ",
        weaknesses7: " ",
      },
      {
        num: "246",
        name: "larvitar",
        img: "https://www.serebii.net/pokemongo/pokemon/246.png",
        height: "0.60 m",
        weight: "72.0 kg",
        type1: "rock",
        type2: "ground",
        resistant1: "electric",
        resistant2: "poison",
        resistant3: "fire",
        resistant4: "flying",
        resistant5: "normal",
        resistant6: "rock",
        resistant7: " ",
        weaknesses1: "water",
        weaknesses2: "grass",
        weaknesses3: "ground",
        weaknesses4: "ice",
        weaknesses5: "steel",
        weaknesses6: "fighting",
        weaknesses7: " ",
      },

      {
        num: "239",
        name: "elekid",
        img: "https://www.serebii.net/pokemongo/pokemon/239.png",
        height: "0.61 m",
        weight: "23.5 kg",
        type1: "electric",
        type2: " ",
        resistant1: "electric",
        resistant2: "flying",
        resistant3: "steel",
        resistant4: " ",
        resistant5: " ",
        resistant6: " ",
        resistant7: " ",
        weaknesses1: "ground",
        weaknesses2: " ",
        weaknesses3: " ",
        weaknesses4: " ",
        weaknesses5: " ",
        weaknesses6: " ",
        weaknesses7: " ",
      },
    ]);
  });
});

//validar la funcion filterList
describe("filterList test", () => {
  it("is a function", () => {
    expect(typeof filterList).toBe("function");
  });

  it("filter by pokemon name or number", () => {
    const pokemonData = [
      {
        img: "https://www.serebii.net/pokemongo/pokemon/001.png",
        num: "001",
        name: "bulbasaur",
        type: ["grass", "poison"],
        size: {
          height: "0.71 m",
          weight: "6.9 kg",
        },
      },
      {
        img: "https://www.serebii.net/pokemongo/pokemon/080.png",
        num: "080",
        name: "slowbro",
        type: ["water", "psychic"],
      },
      {
        img: "https://www.serebii.net/pokemongo/pokemon/188.png",
        num: "188",
        name: "skiploom",
        type: ["grass", "flying"],
      },
      {
        img: "https://www.serebii.net/pokemongo/pokemon/239.png",
        num: "239",
        name: "elekid",
        type: ["electric"],
      },

      {
        img: "https://www.serebii.net/pokemongo/pokemon/143.png",
        num: "143",
        name: "snorlax",
        type: ["normal"],
      },
    ];
    expect(filterList(pokemonData, "bulbasaur")).toStrictEqual([
      {
        img: "https://www.serebii.net/pokemongo/pokemon/001.png",
        num: "001",
        name: "bulbasaur",
        type1: "grass",
        type2: "poison",
      },
    ]);
    expect(filterList(pokemonData, "elekid")).toStrictEqual([
      {
        img: "https://www.serebii.net/pokemongo/pokemon/239.png",
        num: "239",
        name: "elekid",
        type1: "electric",
        type2: " ",
      },
    ]);

    expect(filterList(pokemonData, "080")).toStrictEqual([
      {
        img: "https://www.serebii.net/pokemongo/pokemon/080.png",
        num: "080",
        name: "slowbro",
        type1: "water",
        type2: "psychic",
      },
    ]);

    expect(filterList(pokemonData, "080")).toStrictEqual([
      {
        img: "https://www.serebii.net/pokemongo/pokemon/080.png",
        num: "080",
        name: "slowbro",
        type1: "water",
        type2: "psychic",
      },
    ]);
  });
});
