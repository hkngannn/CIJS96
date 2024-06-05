import "./App.css";
import Card from "./component/Card";
import Modal from "./component/modal";
import Light from "./component/light/Light";
import { useState } from "react";

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
    ]

  const [pokeData, setPokeData] = useState(pokemons);
  const [crrData, setCrrData] = useState(null);

  const [lightOn, setLightOn] = useState("green")
  const changeLight = () => {
    if(lightOn === 'green') {
      setLightOn('yellow');
      return;
    };

    if(lightOn === 'yellow') {
      setLightOn('red');
      return;
    };

    if(lightOn === 'red') {
      setLightOn('green');
      return;
    }
  }

  return (
    <>
      <div className="card-wrapper">
        {pokemons.map((pokeData) => {
          return (
            <Card
              key={pokeData.id}
              name={pokeData.name}
              id={pokeData.id}
              types={pokeData.types}
              img={pokeData.image}
              onClick={() => {
                setCrrData(pokeData)
              }}
             />)
          })}

  {crrData && <Modal pokemon={crrData} onClose={() => setCrrData(null)}/>} 

      </div>

     <div className="traffic-light-wrapper">
      <div className="traffic-light">
      <Light color={"red"} isOn={lightOn === "red"}/>
      <Light color={"yellow"} isOn={lightOn === "yellow"}/>
      <Light color={"green"} isOn={lightOn === "green"}/>
      </div>
          <button className="next-light" onClick={changeLight}>Chuyển</button>
     </div>
    </>
  );
}

export default App;
