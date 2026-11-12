document.addEventListener("DOMContentLoaded", async function () {

    const contenedor = document.getElementById("contenedor-galeria");

    try {
        const respuesta = await fetch("galeria.hbs");
        const plantillaHTML = await respuesta.text();

        const plantilla = Handlebars.compile(plantillaHTML);

        contenedor.innerHTML = plantilla(datosGaleria);

    } catch (error) {
        console.error("Error al cargar la galería:", error);
        contenedor.innerHTML = "<p>No se pudo cargar la galería.</p>";
    }

});