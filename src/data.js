export function showList(alldate) {
  const arrayListVistaPokemon = [];
  alldate.forEach((element) => {
    let imagePokemons = element.img;
    let numberPokemons = element.num;
    let namePokemons = element.name;
    let typePokemons1 = element.type[0];
    let typePokemons2 = element.type[1];
    arrayListVistaPokemon.push({
      foto: imagePokemons,
      num: numberPokemons,
      name: namePokemons,
      type1: typePokemons1,
      type2: typePokemons2,
    });
  });
  return arrayListVistaPokemon;
}
