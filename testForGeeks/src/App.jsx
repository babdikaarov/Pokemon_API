import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemonList, pokemonListSet] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data) => pokemonListSet(data.results));
  }, []);

  console.log(pokemonList);
  return (
    <main>
      <section>
        {pokemonList.map((pokemon, i) => (
          <div className="pokemon" key={i}>
            <p>{pokemon.name}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
