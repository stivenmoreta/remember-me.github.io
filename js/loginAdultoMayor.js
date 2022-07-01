$(document).ready(function(){
    $('#iniciarSesionAdulto').on('click', function(e) {
        e.preventDefault();
        var rut=$("#rut").val();
        console.log(rut);

        var settings = {
            "url": "http://localhost:3000/auth/login-adulto",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "rut": rut
            }),
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response)
            localStorage.setItem("usuarioAdultoMayor", JSON.stringify(response));

            alert("Login correcto")
            window.location="adultoMayorLogueado.html"
          }).fail(function(){
              alert("Rut invalido")
          })
        

    })

})