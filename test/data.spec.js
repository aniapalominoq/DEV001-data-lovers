import { showList } from "../src/data.js";
import dbpokemon from "./data/pokemon/pokemon.js";

describe("showList test", () => {
  it("is a function", () => {
    expect(typeof example).to.equal("function");
  });

  it("returns `example`", () => {
    expect(example()).to.equal("example");
  });
});
