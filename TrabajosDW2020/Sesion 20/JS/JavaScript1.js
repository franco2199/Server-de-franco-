function mostrarDia(){
    var numero_dia = document.getElementById("numero_dia").Value;
    numero_dia = parseInt(numero_dia);
    switch(numero_dia){
        case 1:
            document.getElementById("resultado_dia").innerHTML = "el dia es: Lunes";
            break;
        case 2:
            document.getElementById("resultado_dia").innerHTML = "el dia es: Martes";
            break;
        case 3:
            document.getElementById("resultado_dia").innerHTML = "el dia es: Miercoles";
            break;
        case 4:
            document.getElementById("resultado_dia").innerHTML = "el dia es: Jueves";
            break;
        case 5:
            document.getElementById("resultado_dia").innerHTML = "el dia es: Viernes";
            break;
        case 6:
            document.getElementById("resultado_dia").innerHTML = "el dia es: Sábado";
            break;
        case 7:
            document.getElementById("resultado_dia").innerHTML = "el dia es: Domingo";
            break;
        default:
            document.getElementById("resultado_dia").innerHTML= "No existe este día";
    }
}