document.addEventListener('DOMContentLoaded', () => {
    const barra_busqueda = document.getElementById("entrada");
    const contenedor = document.getElementById("container");
    const boton = document.getElementById("search-button");

    const fetch_perros = async () => {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random/10");
            const data = await response.json();
            const imagenes_perros = data.message;
            for (const imagen of imagenes_perros) {
                display_perro(imagen);
            }
        } catch (error) {
            console.error("Error fetching dog data:", error);
        }
    };

    const display_perro = (imageUrl) => {
        const elemento = document.createElement("div");
        elemento.classList.add("perro");
        elemento.innerHTML = `
        <img src="${imageUrl}" alt="Perro">
        `;
        contenedor.appendChild(elemento);
    };

    const buscar_raza = async () => {
        const search_term = barra_busqueda.value.toLowerCase().trim();
        if (!search_term) {
            return;
        }
        try {
            contenedor.innerHTML = "";
            const response = await fetch(`https://dog.ceo/api/breed/${search_term}/images/random/10`);
            const data = await response.json();
            if (response.ok && data.status === "success") {
                data.message.forEach(imageUrl => display_perro(imageUrl));
            } else {
                contenedor.innerHTML = "<p>Esa raza no existe o hubo un error en la búsqueda</p>";
            }
        } catch (error) {
            console.error("Error buscando raza de perro:", error);
            contenedor.innerHTML = "<p>Error al buscar la raza de perro</p>";
        }
    };

    boton.addEventListener("click", buscar_raza);
    barra_busqueda.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            buscar_raza();
        }
    });

    fetch_perros();
});