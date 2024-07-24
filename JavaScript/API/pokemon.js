document.addEventListener("DOMContentLoaded", () => {
    const characterContainer = document.getElementById("character-container");
    const searchBar = document.getElementById("search-bar");

    searchBar.addEventListener("input", (event) => {
        const searchTerm = event.target.value.toLowerCase();
        fetchCharacter(searchTerm);
    });

    async function fetchCharacter(pokemonName = "") {
        if (pokemonName.trim() === "") {
            characterContainer.innerHTML = "";
            return;
        }

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            const data = await response.json();
            
            characterContainer.innerHTML = "";
            
            const characterCard = document.createElement("div");
            characterCard.classList.add("character-card");
            characterCard.innerHTML = `
                <h2>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>Altura: ${data.height / 10} m</p>
                <p>Peso: ${data.weight / 10} kg</p>
            `;
            characterContainer.appendChild(characterCard);
        } catch (error) {
            console.error("Error fetching character:", error);
            characterContainer.innerHTML = "Pokémon no encontrado. Intenta con otro nombre.";
        }
    }

});