const formulario = document.getElementById("formLogin");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if (usuario !== "" && password !== "") {

        document.getElementById("login").classList.add("d-none");

        document.getElementById("sistema").classList.remove("d-none");

        document.getElementById("nombreUsuario").textContent = usuario;

    } else {

        document.getElementById("mensajeLogin").textContent =
            "Debe ingresar usuario y contraseña.";
    }
});