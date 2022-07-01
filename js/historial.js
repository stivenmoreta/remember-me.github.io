
$(document).ready(function () {
  var usuarioAdultoMayor = localStorage.getItem("usuarioAdultoMayor");
  usuarioAdultoMayor = JSON.parse(usuarioAdultoMayor);
  console.log(usuarioAdultoMayor);
  $('#nombreUsuarioAdulto').html(usuarioAdultoMayor.nombre);
  $('#apellidoUsuarioAdulto').html(usuarioAdultoMayor.apellido);
  $('#rutUsuarioAdulto').html(usuarioAdultoMayor.rut);
  $('#emailUsuarioAdulto').html(usuarioAdultoMayor.email);
  $('#direccionUsuarioAdulto').html(usuarioAdultoMayor.direccion);
  $('#telefonoUsuarioAdulto').html(usuarioAdultoMayor.telefono);

  var settings = {
    "url": "https://remember-meee.herokuapp.com/medicamento/" + usuarioAdultoMayor.id + "/historial",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response)

    var nombres = " ";
    var fechas = " ";
    var horas = " ";
    for (var i = 0; i < response.length; i++) {
      var nombre = response[i].nombre;
      var fecha_tomado = response[i].fecha_tomado;

      // Example of rendering
      nombres += "<p class='alineado-iz'> " + nombre+"</p>"
      fechas += "<p class='alineado-iz'> " + formatDate(new Date(fecha_tomado))+"</p>"
      horas += "<p class='alineado-iz'> " + formatTime(new Date(fecha_tomado))+"</p>"

    }

    $("#nombres").html(nombres);
    $("#fechas").html(fechas);
    $("#horas").html(horas);




  })




})

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}

function formatTime(date) {
  return [
    padTo2Digits(date.getHours()),
    padTo2Digits(date.getMinutes())
  ].join(':');
}