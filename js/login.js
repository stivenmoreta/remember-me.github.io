$(document).ready(function(){
    $('#iniciarSesion').on('click', function(e) {
        e.preventDefault();
        var email=$("#email").val();
        console.log(email);

        var password=$("#password").val();
        console.log(password);

        var settings = {
            "url": "https://remember-meee.herokuapp.com/auth/login",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "email": email,
              "password": password
            }),
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response)
            localStorage.setItem("usuario", JSON.stringify(response));

            alert("Login correcto")
            window.location="usuarioLogueado.html"
          }).fail(function(){
              alert("correo o contraseña invalida")
          })
        

    })

})