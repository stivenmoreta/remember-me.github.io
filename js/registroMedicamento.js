$(document).ready(function () {
  var abuelo =null;
  var usuario = localStorage.getItem("usuario");
  usuario = JSON.parse(usuario);
  console.log(usuario);
  var accessToken = usuario.accessToken;


  var settings = {
    "url": "http://localhost:3000/adulto-mayor/findAll",
    "method": "GET",
    "timeout": 0,
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + accessToken
    },
  };

  $.ajax(settings).done(function (response) {
    abuelo = response[0];
    console.log(abuelo)



  })




  $('#ingresarMedicamento').on('click', function (e) {
    e.preventDefault();
    if (!$("#registroMedicamento")[0].checkValidity()) {
      $("#registroMedicamento")[0].reportValidity();
      return;
    }
    var nombre = $("#nombre").val();
    console.log(nombre);

    var dosis = $("#dosis").val();
    console.log(dosis);

    var horario = $("#horario").val();
    console.log(horario);

    var fechaInicio = $("#fechaInicio").val();
    console.log(fechaInicio);

    var fechaTermino = $("#fechaTermino").val();
    console.log(fechaTermino);

    var settings = {
      "url": "http://localhost:3000/medicamento/"+abuelo.id,
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json"
      },
      "data": JSON.stringify({
        "nombre": nombre,
        "dosis": dosis,
        "horario": horario,
        "fecha_inicio": fechaInicio,
        "fecha_termino": fechaTermino
      }),
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      alert("Medicamento ingresado correctamente")
      window.location = "usuarioLogueado.html"
    });
  });
});