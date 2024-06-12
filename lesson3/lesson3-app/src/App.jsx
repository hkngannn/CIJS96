import "./App.css";
import Card from "./component/Card";
import Modal from "./component/modal";
// import Light from "./component/light/Light";
import { useState } from "react";

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

  // const [lightOn, setLightOn] = useState("green")
  // const changeLight = () => {
  //   if(lightOn === 'green') {
  //     setLightOn('yellow');
  //     return;
  //   };

  //   if(lightOn === 'yellow') {
  //     setLightOn('red');
  //     return;
  //   };

  //   if(lightOn === 'red') {
  //     setLightOn('green');
  //     return;
  //   }
  // }

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
      {/* 
     <div className="traffic-light-wrapper">
      <div className="traffic-light">
      <Light color={"red"} isOn={lightOn === "red"}/>
      <Light color={"yellow"} isOn={lightOn === "yellow"}/>
      <Light color={"green"} isOn={lightOn === "green"}/>
      </div>

      <button className="next-light" onClick={changeLight}>Chuyển</button>

    //  </div> */}
    </>
  );
}

export default App;
