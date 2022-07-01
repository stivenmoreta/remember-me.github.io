$(document).ready(function() {
    var usuario = localStorage.getItem("usuario");
    usuario = JSON.parse(usuario);
    console.log(usuario);
    $('#nombreUsuario').html(usuario.nombre);

    
    $('#aceptarSelector').on('click', function(e) {
        e.preventDefault();
        var selector=$("#selector").val();
        console.log(selector);
        if(selector === "registrarAdulto"){
            alert("haz seleccionado registrar un adulto")
            window.location="registroAdultoMayor.html"
        }
        else{
            alert("haz seleccionado ficha adulto mayor")
            window.location="fichaAdultoMayor.html"
        }
         
            
        
    })

});