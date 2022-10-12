var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];


//ACTIVIDAD 6.1

var dni = prompt("Introduce tu DNI sin letra: ");
var letra = prompt("Introduce la letra de tu DNI: ");

//ACTIVIDAD 6.2

if(dni<0 || dni>99999999){
    alert("El DNI proporcionado no es valido")
}

//ACTIVIDAD 6.3

var calcularDNI = dni%23;

//ACTIVIDAD 6.4

if(letras[calcularDNI] == letra.toUpperCase() ){
    alert("La letra y el DNI indicados son correctos");
}else{
    alert("La letra y el DNI indicados NO son correctos");
}