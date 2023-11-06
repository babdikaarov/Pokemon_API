import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemonList, pokemonListSet] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data) => {
        let list = data.results;
        list.map((item) => {
          // extracting id from pokemon url endpoint
          const id = item.url.match(/\/(\d+)\/$/);
          // adding id to pokemon object
          item.id = id[1];
        });
        pokemonListSet(list);
      });
  }, []);

  // console.log(pokemonList);

  return (
    <main>
      <section>
        {pokemonList.map((pokemon, i) => (
          <div className="pokemon" key={i}>
            <img
              // endpoint find reference within README file
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={`name: ${pokemon.name}`}
            />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
