$(document).ready(function () {
  $('#registrarAdulto').on('click', function (e) {
    e.preventDefault();
    if (!$("#registroAdulto")[0].checkValidity()) {
      $("#registroAdulto")[0].reportValidity();
      return;
    }

    var usuario = localStorage.getItem("usuario");
    usuario = JSON.parse(usuario);
    console.log(usuario);
    var accessToken = usuario.accessToken;

    var nombre = $("#nombre").val();
    console.log(nombre);

    var apellido = $("#apellido").val();
    console.log(apellido);

    var rut = $("#rut").val();
    console.log(rut);

    var email = $("#email").val();
    console.log(email);

    var direccion = $("#direccion").val();
    console.log(direccion);

    var telefono = $("#telefono").val();
    console.log(telefono);

    var settings = {
      url: "http://localhost:3000/adulto-mayor/create",
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + accessToken
      },
      data: JSON.stringify({
        rut: rut,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        direccion: direccion,
        email: email



      }),
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      alert("Registro exitoso")
      window.location = "usuarioLogueado.html"
    });
  });
});