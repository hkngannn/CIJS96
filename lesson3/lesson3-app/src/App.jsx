import "./App.css";
import Card from "./component/Card";
import Modal from "./component/modal";
import { useEffect, useState } from "react";

function App() {
  const pokemons = [
    {
      id: "#0001",
      name: "Bulbasaur",
      types: ["Grass", "Poison"],
      image: "./001.png",
      class: "Grass",
    },
    {
      id: "#0002",
      name: "Ivysaur",
      types: ["Grass", "Poison"],
      image: "./002.png",
      class: "Grass",
    },
    {
      id: "#0003",
      name: "Venusaur",
      types: ["Grass", "Poison"],
      image: "./003.png",
      class: "Grass",
    },
    {
      id: "#0004",
      name: "Charmander",
      types: ["Fire"],
      image: "./004.png",
      class: "Fire",
    },
    {
      id: "#0005",
      name: "Charmeleon",
      types: ["Fire"],
      image: "./005.png",
      class: "Fire",
    },
    {
      id: "#0006",
      name: "Charizard",
      types: ["Fire", "Flying"],
      image: "./006.png",
      class: "Fire",
    },
    {
      id: "#0007",
      name: "Squirtle",
      types: ["Water"],
      image: "./007.png",
      class: "Water",
    },
    {
      id: "#0008",
      name: "Wartortle",
      types: ["Water"],
      image: "./008.png",
      class: "Water",
    },
    {
      id: "#0009",
      name: "Blastoise",
      types: ["Water"],
      image: "./009.png",
      class: "Water",
    },
    {
      id: "#0010",
      name: "Caterpie",
      types: ["Bug"],
      image: "./010.png",
      class: "Bug",
    },
    {
      id: "#0011",
      name: "Metapod",
      types: ["Bug"],
      image: "./011.png",
      class: "Bug",
    },
    {
      id: "#0012",
      name: "Butterfree",
      types: ["Bug", "Flying"],
      image: "./012.png",
      class: "Bug",
    },
    {
      id: "#0013",
      name: "Weedle",
      types: ["Bug", "Poison"],
      image: "./013.png",
      class: "Bug",
    },
    {
      id: "#0014",
      name: "Kakuna",
      types: ["Bug", "Poison"],
      image: "./014.png",
      class: "Bug",
    },
    {
      id: "#0015",
      name: "Beedrill",
      types: ["Bug", "Poison"],
      image: "./015.png",
      class: "Bug",
    },
  ];

  const listClass = {};
  pokemons.forEach((pokemon) => {
    listClass[pokemon.class] = 1;
  });

  const [pokeData, setPokeData] = useState(pokemons);
  const [crrData, setCrrData] = useState(null);

  const handleSave = () => {
    const index = pokeData.findIndex((item) => item.id === crrData.id);
    if (index > -1) {
      pokeData[index] = {
        ...pokeData[index],
        ...crrData,
      };
      setPokeData([...pokeData]);
      setCrrData(null);
    }
  };

  const [pokeSearch, setPokeSearch] = useState("");

  const handleSearch = () => {
    const filterPoke = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(pokeSearch.toLowerCase());
    });
    setPokeData(...[filterPoke]);
  };

  const [checkBox, setCheckBox] = useState([])
  const filterByClass = pokemons.filter(pokemon => checkBox.find(data => data === pokemon.class));

  const [dataPokemon, setDataPokemon] = useState([])

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
          })
        );
          const formatedPokemon =  pokemonDetails.map(pokemon => ({
            id: `#${String(pokemon.id).padStart(4, '0')}`,
            name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
            types: pokemon.types.map(typeInfo => typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1)),
            image: pokemon.sprites.front_default,
          }))

          setDataPokemon(formatedPokemon)
      }
      catch (error) {
        console.error('Fail to fetch pokemons', error)
      }
    }
    fetchPokemon()
  }
)

console.log(dataPokemon)

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search Pokemon"
          onChange={(e) => setPokeSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="filter">

          <p><b>Filter by class:</b></p>

          <div className="listCheckbox">
            {Object.keys(listClass).map((key) => {
              return (
                <p className="item" key={key}>
                  <input type="checkbox" id={key} value={key} onClick={(e) => {setCheckBox([...checkBox, e.target.value])}}/>
                  <label htmlFor={key}>{key}</label>
                </p>
              );
            })}
        </div>
      </div>

      <div className="card-wrapper">
        
        {filterByClass.length > 0 ? filterByClass.map((pokeData) => {
          return (
            <Card
              key={pokeData.id}
              name={pokeData.name}
              id={pokeData.id}
              types={pokeData.types}
              img={pokeData.image}
              onClick={() => {
                setCrrData(pokeData);
              }}
            />
          );
        }) : pokeData.map((pokeData) => {
          return (
            <Card
              key={pokeData.id}
              name={pokeData.name}
              id={pokeData.id}
              types={pokeData.types}
              img={pokeData.image}
              onClick={() => {
                setCrrData(pokeData);
              }}
            />
          );
        }) 
      }


        {crrData && (
          <Modal
            pokemon={crrData}
            onClose={() => setCrrData(null)}
            onChangePokemon={(pokemon) => {
              setCrrData(pokemon);
            }}
            onSave={handleSave}
          />
        )}
      </div>
    </>
  );
}

export default App;
