$(document).ready(function(){
    $('#reiniciar').on('click', function(e) {
        e.preventDefault();
 

        var password=$("#password").val();
        console.log(password);

        const urlSearchParams = new URLSearchParams(window.location.search);
       const params = Object.fromEntries(urlSearchParams.entries());

        var settings = {
            "url": "https://remember-meee.herokuapp.com/auth/reset",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "tempToken": params.tempToken,
              "password": password
            }),
          };
          
          $.ajax(settings).done(function (response) {
          
            alert("Contraseña reiniciada correctamente")
            window.location="login.html"
          })
        

    })

})