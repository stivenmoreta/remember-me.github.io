$(document).ready(function() {
    $('#crearCuenta').on('click', function(e) {
        e.preventDefault();
        if (!$("#registro")[0].checkValidity()) {
          $("#registro")[0].reportValidity();
          return;
        }
        var nombre=$("#nombre").val();
        console.log(nombre);

        var apellido=$("#apellido").val();
        console.log(apellido);

        var rut=$("#rut").val();
        console.log(rut);

        var email=$("#email").val();
        console.log(email);

        var telefono=$("#telefono").val();
        console.log(telefono);

        var password=$("#password").val();
        console.log(password);

        var settings = {
            "url": "http://localhost:3000/auth/register",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "rut": rut,
              "nombre": nombre,
              "apellido": apellido,
              "telefono": telefono,
              "email": email,
              "password": password
            }),
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            alert("usuario creado correctamente")
            window.location="login.html"
          });
    }); 
});