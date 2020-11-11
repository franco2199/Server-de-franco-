$(document).ready(function (){
    $("a").click(function(evento){
        alert("Haz pulsado el enlace.Ahora serás enviado a la página de la USAT")
    });
});

/*
 Ocultar / Mostrar bloque 
$("#c1b").click(function(){
    $("#cont1").toggle(1500);
}, function(){
    $("#cont1").toggle(1500);
});
*/
$("#c1b").click(function() {
    $("#cont1").toggle(1500);
},
function() {
    $("#cont1").toggle(1500);
});