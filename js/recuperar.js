$(document).ready(function(){
    $('#recuperar').on('click', function(e) {
        e.preventDefault();
        var email=$("#email").val();
        console.log(email);

        var settings = {
            "url": "http://localhost:3000/auth/recover",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "email": email
            }),
          };
          
          $.ajax(settings).done(function (response) {
          

            alert("Se ha enviado un correo")
            window.location="login.html"
          })
        

    })

})