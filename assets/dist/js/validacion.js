function validar(Correo,Correolabel) {

    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(Correo) )
        alert("Error: La dirección de correo " + Correo + " es incorrecta.");
    else {
        document.getElementById("Correolabel").style.color = "green";
        document.getElementById("Correolabel").innerHTML="Email Valido"
        
    }



}