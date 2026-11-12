document.addEventListener("DOMContentLoaded", function () {

    Handlebars.registerHelper("estrellas", function (calificacion) {
        let estrellas = "";

        for (let i = 1; i <= 5; i++) {
            if (i <= calificacion) {
                estrellas += "★";
            } else {
                estrellas += "☆";
            }
        }

        return new Handlebars.SafeString(estrellas);
    });

    fetch("testimonios.hbs")
        .then(function (respuesta) {
            return respuesta.text();
        })
        .then(function (plantilla) {
            const template = Handlebars.compile(plantilla);

            const contenido = template(datosTestimonios);

            document.getElementById("contenedor-testimonios").innerHTML = contenido;
        })
        .catch(function (error) {
            console.error("Error al cargar los testimonios:", error);
        });

});