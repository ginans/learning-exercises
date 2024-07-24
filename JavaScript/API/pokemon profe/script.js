document.addEventListener("DOMContentLoaded", () => {
  const pokemonContainer = document.getElementById("pokemon-container");
  const searchButton = document.getElementById("search-button");
  const searchInput = document.getElementById("search-input");
  const fetchPokemon = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );
      const data = await response.json();
      const pokemonResults = data.results;
      for (const pokemon of pokemonResults) {
        const pokemonData = await fetchPokemonDetails(pokemon.url);
        displayPokemon(pokemonData);
      }
    } catch (error) {
      console.error("Error fetching pokemon data:", error);
    }
  };
  const fetchPokemonDetails = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching pokemon details:", error);
    }
  };
  const displayPokemon = (pokemon) => {
    const pokemonElement = document.createElement("div");
    pokemonElement.classList.add("pokemon");
    pokemonElement.innerHTML = `
          <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
              <h2>${pokemon.name}</h2>
              <p>ID: ${pokemon.id}</p>
              <p>Type: ${pokemon.types
                .map((typeInfo) => typeInfo.type.name)
                .join(", ")}</p>
          `;
    pokemonContainer.appendChild(pokemonElement);
  };
  const searchPokemon = async () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (!searchTerm) {
      return;
    }
    try {
      pokemonContainer.innerHTML = "";
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
      );
      if (response.ok) {
        const pokemonData = await response.json();
        displayPokemon(pokemonData);
      } else {
        console.error("NO HAY POKEMON CON ESTE NOMBRE");
        pokemonContainer.innerHTML = "<p>No Pokémon found with that name.</p>";
      }
    } catch (error) {
      console.error("Error searching for Pokémon:", error);
    }
  };
  searchButton.addEventListener("click", searchPokemon);
  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      searchPokemon();
    }
  });
  fetchPokemon();
});
