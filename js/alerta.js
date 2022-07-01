
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
    "url": "http://localhost:3000/medicamento/" + usuarioAdultoMayor.id,
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response)

    var str = "";
    for (var i = 0; i < response.length; i++) {
      var nombre = response[i].nombre;
      var id = response[i].id;

     

      // Example of rendering
      str += "<p > " + nombre +  "</p>";
      str += "<p id='horario"+id+"'>....</p>";
    
    }
    $("#medicamentos").html(str);

    for (let i = 0; i < response.length; i++) {
      let id = response[i].id;
      let horario = response[i].horario;
      console.log(horario)

      const date = new Date();
      date.setHours(horario.split(":")[0], horario.split(":")[1], 0, 0);

      if(date.getDate()- new Date().getTime()){
        date.setDate(date.getDate()+1);
      }

      let countDownDate =date.getTime();

    

      let x = setInterval(function() {

        let now = new Date().getTime();
      
        let distance = countDownDate - now;
      
      //  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        document.getElementById("horario"+id).innerHTML =  " en "+ hours + " horas "
        + minutes + " minutos " + seconds + " segundos ";
      
        // Si llega a 0 pasa algo
        if (hours ==0 &&  minutes== 0  &&  seconds ==0 ) {
          clearInterval(x);
          // console.log("alarma")
          // var audio = new Audio("../audio/.mp3");
          // audio.play();
          localStorage.setItem("medicamento", JSON.stringify(response[i]));
          window.location="alertaMedicamento.html";
        }
      }, 1000);

      //cronometro(id)
     // setInterval(()=>cronometro(id), 1000);
      
    }
   


  })

  function cronometro(i) {
    console.log(i)
 
    var segundo = parseInt($("#segundo"+i).value);
    var hora = parseInt($("#hora"+i).value);
    var minuto = parseInt($("#minuto"+i).value);
    console.log(segundo)
    console.log(minuto)
    console.log(hora)
    
    
  if (segundo == 60) {
    minuto = ++minuto;
    segundo = 0;
  }

  if (minuto == 60) {
    minuto = 0;
    hora = ++hora;

  }
    console.log(segundo)
    console.log(minuto)
    console.log(hora)
    
   
    $("#hora"+i).html(hora);
    $("#minuto"+i).html(minuto);
    $("#segundo"+i).html(segundo);
  
  };
  
  
  


  //get the closable setting value.
  // var closable = alertify.alert().setting('closable');
  // //grab the dialog instance using its parameter-less constructor then set multiple settings at once.
  // alertify.alert()
  //   .setting({
  //     'startMaximized': true,
  //     'label': 'Agree',
  //     'message': 'Hora del medicamento ' + (closable ? ' ' : ' not ') + '',
  //     'onok': function () { alertify.success('Great'); },


  //   }).show();


})