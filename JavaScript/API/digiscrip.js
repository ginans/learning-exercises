document.addEventListener("DOMContentLoaded", () => {
  const container_digimon = document.getElementById("digi-container");
  const barra_busqueda = document.getElementById("barra-busqueda");

  barra_busqueda.addEventListener("input", (event) => {
    const busca_digi = event.target.value.toLowerCase().trim();
    fetch_digimon(busca_digi);
  });

  function fetch_digimon(query = "") {
    let url = "https://digimon-api.vercel.app/api/digimon";
    if (query) {
      url = `https://digimon-api.vercel.app/api/digimon/name/${query}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        container_digimon.innerHTML = "";
        data.forEach((digimon) => {
          const digimon_card = document.createElement("div");
          digimon_card.classList.add("digimon-card");
          digimon_card.innerHTML = `
                  <img src="${digimon.img}" alt="${digimon.name}">
                  <h3>${digimon.name}</h3>
                  <p>${digimon.level}</p>
                  `;

            container_digimon.appendChild(digimon_card);
        });
      })
      .catch((error) => console.error("Error fetching Digimon:", error));
  }

  fetch_digimon();
});
