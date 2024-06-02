import "./App.css";
import Card from "./component/Card";

function App() {
  const pokemons = [
    {
      id: "#0001",
      name: "Bulbasaur",
      types: ["Grass", "Poison"],
      image: "./001.png",
    },
    {
      id: "#0002",
      name: "Ivysaur",
      types: ["Grass", "Poison"],
      image: "./002.png",
    },
    {
      id: "#0003",
      name: "Venusaur",
      types: ["Grass", "Poison"],
      image: "./003.png",
    },
    { id: "#0004", name: "Charmander", types: ["Fire"], image: "./004.png" },
    { id: "#0005", name: "Charmeleon", types: ["Fire"], image: "./005.png" },
    {
      id: "#0006",
      name: "Charizard",
      types: ["Fire", "Flying"],
      image: "./006.png",
    },
    { id: "#0007", name: "Squirtle", types: ["Water"], image: "./007.png" },
    { id: "#0008", name: "Wartortle", types: ["Water"], image: "./008.png" },
    { id: "#0009", name: "Blastoise", types: ["Water"], image: "./009.png" },
    { id: "#0010", name: "Caterpie", types: ["Bug"], image: "./010.png" },
    { id: "#0011", name: "Metapod", types: ["Bug"], image: "./011.png" },
    {
      id: "#0012",
      name: "Butterfree",
      types: ["Bug", "Flying"],
      image: "./012.png",
    },
    {
      id: "#0013",
      name: "Weedle",
      types: ["Bug", "Poison"],
      image: "./013.png",
    },
    {
      id: "#0014",
      name: "Kakuna",
      types: ["Bug", "Poison"],
      image: "./014.png",
    },
    {
      id: "#0015",
      name: "Beedrill",
      types: ["Bug", "Poison"],
      image: "./015.png",
    },
  ];

  return (
    <>
      <div className="card-wrapper">
        {pokemons.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              name={pokemon.name}
              id={pokemon.id}
              types={pokemon.types}
              img={pokemon.image}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
